<template>
  <div class="page submission">
    <header class="submission__hero">
      <div class="reveal">
        <p class="section__eyebrow">Submission Mechanics and Guidelines</p>
        <h1>Submit Your Entry</h1>
        <p class="submission__lead">
          The International Research Conference on Criminology, Criminal Justice and Policy
          Innovations (IR3CJPI) welcomes submissions from scholars, researchers, practitioners,
          educators, students, policymakers, and professionals whose work advances criminology,
          criminal justice, forensic sciences, public safety, and related fields.
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
      <!-- Authors and Co-authors -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Submission Overview</p>
          <h2>Authors and co-authors</h2>
        </div>
        <div class="prose">
          <ul class="submission__list">
            <li>
              Submissions may be made by individual authors or research teams.
            </li>
            <li>
              Faculty members, researchers, practitioners, graduate students, government personnel,
              and professionals from relevant disciplines are encouraged to participate.
            </li>
            <li>
              Interdisciplinary and collaborative research is highly encouraged.
            </li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Paper Requirement -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Requirements</p>
          <h2>Paper requirement</h2>
        </div>
        <div class="prose">
          <ul class="submission__list">
            <li>
              Submitted papers should present original research, innovative practices, case studies,
              policy analyses, or scholarly work relevant to the conference themes.
            </li>
            <li>
              Papers based on completed or ongoing thesis, dissertation, capstone, or funded
              research projects are welcome, provided that proper authorship is observed.
            </li>
            <li>
              Authors are responsible for ensuring that all submitted work is their own and that
              appropriate acknowledgment is given to the work of others through proper citation.
            </li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Theme Alignment and Ethics -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Guidelines</p>
          <h2>Conference theme alignment and research ethics</h2>
        </div>
        <div class="prose">
          <ul class="submission__list">
            <li>
              Submitted papers should be aligned with one or more of the official conference
              sub-thematic areas announced in the Call for Papers.
            </li>
            <li>
              Authors are expected to conduct their research in accordance with accepted ethical
              principles and applicable institutional or national guidelines.
            </li>
            <li>
              For studies involving human participants, authors are encouraged to obtain
              appropriate ethics approval or institutional clearance whenever applicable and to
              ensure informed consent, confidentiality, and responsible data management.
            </li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Submission and Review -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Review Process</p>
          <h2>Submission and review</h2>
        </div>
        <div class="prose">
          <p>
            Complete submissions received on or before the announced deadline will undergo an
            initial screening and peer review by the Conference Scientific Committee.
          </p>
          <ul class="submission__list">
            <li>
              Based on the review results, papers may be accepted for Oral Presentation, Poster
              Presentation, or returned to the authors for revision before final acceptance.
            </li>
            <li>
              Authors will be notified of the review outcome through the official conference
              communication channels.
            </li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Presenter Registration -->
      <section class="section reveal">
        <div class="section__header">
          <p class="section__eyebrow">Confirmation</p>
          <h2>Presenter registration and confirmation</h2>
        </div>
        <div class="prose">
          <ul class="submission__list">
            <li>
              Authors of accepted papers are required to complete the conference registration and
              payment within the prescribed registration period to confirm their participation.
            </li>
            <li>
              Only registered presenters will be included in the official conference program,
              presentation schedule, certificate issuance, and conference proceedings, subject to
              compliance with the conference requirements.
            </li>
            <li>
              If registration is not completed by the specified deadline, the conference
              organizers may remove the paper from presentation and proceedings consideration.
            </li>
          </ul>
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
                  <button class="btn btn--primary" type="button" @click="openAuthorForm()">
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
                  <button class="btn btn--primary" type="button" @click="openParticipantForm()">
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

// Separate URLs for each form
const authorFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScvSHFjzf634g1OpvCP_x8cea1iFFRwvcegP0Ybm068mqkcIg/viewform'

const participantFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSeIv1pB79Ls4WDAUn0jWewlPtvctOm4WTP74mw62K447t_KMA/formResponse'

function openAuthorForm() {
  window.open(authorFormUrl, '_blank', 'noopener')
}

function openParticipantForm() {
  window.open(participantFormUrl, '_blank', 'noopener')
}
</script>
