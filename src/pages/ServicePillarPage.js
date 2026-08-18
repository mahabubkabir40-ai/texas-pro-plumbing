import { pagesContent } from '../data/pagesData.js';
import { servicesData } from '../data/servicesData.js';
import { citiesData } from '../data/citiesData.js';
import { renderTrustBadges } from '../components/TrustBadges.js';
import { renderFAQAccordion } from '../components/FAQAccordion.js';

export function renderServicePillarPage(serviceSlug) {
  const service = servicesData.find(s => s.slug === serviceSlug) || servicesData[0];
  const page = pagesContent[service.id] || {};

  const otherServices = servicesData.filter(s => s.slug !== serviceSlug);

  return `
    <!-- Hero Section -->
    <section class="hero-section" style="padding: 4.5rem 0 4.5rem 0;" aria-label="${service.title} Hero">
      <div class="container">
        <div class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="/" data-link>Home</a></li>
            <li class="breadcrumb-item"><a href="/services/" data-link>Services</a></li>
            <li class="breadcrumb-item active">${service.shortTitle}</li>
          </ul>
        </div>

        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge-row">
              <span class="plumbzo-pill ${service.urgency.includes('Emergency') ? 'orange' : ''}">
                ⚡ ${service.urgency}
              </span>
              <span class="plumbzo-pill">TSBPE Master Plumber Certified</span>
            </div>

            <h1 class="hero-headline">
              ${page.h1 || service.title}
            </h1>

            <p class="hero-subhead">
              ${page.leadSubtitle || service.summary}
            </p>

            <div style="background: #ffffff; padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; box-shadow: var(--shadow-subtle);">
              <div>
                <span style="font-size: 0.78rem; color: var(--color-brand-orange); text-transform: uppercase; font-weight: 800; display: block;">Typical Job Estimate</span>
                <strong style="font-size: 1.25rem; color: var(--text-main);">${service.avgJobValue}</strong>
              </div>
              <div>
                <span style="font-size: 0.78rem; color: var(--color-success); text-transform: uppercase; font-weight: 800; display: block;">Response Time</span>
                <strong style="font-size: 1.25rem; color: var(--text-main);">30–45 Min Dispatch</strong>
              </div>
              <button type="button" class="btn btn-primary btn-sm open-lead-modal" data-service="${service.title}">
                Get Exact Quote →
              </button>
            </div>

            <div class="hero-cta-group">
              <a href="tel:8005557586" class="btn btn-primary btn-lg">
                <span>📞</span> Call (800) 555-PLUMB
              </a>
              <button type="button" class="btn btn-secondary btn-lg open-lead-modal" data-service="${service.title}">
                Schedule Diagnostics
              </button>
            </div>
          </div>

          <!-- Hero Quick Form -->
          <div class="hero-lead-card">
            <div class="hero-form-header">
              <span class="plumbzo-pill orange" style="margin-bottom: 0.4rem;">Priority Dispatch</span>
              <h2 class="hero-form-title">Request ${service.shortTitle} Service</h2>
              <p class="hero-form-subtitle">Connect with a local licensed master plumber now</p>
            </div>

            <form onsubmit="return false;">
              <div class="form-group">
                <label class="form-label" for="sp-city">Your Texas City *</label>
                <select class="form-control" id="sp-city" required>
                  <option value="" disabled selected>-- Select Your City --</option>
                  ${citiesData.map(c => `
                    <option value="${c.name}">${c.name} (${c.county})</option>
                  `).join('')}
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="sp-name">Full Name *</label>
                  <input type="text" class="form-control" id="sp-name" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="sp-phone">Phone Number *</label>
                  <input type="tel" class="form-control" id="sp-phone" placeholder="(555) 000-0000" required>
                </div>
              </div>

              <button type="button" class="btn btn-primary form-submit-btn open-lead-modal" data-service="${service.title}">
                Get Free Estimate →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
    ${renderTrustBadges()}

    <!-- Main Content & Sidebar Layout -->
    <section class="section">
      <div class="container">
        <div class="rich-content-grid">
          <!-- Left Column: Rich Localized Content -->
          <div class="rich-content-body">
            ${page.sections && page.sections.length > 0 ? page.sections.map(sec => `
              <h2>${sec.heading}</h2>
              ${sec.paragraphs.map(p => `
                <p>${p}</p>
              `).join('')}
            `).join('') : `
              <h2>Professional ${service.title} Across Texas</h2>
              <p>${service.summary}</p>
            `}

            <!-- Warning Signs Callout Box -->
            <div class="card" style="background: var(--bg-warm); border-left: 4px solid var(--color-brand-orange); margin: 2.5rem 0; padding: 2.25rem;">
              <h3 style="color: var(--text-main); margin-bottom: 1rem;">
                ⚠️ Critical Warning Signs You Need ${service.shortTitle}
              </h3>
              <ul style="margin: 0; padding-left: 1.25rem;">
                ${service.signs.map(sign => `
                  <li style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-main);">${sign}</li>
                `).join('')}
              </ul>
            </div>

            <!-- 5-Step Code Compliant Process -->
            <h2>Our 5-Step Code-Compliant Process</h2>
            <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
              <div class="card" style="padding: 1.5rem;">
                <h4 style="color: var(--text-main);">1. Rapid On-Site Arrival & Safety Isolation</h4>
                <p style="font-size: 0.95rem; margin: 0;">Technician arrives with full diagnostic tools, tests system integrity, and safely isolates water/gas supplies if necessary.</p>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <h4 style="color: var(--text-main);">2. Precision Diagnostics & Root Cause Identification</h4>
                <p style="font-size: 0.95rem; margin: 0;">We pinpoint exact leak coordinates, sewer obstructions, or water heater failures without destructive guesswork.</p>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <h4 style="color: var(--text-main);">3. Written Upfront Flat-Rate Pricing</h4>
                <p style="font-size: 0.95rem; margin: 0;">We present clear repair vs replacement options with transparent pricing before turning any wrench.</p>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <h4 style="color: var(--text-main);">4. TSBPE Master Plumber Installation & Code Compliance</h4>
                <p style="font-size: 0.95rem; margin: 0;">Work is executed to strict Texas plumbing codes, including expansion tanks, dielectric unions, and ASME relief valves.</p>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <h4 style="color: var(--text-main);">5. Final Pressure Testing & Written Warranty</h4>
                <p style="font-size: 0.95rem; margin: 0;">We pressure test the line, thoroughly clean the workspace, and provide our complete parts & labor warranty.</p>
              </div>
            </div>

            <!-- City Service Hubs Grid for this service -->
            <div style="margin-top: 3.5rem;">
              <span class="plumbzo-pill orange">Local City Hubs</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">
                Available in All 10 Texas Target Cities
              </h2>
              <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                Looking for ${service.shortTitle.toLowerCase()} in your specific Texas city? Select your local hub below:
              </p>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.85rem;">
                ${citiesData.map(c => `
                  <a href="${c.path}" class="card" style="padding: 1.15rem 1.35rem; display: flex; justify-content: space-between; align-items: center; text-decoration: none;" data-link>
                    <div>
                      <strong style="color: var(--text-main); font-size: 1rem;">${c.name}, TX</strong>
                      <div style="font-size: 0.82rem; color: var(--text-muted);">${c.county}</div>
                    </div>
                    <span style="color: var(--color-brand-orange); font-weight: 700; font-size: 0.9rem;">View Hub →</span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Column: Sticky Conversion Sidebar -->
          <div class="rich-content-sidebar">
            <div class="card sticky-sidebar-card" style="box-shadow: var(--shadow-card);">
              <span class="plumbzo-pill orange" style="margin-bottom: 0.75rem;">Direct Intake</span>
              <h3 style="font-size: 1.45rem; color: var(--text-main); margin-bottom: 0.5rem;">
                Need ${service.shortTitle} Service?
              </h3>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.25rem;">
                Technicians standing by across Texas. Get upfront pricing today.
              </p>

              <a href="tel:8005557586" class="btn btn-primary btn-lg" style="width: 100%; margin-bottom: 0.75rem;">
                📞 Call (800) 555-PLUMB
              </a>

              <button type="button" class="btn btn-secondary open-lead-modal" style="width: 100%;" data-service="${service.title}">
                Request Estimate Online →
              </button>

              <div style="border-top: 1px solid var(--border-light); margin-top: 1.75rem; padding-top: 1.25rem;">
                <h4 style="font-size: 0.98rem; color: var(--text-main); margin-bottom: 0.75rem;">Other Core Services</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
                  ${otherServices.slice(0, 5).map(os => `
                    <li>
                      <a href="${os.path}" style="font-size: 0.9rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem;" data-link>
                        <span>•</span> ${os.title}
                      </a>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    ${renderFAQAccordion(page.faqs || [
      {
        question: `How much does ${service.shortTitle.toLowerCase()} cost in Texas?`,
        answer: `Average job costs for ${service.shortTitle.toLowerCase()} typically range between ${service.avgJobValue} depending on system capacity, pipe accessibility, and specific local municipal permit codes. We provide transparent upfront flat-rate quotes on-site.`
      },
      {
        question: `How quickly can a technician be dispatched for ${service.shortTitle.toLowerCase()}?`,
        answer: `Our emergency dispatch network routes a licensed Texas master plumber to your location within 30 to 45 minutes on average across our 10 primary Texas service hubs.`
      }
    ])}
  `;
}
