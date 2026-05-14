import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import multer from 'multer'
import { google } from 'googleapis'
import { Readable } from 'node:stream'

const app = express()

const port = Number(process.env.PORT) || 5174
const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
const driveFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID || ''

const maxFileSizeMb = Number(process.env.MAX_FILE_SIZE_MB) || 25
const maxFileSizeBytes = maxFileSizeMb * 1024 * 1024
const allowedMimeTypes = new Set(
  (process.env.ALLOWED_MIME_TYPES ||
    'application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean),
)

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxFileSizeBytes },
})

app.use(cors({ origin: frontendOrigin }))

app.get('/api/health', (request, response) => {
  response.json({ ok: true })
})

app.post('/api/uploads', upload.single('file'), async (request, response) => {
  try {
    if (!request.file) {
      return response.status(400).json({ error: 'No file provided.' })
    }

    if (!allowedMimeTypes.has(request.file.mimetype)) {
      return response.status(400).json({ error: 'File type not allowed.' })
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      return response.status(500).json({ error: 'Server is missing Google credentials.' })
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    })

    const drive = google.drive({ version: 'v3', auth })

    const fileMetadata = {
      name: request.file.originalname,
      ...(driveFolderId ? { parents: [driveFolderId] } : {}),
    }

    const media = {
      mimeType: request.file.mimetype,
      body: Readable.from(request.file.buffer),
    }

    const result = await drive.files.create({
      requestBody: fileMetadata,
      media,
      fields: 'id, webViewLink, webContentLink',
    })

    return response.json({
      fileId: result.data.id,
      webViewLink: result.data.webViewLink,
      webContentLink: result.data.webContentLink,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return response.status(500).json({ error: 'Upload failed.' })
  }
})

app.listen(port, () => {
  console.log(`Upload server listening on port ${port}`)
})
