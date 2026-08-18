import { pagesContent } from '../data/pagesData.js';

export function renderAboutPage() {
  const page = pagesContent['G-004'] || {};

  return `
    <!-- 1. ABOUT US SPLIT HERO SECTION (PLUMBZO UI) -->
    <section class="hero-section" aria-label="About Texas Pro Plumbing Hero">
      <div class="container">
        <div class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="/" data-link>Home</a></li>
            <li class="breadcrumb-item active">About Us</li>
          </ul>
        </div>

        <div class="hero-grid">
          <!-- Left Column: Content -->
          <div class="hero-content">
            <div class="hero-badge-row">
              <span class="plumbzo-pill orange">
                <span class="live-dot" aria-hidden="true"></span> ⭐ TSBPE Master Plumber Credentials
              </span>
              <span class="plumbzo-pill">
                Statewide Texas Network
              </span>
            </div>

            <h1 class="hero-headline">
              About Texas Pro Plumbing — Texas' Trusted <span>Master Plumbing Network</span>
            </h1>

            <p style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--color-brand-orange); margin-bottom: 0.85rem;">
              Our Mission: Delivering Honest, Code-Compliant Plumbing Across Texas
            </p>

            <p class="hero-subhead" style="margin-bottom: 1rem;">
              Texas Pro Plumbing was established with a singular focus: to eliminate the stress, opacity, and uncertainty that homeowners face when hiring a plumbing contractor. In an industry too often characterized by unexpected overtime charges, unverified technicians, and temporary band-aid repairs, our organization stands for technical precision, transparent pricing, and uncompromising customer advocacy.
            </p>

            <p style="font-size: 1.02rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.75rem;">
              We are a dedicated network of licensed master plumbers, journeymen, and experienced field technicians serving Texas communities. By maintaining rigorous state licensing standards under the Texas State Board of Plumbing Examiners (TSBPE) and equipping our local service hubs with advanced diagnostic technology, we provide homeowners and commercial property managers with lasting peace of mind.
            </p>

            <div class="hero-cta-group">
              <button type="button" class="btn btn-primary btn-lg open-lead-modal">
                Request Free Estimate →
              </button>
              <a href="tel:8005557586" class="btn btn-secondary btn-lg">
                Call (800) 555-7586
              </a>
            </div>
          </div>

          <!-- Right Column: Master Plumber Portrait -->
          <div class="hero-photo-wrapper">
            <img src="/images/plumber_portrait.jpg" alt="Licensed Texas Master Plumber" class="hero-photo-img">
          </div>
        </div>
      </div>
    </section>


    <!-- 3. THE CORE PILLARS OF OUR SERVICE STANDARD (4 MODERN CARDS) -->
    <section class="section" aria-label="The Core Pillars of Our Service Standard">
      <div class="container">
        <div class="section-header">
          <span class="plumbzo-pill orange">Our Standard</span>
          <h2>The Core Pillars of Our Service Standard</h2>
          <p>
            Every service call, installation, and diagnostic inspection is guided by four uncompromising operational benchmarks:
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1.75rem;" class="grid-2-col">
          <!-- Pillar 1 -->
          <div class="card" style="padding: 2.25rem;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <div class="brand-icon-box" style="width: 48px; height: 48px; font-size: 1.3rem;">
                🛡️
              </div>
              <h3 style="font-size: 1.3rem; margin: 0; color: var(--text-main);">TSBPE Master Plumber Oversight</h3>
            </div>
            <p style="font-size: 0.98rem; line-height: 1.65; color: var(--text-muted); margin: 0;">
              Every project is supervised and executed by fully licensed, insured, and background-checked plumbing professionals who understand Texas building codes and local municipal permitting.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="card" style="padding: 2.25rem;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <div class="brand-icon-box" style="width: 48px; height: 48px; font-size: 1.3rem;">
                📋
              </div>
              <h3 style="font-size: 1.3rem; margin: 0; color: var(--text-main);">Upfront Flat-Rate Pricing</h3>
            </div>
            <p style="font-size: 0.98rem; line-height: 1.65; color: var(--text-muted); margin: 0;">
              We believe in complete financial transparency. Our technicians provide an itemized written quote before any work begins, so you always know the exact cost upfront.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="card" style="padding: 2.25rem;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <div class="brand-icon-box" style="width: 48px; height: 48px; font-size: 1.3rem;">
                ⚡
              </div>
              <h3 style="font-size: 1.3rem; margin: 0; color: var(--text-main);">True 24/7 Emergency Readiness</h3>
            </div>
            <p style="font-size: 0.98rem; line-height: 1.65; color: var(--text-muted); margin: 0;">
              Plumbing disasters do not adhere to standard 9-to-5 schedules. Our dispatch center is staffed around the clock, 365 days a year, ensuring rapid emergency mobilization.
            </p>
          </div>

          <!-- Pillar 4 -->
          <div class="card" style="padding: 2.25rem;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <div class="brand-icon-box" style="width: 48px; height: 48px; font-size: 1.3rem;">
                🔬
              </div>
              <h3 style="font-size: 1.3rem; margin: 0; color: var(--text-main);">Advanced Diagnostic Technology</h3>
            </div>
            <p style="font-size: 0.98rem; line-height: 1.65; color: var(--text-muted); margin: 0;">
              We invest in electronic acoustic leak detection, fiber-optic sewer cameras, and high-pressure hydro-jetters to fix root issues without unnecessary property destruction.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. OUR STATEWIDE COMMUNITY COMMITMENT (WIDE BENTO CARD) -->
    <section class="section section-subtle" aria-label="Our Statewide Community Commitment">
      <div class="container">
        <div class="bento-card-wide" style="box-shadow: var(--shadow-hover);">
          <div style="padding: 3rem 2.5rem; display: flex; flex-direction: column; justify-content: center;">
            <span class="plumbzo-pill orange" style="margin-bottom: 0.75rem;">Community Focus</span>
            <h2 style="font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 1rem; color: var(--text-main);">
              Our Statewide Community Commitment
            </h2>
            <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
              From the pine forests of East Texas to the coastal plains and North Texas border, we take pride in supporting the local communities we serve. Our plumbers live in the towns they service, meaning you are working with neighbors who care about the long-term integrity of your home's infrastructure.
            </p>
            <div>
              <a href="/locations/" class="btn btn-primary" data-link>
                Explore Texas Service Areas →
              </a>
            </div>
          </div>
          <div style="min-height: 320px;">
            <img src="/images/pipe_inspection.jpg" alt="Commercial plumbing infrastructure in Texas" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </div>
      </div>
    </section>

    <!-- 5. BOTTOM GUARANTEE BANNER -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="guarantee-banner" style="background: linear-gradient(rgba(19, 19, 18, 0.78), rgba(19, 19, 18, 0.88)), url('/images/pipe_inspection.jpg') center/cover;">
          <div class="guarantee-grid">
            <div>
              <span class="plumbzo-pill dark" style="margin-bottom: 1rem;">24/7 Texas Emergency Hotline</span>
              <h2 class="guarantee-title">Ready to Experience the Texas Pro Difference?</h2>
              <p class="guarantee-desc">
                Connect with our certified master plumbers today for same-day diagnostics, upfront pricing, and guaranteed craftsmanship.
              </p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <a href="tel:8005557586" class="btn btn-primary btn-lg">
                Call (800) 555-7586
              </a>
              <button type="button" class="btn btn-outline-white btn-lg open-lead-modal">
                Request Free Estimate →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
