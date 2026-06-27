<template>
  <div class="page">
    <!-- Hero -->
    <header class="hero">
      <!-- Bas-relief background layer -->
      <div class="hero__relief-bg" aria-hidden="true">
        <img src="/relief_bg.jpg" alt="" />
      </div>

      <div class="hero__content reveal">
        <div class="hero__badge">
          <span class="hero__badge-dot"></span>
          IR3CJPI 2027 &mdash; Call for Full Papers Open
        </div>

        <h1 class="hero__title">International Research Conference on Criminology, Criminal Justice and Policy Innovations</h1>

        <h2 class="hero__theme">Criminology in an Era of Human Rights Under Pressure</h2>

        <p class="hero__subtitle">
          Convening scholars, practitioners, and policy leaders to examine how justice
          systems can respond to contemporary threats while remaining firmly anchored in
          human rights principles.
        </p>

        <div class="hero__meta">
          <div class="hero__meta-item">
            <span class="meta__label">Dates</span>
            <span class="meta__value">Feb 8&ndash;9, 2027</span>
          </div>
          <div class="hero__meta-item">
            <span class="meta__label">Location</span>
            <span class="meta__value">Baguio City, Philippines</span>
          </div>
          <div class="hero__meta-item">
            <span class="meta__label">Acronym</span>
            <span class="meta__value">IR3CJPI 2027</span>
          </div>
        </div>

        <div class="hero__actions">
          <router-link class="btn btn--primary" to="/submit">Submit Full Paper</router-link>
          <a class="btn btn--ghost" href="#subthemes">Explore Sub-themes</a>
        </div>

        <div class="hero__logos">
          <span class="hero__logos-label">Organized by</span>
          <img src="/vlir-uos.png" alt="VLIR-UOS" loading="lazy" />
          <img src="/Ghent-University-Logo.png" alt="Ghent University" loading="lazy" />
          <img src="/uc_seal.png" alt="University of the Cordilleras" loading="lazy" />
          <img src="/rights2life-logo.png" alt="Rights2Life" loading="lazy" />
          <img src="/ccje_logo.png" alt="CCJE" loading="lazy" />
          <img src="/CHR_Logo.png" alt="CHR" loading="lazy" />
        </div>
      </div>

      <!-- Lion statue visual panel -->
      <div class="hero__visual reveal reveal-delay-2" aria-hidden="true">
        <div class="visual__frame">
          <div class="visual__lion-wrap">
            <img
              class="visual__lion-img"
              src="/lion_statue.jpg"
              alt="Lion Head landmark of Baguio City"
              loading="eager"
            />
            <div class="visual__lion-fade"></div>
          </div>

          <div class="visual__noise"></div>
          <div class="visual__grid-lines"></div>

          <div class="visual__emblem">
            <img class="visual__logo" src="/ccjpi_logo.png" alt="CCJPI logo" />
          </div>

          <div class="visual__info">
            <p class="visual__info-title">IR3CJPI 2027</p>
            <p class="visual__info-date">Baguio City &nbsp;&bull;&nbsp; February 2027</p>
          </div>

          <div class="visual__chips">
            <span class="visual__chip">Human Rights</span>
            <span class="visual__chip">Criminal Justice</span>
            <span class="visual__chip">Policy Innovation</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Bas-relief cultural strip -->
    <div class="relief-strip" aria-hidden="true">
      <img
        class="relief-strip__img"
        src="/relief_bg.jpg"
        alt="Cordilleran indigenous cultural bas-relief"
        loading="lazy"
      />
      <div class="relief-strip__overlay"></div>
      <div class="relief-strip__caption">
        <span class="relief-strip__caption-line"></span>
        <span class="relief-strip__caption-text">Baguio City, Cordillera &bull; Philippines</span>
        <span class="relief-strip__caption-line"></span>
      </div>
    </div>

    <main>
      <!-- Overview -->
      <section class="section reveal" id="overview">
        <div class="section__header">
          <p class="section__eyebrow">Conference Overview</p>
          <h2>Human rights at the center of criminological inquiry</h2>
        </div>
        <div class="section__two-col">
          <div>
            <p>
              In an increasingly volatile and interconnected world, human rights are confronted by
              multifaceted pressures arising from conflict, rapid technological change, evolving
              forms of criminality, and shifting governance frameworks. These dynamics challenge
              criminal justice systems to respond effectively to crime and disorder while
              safeguarding the fundamental rights and dignity of individuals.
            </p>
          </div>
          <div>
            <p>
              Within this context, criminology assumes a critical role not only in analyzing crime
              and justice systems but also in ensuring that responses remain anchored in human
              rights principles. This conference theme is framed through four key sub-themes that
              reflect both enduring concerns and emerging priorities in the field.
            </p>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Theme statement -->
      <section class="section reveal" id="theme">
        <div class="section__header">
          <p class="section__eyebrow">Theme Statement</p>
          <h2>Criminology in an Era of Human Rights Under Pressure</h2>
        </div>
        <div class="callout">
          <p>
            The conference seeks to foster critical dialogue, interdisciplinary collaboration, and
            innovative thinking that advance a more humane and responsive criminal justice system.
          </p>
        </div>
        <div class="highlights">
          <div class="highlight">
            <span class="highlight__label">Focus</span>
            <p>Rights-centered governance, accountability, and dignity in criminal justice systems.</p>
          </div>
          <div class="highlight">
            <span class="highlight__label">Approach</span>
            <p>Evidence-based strategies that balance public safety with human rights protections.</p>
          </div>
          <div class="highlight">
            <span class="highlight__label">Audience</span>
            <p>Researchers, policymakers, justice practitioners, and advocates worldwide.</p>
          </div>
        </div>
      </section>

      <!-- Sub-themes -->
      <section class="section section--alt reveal" id="subthemes">
        <div class="section--alt">
          <div class="section__inner">
            <div class="section__header">
              <p class="section__eyebrow">Sub-themes</p>
              <h2>Four lenses shaping the 2027 agenda</h2>
            </div>
            <div class="cards">
              <article class="card">
                <div class="card__number">01</div>
                <h3>Vulnerable and Marginalized Persons</h3>
                <p>
                  Critical examination of structural inequalities, barriers to justice, and
                  inclusive, victim-centered, culturally responsive approaches that ensure no
                  sector is left behind.
                </p>
              </article>
              <article class="card">
                <div class="card__number">02</div>
                <h3>Emerging Challenges and Innovations in Criminology</h3>
                <p>
                  Responsible responses to cybercrime, digital surveillance, artificial
                  intelligence in policing, and transnational criminal networks while safeguarding
                  privacy, data protection, and accountability.
                </p>
              </article>
              <article class="card">
                <div class="card__number">03</div>
                <h3>Corrections and Rehabilitation</h3>
                <p>
                  Shifting from punitive approaches toward restorative and rehabilitative models
                  that support reintegration, reduce recidivism, and uphold rights across
                  custodial and community settings.
                </p>
              </article>
              <article class="card">
                <div class="card__number">04</div>
                <h3>Human Rights-Oriented Policing</h3>
                <p>
                  Rights-based policing that emphasizes use-of-force standards, community
                  engagement, procedural justice, and adherence to international human rights
                  norms while building public trust.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- Speakers -->
      <section class="section reveal" id="speakers">
        <div class="section__header">
          <p class="section__eyebrow">Featured Speakers</p>
          <h2>Voices shaping rights-centered criminology</h2>
        </div>
        <div class="speaker-grid">
          <article class="speaker-card" tabindex="0">
            <div class="speaker-media">
              <img src="/c_vandeviewer.jpg" alt="Prof. Dr. Christophe Vandeviver" loading="lazy" />
              <div class="speaker-overlay"></div>
            </div>
            <div class="speaker-meta">
              <h3>Prof. Dr. Christophe Vandeviver</h3>
              <p>Ghent University</p>
            </div>
          </article>
          <article class="speaker-card" tabindex="0">
            <div class="speaker-media">
              <img src="/d_janssens.jpg" alt="Prof. Dr. Jelle Janssens" loading="lazy" />
              <div class="speaker-overlay"></div>
            </div>
            <div class="speaker-meta">
              <h3>Prof. Dr. Jelle Janssens</h3>
              <p>Ghent University</p>
            </div>
          </article>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Details -->
      <section class="section reveal" id="details">
        <div class="section__header">
          <p class="section__eyebrow">Conference Details</p>
          <h2>When and where</h2>
        </div>
        <div class="details-grid">
          <div class="detail-card">
            <div class="detail-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <span class="detail__label">Dates</span>
            <span class="detail__value">February 8&ndash;9, 2027</span>
          </div>
          <div class="detail-card">
            <div class="detail-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span class="detail__label">Host City</span>
            <span class="detail__value">Baguio City, Philippines</span>
          </div>
          <div class="detail-card">
            <div class="detail-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.36 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.92-8.46A2 2 0 0 1 3.32 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
              </svg>
            </div>
            <span class="detail__label">Conference Acronym</span>
            <span class="detail__value">IR3CJPI 2027</span>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section reveal" id="call">
        <div class="cta-band">
          <div class="cta-band__text">
            <h3>Submit your full paper</h3>
            <p>
              The submission window is now open. Scholars and practitioners are encouraged to align
              their work with the conference sub-themes and highlight how criminology can uphold
              human rights amid contemporary pressures.
            </p>
          </div>
          <router-link class="btn btn--white" to="/submit">Submit Entry &rarr;</router-link>
        </div>
      </section>
    </main>

    <footer class="page-footer" id="contact">
      <div class="footer__inner">
        <div>
          <p class="footer__brand-name">IR3CJPI 2027</p>
          <p class="footer__brand-desc">
            International Research Conference on Criminology, Criminal Justice and Policy
            Innovations &mdash; Baguio City, Philippines.
          </p>
        </div>
        <div class="footer__col">
          <p class="footer__col-title">Navigation</p>
          <ul>
            <li><a href="/#overview">Overview</a></li>
            <li><a href="/#subthemes">Sub-themes</a></li>
            <li><a href="/#speakers">Speakers</a></li>
            <li><a href="/#details">Details</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <p class="footer__col-title">Participation</p>
          <ul>
            <li><router-link to="/submit">Submit Entry</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>IR3CJPI 2027 &mdash; Baguio City, Philippines &bull; February 8&ndash;9, 2027</span>
        <span>Organized by CCJPI, Ghent University &amp; Partners</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HomePage' })
