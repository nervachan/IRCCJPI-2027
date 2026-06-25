<template>
  <div class="page submission">
    <header class="submission__hero">
      <div class="reveal">
        <p class="section__eyebrow">Call for Full Papers</p>
        <h1>Submit Your Entry</h1>
        <p class="submission__lead">
          Full paper submissions for IR3CJPI 2027 are now open. Follow the guidelines below and
          use the submission portal to upload your manuscript.
        </p>
        <div class="submission__actions">
          <router-link class="btn btn--primary" to="/">Back to Home</router-link>
          <a class="btn btn--ghost" href="#submission">Go to Portal</a>
        </div>
      </div>

      <div class="timeline-panel reveal reveal-delay-2">
        <h2>Submission Timeline</h2>
        <ul class="timeline-list">
          <li class="timeline-item">
            <div class="timeline-dot timeline-dot--active">
              <span class="timeline-dot-inner"></span>
            </div>
            <div class="timeline-body">
              <span>Opening Announcement</span>
              <strong>June 29, 2026</strong>
            </div>
          </li>
          <li class="timeline-item">
            <div class="timeline-dot">
              <span class="timeline-dot-inner"></span>
            </div>
            <div class="timeline-body">
              <span>Full Paper Window</span>
              <strong>June 29 &ndash; September 25, 2026</strong>
            </div>
          </li>
          <li class="timeline-item">
            <div class="timeline-dot">
              <span class="timeline-dot-inner"></span>
            </div>
            <div class="timeline-body">
              <span>Notification of Acceptance</span>
              <strong>First week of November 2026</strong>
            </div>
          </li>
          <li class="timeline-item">
            <div class="timeline-dot">
              <span class="timeline-dot-inner"></span>
            </div>
            <div class="timeline-body">
              <span>End of Registration</span>
              <strong>January 2027</strong>
            </div>
          </li>
        </ul>
      </div>
    </header>

    <main>
      <!-- Eligibility -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Eligibility</p>
          <h2>Who may submit</h2>
        </div>
        <div class="prose">
          <ul class="submission__list">
            <li>
              Only authors whose structured abstracts passed the initial screening panel are
              eligible to submit a full paper.
            </li>
            <li>
              The advisory notice will specify which track the submitter is directed toward —
              full paper or poster — based on evaluators' assessment of scope, methodology
              maturity, and readiness of findings.
            </li>
            <li>
              Submitters should follow the advisory; requests to switch tracks must be made
              in writing to the organizing committee within five (5) days of receiving the notice.
            </li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Font / Layout -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Formatting</p>
          <h2>Font, layout, and typography</h2>
        </div>
        <div class="submission__table">
          <table>
            <thead>
              <tr>
                <th scope="col">Element</th>
                <th scope="col">Specification</th>
                <th scope="col">Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Body text font</td>
                <td>Times New Roman, 12pt</td>
                <td>All paragraph text throughout the manuscript</td>
              </tr>
              <tr>
                <td>Heading font</td>
                <td>Times New Roman or Arial, 12pt bold</td>
                <td>Section headings (Introduction, Methods, etc.)</td>
              </tr>
              <tr>
                <td>Page size</td>
                <td>A4 (210 &times; 297 mm)</td>
                <td>Do not use Letter size</td>
              </tr>
              <tr>
                <td>Margins</td>
                <td>1 inch (2.54 cm) on all sides</td>
                <td>Top, bottom, left, and right</td>
              </tr>
              <tr>
                <td>Line spacing (body)</td>
                <td>Double-spaced (2.0)</td>
                <td>All body text paragraphs</td>
              </tr>
              <tr>
                <td>Line spacing (references)</td>
                <td>Single-spaced (1.0), with 6pt space between entries</td>
                <td>Reference list only</td>
              </tr>
              <tr>
                <td>Paragraph indent</td>
                <td>0.5-inch first-line indent</td>
                <td>First line of each new paragraph</td>
              </tr>
              <tr>
                <td>Page numbers</td>
                <td>Bottom center, Arabic numerals, starting from page 1</td>
                <td>All pages, including references</td>
              </tr>
              <tr>
                <td>Header</td>
                <td>Short title (max 50 characters), right-aligned</td>
                <td>All pages after the title page</td>
              </tr>
              <tr>
                <td>Text alignment</td>
                <td>Justified</td>
                <td>All body text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Required Sections -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Structure</p>
          <h2>Required sections (IMRAD)</h2>
        </div>
        <div class="submission__table">
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Section</th>
                <th scope="col">Required Contents</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Title Page</td>
                <td>Conference title, paper title, author name(s), institutional affiliation(s), corresponding author email, and selected sub-theme.</td>
                <td>Separate page; omit author details from subsequent pages for blind review.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Abstract</td>
                <td>Structured abstract of exactly 300 words with labeled sub-sections: Background, Objectives, Methods, Results, and Conclusion. Followed by 5–7 keywords.</td>
                <td>This abstract is used for the Book of Abstracts.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Introduction</td>
                <td>Background, problem statement, theoretical framework, research objectives, and significance.</td>
                <td>Must end with a clear statement of research aims.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Methods</td>
                <td>Research design, participants/data sources, sampling procedure, instruments, and data analysis method.</td>
                <td>Sufficient detail to allow replication.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Results and Discussion</td>
                <td>Findings, interpretation, and discussion in relation to existing literature and the conference theme.</td>
                <td>Figures and tables embedded here.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Conclusion</td>
                <td>Summary of key findings, policy implications, limitations, and recommendations for future research.</td>
                <td>No new data or citations in this section.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Acknowledgments (optional)</td>
                <td>Funding sources, institutional support, or personal acknowledgments.</td>
                <td>Omit if not applicable.</td>
              </tr>
              <tr>
                <td>8</td>
                <td>References</td>
                <td>Full APA 7th Edition reference list.</td>
                <td>Minimum 20 references recommended.</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Appendices (optional)</td>
                <td>Raw instruments, supplementary data tables, or supporting documents.</td>
                <td>Label as Appendix A, B, etc.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Figures and Tables -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Visual Elements</p>
          <h2>Figures and tables</h2>
        </div>
        <div class="prose">
          <p>
            All visual elements must comply with the following specifications. Non-compliant
            figures or tables will require revision before the paper is accepted into the
            proceedings.
          </p>
        </div>
        <div class="submission__table" style="margin-top: 1.2rem;">
          <table>
            <thead>
              <tr>
                <th scope="col">Element</th>
                <th scope="col">Tables</th>
                <th scope="col">Figures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Numbering</td>
                <td>Table 1, Table 2 (sequential throughout manuscript)</td>
                <td>Figure 1, Figure 2 (sequential throughout manuscript)</td>
              </tr>
              <tr>
                <td>Title placement</td>
                <td>Above the table, left-aligned, bold, sentence case</td>
                <td>Below the figure, left-aligned, italics, sentence case</td>
              </tr>
              <tr>
                <td>Caption format</td>
                <td>Table 1 Title of Table (APA 7th format)</td>
                <td>Figure 1 Title of figure. Adapted from [Source] if applicable.</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>Not applicable</td>
                <td>Minimum 300 DPI. TIFF or PNG preferred; JPEG acceptable.</td>
              </tr>
              <tr>
                <td>Font in element</td>
                <td>Times New Roman, 10pt</td>
                <td>Must be legible at final print size; minimum 8pt</td>
              </tr>
              <tr>
                <td>Source citation</td>
                <td>Below the table, in 10pt font, APA 7th</td>
                <td>Below caption, in 10pt font, APA 7th</td>
              </tr>
              <tr>
                <td>Placement</td>
                <td>Embedded in text, immediately after first mention</td>
                <td>Embedded in text, immediately after first mention</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Black and white preferred (proceedings are printed in B&amp;W)</td>
                <td>Grayscale preferred; color acceptable for digital version only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Citation -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">References</p>
          <h2>Citation and reference style</h2>
        </div>
        <div class="prose">
          <p>
            The conference adopts <strong>APA 7th Edition</strong> as the sole citation and
            reference style for all submissions. This standard applies to in-text citations,
            the reference list, and quotations throughout the manuscript. Authors unfamiliar
            with APA 7th Edition should consult the
            <em>Publication Manual of the American Psychological Association</em> (7th ed., 2020)
            or the official APA Style website at
            <a href="https://apastyle.apa.org" target="_blank" rel="noopener">apastyle.apa.org</a>.
          </p>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Submit portal -->
      <section class="section reveal" id="submission">
        <div class="section__header">
          <p class="section__eyebrow">Portal</p>
          <h2>Submit your entry</h2>
        </div>
        <div class="submission__tabs">
          <div class="submission__tablist" role="tablist" aria-label="Submission options">
            <button
              class="submission__tab"
              :class="{ 'submission__tab--active': activeSubmissionTab === 'author' }"
              type="button"
              role="tab"
              :aria-selected="activeSubmissionTab === 'author'"
              :tabindex="activeSubmissionTab === 'author' ? 0 : -1"
              @click="activeSubmissionTab = 'author'"
            >
              Author / Researcher
            </button>
            <button
              class="submission__tab"
              :class="{ 'submission__tab--active': activeSubmissionTab === 'participant' }"
              type="button"
              role="tab"
              :aria-selected="activeSubmissionTab === 'participant'"
              :tabindex="activeSubmissionTab === 'participant' ? 0 : -1"
              @click="activeSubmissionTab = 'participant'"
            >
              Participant
            </button>
          </div>

          <div
            v-if="activeSubmissionTab === 'author'"
            class="submission__tab-panel"
            role="tabpanel"
          >
            <div class="submission__cta-box">
              <div class="submission__cta-copy">
                <div class="submission__badge">Full Paper Submission</div>
                <h3>Author / Researcher entry</h3>
                <p>
                  Use this option if you are submitting a full paper as an author or researcher.
                  Please prepare your manuscript in <strong>PDF</strong> format before opening the
                  Google Form.
                </p>
                <ul class="submission__feature-list">
                  <li>Structured paper submission for the conference review process.</li>
                  <li>Upload-ready PDF manuscript and contact details.</li>
                  <li>Best used by authors whose abstracts were already screened.</li>
                </ul>
                <div class="submission__cta-actions">
                  <button class="btn btn--primary" type="button" @click="openForm()">
                    Open Author Form &rarr;
                  </button>
                  <router-link class="btn btn--ghost" to="/">Back to Home</router-link>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="submission__tab-panel" role="tabpanel">
            <div class="submission__cta-box submission__cta-box--participant">
              <div class="submission__cta-copy">
                <div class="submission__badge">Participation Registration</div>
                <h3>Participant entry</h3>
                <p>
                  This tab is for non-presenting participants. Please check the fee details below
                  and submit your information through the official Google Form when ready.
                </p>
                <div class="submission__fee-card">
                  <div>
                    <span class="submission__fee-label">Participation fee</span>
                    <strong class="submission__fee-value">To be announced</strong>
                  </div>
                  <div>
                    <span class="submission__fee-label">Payment details</span>
                    <strong class="submission__fee-value">Placeholder for bank / transfer instructions</strong>
                  </div>
                  <div>
                    <span class="submission__fee-label">Reference note</span>
                    <strong class="submission__fee-value">Official instructions will be posted here</strong>
                  </div>
                </div>
                <div class="submission__cta-actions">
                  <button class="btn btn--primary" type="button" @click="openForm()">
                    Open Participant Form &rarr;
                  </button>
                  <router-link class="btn btn--ghost" to="/">Back to Home</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeSubmissionTab = ref<'author' | 'participant'>('author')

const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScWpBD0dmi5yYmDKZjB0bj94hD6dGa-Eomru-hMd50UFxX6Fg/viewform?usp=publish-editor'

function openForm(url = formUrl) {
  window.open(url, '_blank', 'noopener')
}
</script>
