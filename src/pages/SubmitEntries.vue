<template>
  <div class="page submission">
    <header class="submission__hero">
      <div>
        <p class="eyebrow">Call for Abstracts</p>
        <h1>Submit Entries</h1>
        <p class="submission__lead">
          Abstract submissions for IRCCJPI 2027 will open soon. This page will host the official
          portal and submission resources once the window is announced.
        </p>
        <div class="submission__actions">
          <router-link class="btn btn--ghost" to="/">Back to Home</router-link>
          <a class="btn btn--primary" href="#notify">Get Submission Alerts</a>
        </div>
      </div>
      <div class="submission__panel">
        <h2>Submission timeline</h2>
        <ul class="submission__timeline">
          <li>
            <span>Opening announcement</span>
            <strong>To be announced</strong>
          </li>
          <li>
            <span>Abstract window</span>
            <strong>To be announced</strong>
          </li>
          <li>
            <span>Notification of acceptance</span>
            <strong>To be announced</strong>
          </li>
        </ul>
      </div>
    </header>

    <main>
      <section class="section reveal">
        <div class="section__intro">
          <p class="section__eyebrow">Submission</p>
          <h2>Eligibility criteria</h2>
        </div>
        <div class="section__content">
          <h3>Submission mechanics and guidelines</h3>

          <p><strong>Eligibility</strong></p>
          <ul class="submission__list">
            <li>
              Only authors whose structured abstracts passed the initial screening panel are
              eligible to submit.
            </li>
            <li>
              The advisory notice will specify which track the submitter is directed toward — full
              paper or poster — based on the evaluators' assessment of scope, methodology maturity,
              and readiness of findings.
            </li>
            <li>
              Submitters should follow that advisory; requests to switch tracks after notification
              must be made in writing to the organizing committee within five (5) days of receiving
              the advisory.
            </li>
          </ul>
          <h2 class="submission__heading--spaced"><strong>Font, Layout, and Typography</strong></h2>
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
                  <td>A4 (210 x 297 mm)</td>
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
                  <td>Justified (both left and right margins)</td>
                  <td>All body text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 class="submission__heading--spaced"><strong>Required Sections</strong></h2>
          <ul class="submission__list">
            <li>
              All full papers must follow the IMRAD structure. 
            </li>
            <li>
              The sections must appear in the following order:
            </li>
            
          </ul>
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
                  <td>
                    Conference title, paper title, author name(s), institutional affiliation(s),
                    corresponding author email, and selected sub-theme.
                  </td>
                  <td>
                    Separate page; omit author details from all subsequent pages for blind review.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Abstract</td>
                  <td>
                    Structured abstract of exactly 300 words with labeled sub-sections:
                    Background, Objectives, Methods, Results, and Conclusion. Followed by 5-7
                    keywords.
                  </td>
                  <td>This abstract is used for the Book of Abstracts.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Introduction</td>
                  <td>
                    Background of the study, statement of the problem, theoretical or conceptual
                    framework, research objectives, and significance of the study.
                  </td>
                  <td>Must end with a clear statement of research aims.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Methods</td>
                  <td>
                    Research design, participants or data sources, sampling procedure, instruments
                    or data collection tools, and data analysis method.
                  </td>
                  <td>Sufficient detail to allow replication.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Results and Discussion</td>
                  <td>
                    Presentation of findings, interpretation, and discussion in relation to existing
                    literature and the conference theme.
                  </td>
                  <td>Figures and tables embedded here; see Section 7.</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Conclusion</td>
                  <td>
                    Summary of key findings, policy implications, limitations of the study, and
                    recommendations for future research.
                  </td>
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
                  <td>See Section 6; minimum 20 references recommended.</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Appendices (optional)</td>
                  <td>Raw instruments, supplementary data tables, or supporting documents.</td>
                  <td>Label as Appendix A, Appendix B, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 class="submission__heading--spaced"><strong>Figures and Tables</strong></h2>
          <p>
            All visual elements must comply with the following specifications. Non-compliant
            figures or tables will require revision before the paper is accepted into the
            proceedings.
          </p>
          <div class="submission__table">
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
                  <td>Embedded in the text, immediately after the first mention</td>
                  <td>Embedded in the text, immediately after the first mention</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Black and white preferred (proceedings are printed in B&amp;W)</td>
                  <td>Grayscale preferred; color acceptable for digital version only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 class="submission__heading--spaced"><strong>Citation and Reference Style (APA 7th Edition)</strong></h2>
          <p>The conference adopts APA 7th Edition as the sole citation and reference style for all submissions. This standard applies to in-text citations, the reference list, and quotations throughout the manuscript. Authors unfamiliar with APA 7th Edition should consult the Publication Manual of the American Psychological Association (7th ed., 2020) or the official APA Style website (https://apastyle.apa.org).</p>
          
        </div>
      </section>

      <section class="section reveal">
        <h2><strong>Poster Submission</strong></h2>
          <h3><strong>Format Requirements</strong></h3>
          <div class="submission__table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Element</th>
                  <th scope="col">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Poster size</td>
                  <td>A0 portrait (841 x 1189 mm) or 36 x 48 inches</td>
                </tr>
                <tr>
                  <td>Orientation</td>
                  <td>Portrait only</td>
                </tr>
                <tr>
                  <td>Resolution</td>
                  <td>Minimum 150 DPI for print; 300 DPI preferred</td>
                </tr>
                <tr>
                  <td>File format</td>
                  <td>PDF for review; print-ready file submitted upon acceptance</td>
                </tr>
                <tr>
                  <td>Font size</td>
                  <td>Minimum 24pt body text; 36pt+ for headings</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Full color permitted; high contrast required for accessibility</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3><strong>Required Sections</strong></h3>
          <ul>
            <li>Posters must contain all of the following, clearly labeled:</li>
          </ul>
          <div class="submission__table">
            <table>
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Component</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Title and Authors</td>
                  <td>
                    Must be legible from at least 1 meter; include author(s) and institutional
                    affiliation
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Background and Rationale</td>
                  <td>Brief and focused explanation of the research problem</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Objectives / Research Questions</td>
                  <td>Clearly stated objectives or research questions</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Methodology</td>
                  <td>Concise description of research design and approach</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Key Findings / Results</td>
                  <td>
                    Present main findings; use visuals such as tables, figures, and charts whenever
                    possible
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Conclusions / Next Steps</td>
                  <td>Highlight implications and future directions of the study</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>References</td>
                  <td>Include selected key references following the APA 7th Edition format</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Contact Information</td>
                  <td>Provide the author’s email for post-conference communication</td>
                </tr>
              </tbody>
            </table>
          </div>
           <h3><strong>Poster Printing Requirement</strong></h3>
           <p>All participants assigned to the poster presentation category are required to print and bring their posters on the day of the conference. The poster must follow the prescribed size and formatting guidelines set by the organizers. Failure to present a printed poster may result in disqualification from the presentation session.</p>

      </section>


      

      <section class="section reveal" id="notify">
        <div class="section__intro">
          <p class="section__eyebrow">Stay Updated</p>
          <h2>Get notified when submissions open</h2>
        </div>
        <div class="section__content">
          <div class="submission__notify">
            <div>
              <h3>Submission portal announcement</h3>
              <p>
                We will share the official link, formatting requirements, and submission guidelines
                in the next conference bulletin.
              </p>
            </div>
            <div class="submission__contact">
              <p class="submission__contact-label">Contact</p>
              <p>irccjpi2027@rights2life.org</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