</script>

<style scoped>
/* ─── Hero image integration ─────────────────────────────────────── */

/*
  Bas-relief background: sits behind hero content as a very subtle
  texture, faded to ~8% opacity so it never competes with text.
  The existing hero background color/gradient renders on top via
  the hero's own background, so this only peeks through if the
  hero has any transparency.
*/
.hero {
  position: relative;
  overflow: hidden;
}

.hero__relief-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.hero__relief-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  opacity: 0.07;
  filter: grayscale(1);
  mix-blend-mode: multiply;
}

/* Ensure existing hero children stack above the background image */
.hero__content {
  position: relative;
  z-index: 2;
}

/* ─── Lion statue inside the visual frame ─────────────────────────── */

/*
  Replaces the abstract noise/emblem placeholder.
  The lion image fills the visual__frame entirely;
  the existing .visual__noise, .visual__grid-lines,
  .visual__emblem, .visual__info, and .visual__chips
  all overlay it at their normal z-index levels, so
  nothing from the original component is removed.
*/
.visual__frame {
  position: relative;
  overflow: hidden;
}

.visual__lion-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.visual__lion-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  /* Blend into the hero's existing color scheme:
     desaturate slightly, lower brightness to match
     the frame's typical dark/muted tone */
  filter: saturate(0.75) brightness(0.55);
  mix-blend-mode: luminosity;
}

