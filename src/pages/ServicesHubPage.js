import { pagesContent } from '../data/pagesData.js';
import { servicesData } from '../data/servicesData.js';
import { renderTrustBadges } from '../components/TrustBadges.js';
import { renderFAQAccordion } from '../components/FAQAccordion.js';

export function renderServicesHubPage() {
  const page = pagesContent['G-003'] || {};

  return `
    <!-- Header Hero -->
    <section class="hero-section" style="padding: 4.5rem 0 4.5rem 0;" aria-label="Services Directory Hero">
      <div class="container">
        <div class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="/" data-link>Home</a></li>
            <li class="breadcrumb-item active">Plumbing Services</li>
          </ul>
        </div>

        <div style="max-width: 840px;">
          <span class="plumbzo-pill orange">Statewide Capabilities</span>
          <h1 class="hero-headline" style="font-size: clamp(2rem, 3.8vw, 3rem); margin-bottom: 1rem;">
            Comprehensive Residential & Commercial Plumbing Services Across Texas
          </h1>
          <p class="hero-subhead">
            From emergency burst pipe repair and non-invasive slab leak detection to whole-house water softening and commercial backflow certification, our licensed master plumbers deliver flat-rate upfront pricing and durable craftsmanship.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="tel:8005557586" class="btn btn-primary btn-lg">
              📞 Call for Service: (800) 555-PLUMB
            </a>
            <button type="button" class="btn btn-secondary btn-lg open-lead-modal">
              Schedule Free Estimate →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
    ${renderTrustBadges()}

    <!-- 8 Master Service Pillars Detailed List -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="plumbzo-pill orange">All 8 Specialized Pillars</span>
          <h2>Explore Our Specialized Plumbing Solutions</h2>
          <p>Click any service below to view detailed diagnostic steps, warning signs, average job costs, and code compliance information.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${servicesData.map((s, idx) => `
            <div class="card" style="display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; padding: 2.5rem;">
              <div>
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                  <span class="plumbzo-pill ${s.urgency.includes('Emergency') ? 'orange' : ''}">
                    ${s.urgency}
                  </span>
                  <span style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600;">
                    Typical Job: <strong style="color: var(--text-main);">${s.avgJobValue}</strong>
                  </span>
                </div>

                <h3 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-main);">
                  ${idx + 1}. ${s.title}
                </h3>
                
                <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.25rem;">
                  ${s.summary}
                </p>

                <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-bottom: 1.5rem;" class="grid-2-col">
                  ${s.keyBenefits.slice(0, 4).map(kb => `
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.92rem; color: var(--text-main); font-weight: 600;">
                      <span style="color: var(--color-brand-orange);">✓</span> ${kb}
                    </div>
                  `).join('')}
                </div>

                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <a href="${s.path}" class="btn btn-dark" data-link>
                    Detailed Service Guide & Pricing →
                  </a>
                  <button type="button" class="btn btn-secondary open-lead-modal" data-service="${s.title}">
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQs -->
    ${renderFAQAccordion(page.faqs || [
      {
        question: "Do you provide upfront pricing before beginning plumbing work?",
        answer: "Yes, 100%. Our master technicians perform on-site diagnostics, explain all repair options, and provide a clear, written flat-rate quote before any work starts. There are no hidden fees or surprise billings."
      },
      {
        question: "Are your plumbing repairs backed by a warranty?",
        answer: "Every repair, repiping project, and water heater installation performed by Texas Pro Plumbing is backed by a comprehensive parts and labor warranty, as well as our 100% satisfaction guarantee."
      }
    ])}
  `;
}