/*
  Gradient fade so the lion blends into the frame edges
  rather than hard-cropping. Matches whatever edge color
  the .visual__frame already uses.
*/
.visual__lion-fade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, transparent 55%, var(--hero-frame-bg, rgba(0,0,0,0.55)) 100%),
    linear-gradient(to left,   transparent 65%, var(--hero-frame-bg, rgba(0,0,0,0.35)) 100%),
    linear-gradient(to top,    transparent 80%, var(--hero-frame-bg, rgba(0,0,0,0.2))  100%);
}

/* ─── Bas-relief cultural strip ───────────────────────────────────── */

.relief-strip {
  position: relative;
  width: 100%;
  height: 110px;
  overflow: hidden;
  /* sits flush between hero and main; inherits page background */
}

.relief-strip__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  /* match the page's existing color scheme:
     sepia ties the golden tones of the bas-relief to the
     site's primary accent color; low opacity keeps it subtle */
  opacity: 0.28;
  filter: sepia(0.5) saturate(0.8) brightness(0.9);
}

/* Fade the strip into the sections above and below */
.relief-strip__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom,
      var(--hero-bottom-color, #ffffff) 0%,
      transparent 28%,
      transparent 72%,
      var(--section-bg, #ffffff) 100%
    );
}

/* Thin caption bar centered over the strip */
.relief-strip__caption {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.relief-strip__caption-line {
  display: block;
  width: 48px;
  height: 1px;
  background: currentColor;
  opacity: 0.3;
}

.relief-strip__caption-text {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.45;
}
</style>
