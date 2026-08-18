import { pagesContent } from '../data/pagesData.js';
import { citiesData } from '../data/citiesData.js';
import { servicesData } from '../data/servicesData.js';
import { renderTrustBadges } from '../components/TrustBadges.js';
import { renderFAQAccordion } from '../components/FAQAccordion.js';

export function renderCityHubPage(citySlug) {
  const city = citiesData.find(c => c.slug === citySlug) || citiesData[0];
  const page = pagesContent[city.id] || {};

  const otherCities = citiesData.filter(c => c.slug !== citySlug);

  return `
    <!-- Hero Section -->
    <section class="hero-section" style="padding: 4.5rem 0 4.5rem 0;" aria-label="${city.name} Plumbing Hero">
      <div class="container">
        <div class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="/" data-link>Home</a></li>
            <li class="breadcrumb-item"><a href="/locations/" data-link>Service Areas</a></li>
            <li class="breadcrumb-item active">${city.name}, TX</li>
          </ul>
        </div>

        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge-row">
              <span class="plumbzo-pill orange">⚡ ${city.responseTime}</span>
              <span class="plumbzo-pill">📍 ${city.county} Hub</span>
            </div>

            <h1 class="hero-headline">
              ${page.h1 || `Trusted Plumbing, Drain Cleaning & Water Heater Services in ${city.name}, TX`}
            </h1>

            <p class="hero-subhead">
              ${page.leadSubtitle || `Same-day diagnostics, licensed master plumbers, and upfront flat-rate pricing for homeowners and commercial businesses throughout ${city.name} and ${city.county}.`}
            </p>

            <div style="background: #ffffff; padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; box-shadow: var(--shadow-subtle);">
              <div>
                <span style="font-size: 0.78rem; color: var(--color-brand-orange); text-transform: uppercase; font-weight: 800; display: block;">Local Zip Codes</span>
                <strong style="font-size: 1.05rem; color: var(--text-main);">${city.zipCodes.join(', ')}</strong>
              </div>
              <div>
                <span style="font-size: 0.78rem; color: var(--color-success); text-transform: uppercase; font-weight: 800; display: block;">Customer Rating</span>
                <strong style="font-size: 1.05rem; color: var(--text-main);">★ ${city.rating} (${city.reviewsCount} Local Reviews)</strong>
              </div>
              <button type="button" class="btn btn-primary btn-sm open-lead-modal" data-city="${city.name}">
                Dispatch Tech Now →
              </button>
            </div>

            <div class="hero-cta-group">
              <a href="tel:${city.phone.replace(/[^0-9]/g, '')}" class="btn btn-primary btn-lg">
                <span>📞</span> Call ${city.phoneDisplay}
              </a>
              <button type="button" class="btn btn-secondary btn-lg open-lead-modal" data-city="${city.name}">
                Get ${city.name} Estimate
              </button>
            </div>
          </div>

          <!-- Hero Local Lead Card -->
          <div class="hero-lead-card">
            <div class="hero-form-header">
              <span class="plumbzo-pill orange" style="margin-bottom: 0.4rem;">${city.name} Local Dispatch</span>
              <h2 class="hero-form-title">Request Plumber in ${city.name}</h2>
              <p class="hero-form-subtitle">Direct dispatch across ${city.county}</p>
            </div>

            <form onsubmit="return false;">
              <div class="form-group">
                <label class="form-label" for="city-service">Service Needed in ${city.name} *</label>
                <select class="form-control" id="city-service" required>
                  <option value="" disabled selected>-- Select Plumbing Service --</option>
                  ${servicesData.map(s => `
                    <option value="${s.title}">${s.title}</option>
                  `).join('')}
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="city-lead-name">Your Name *</label>
                  <input type="text" class="form-control" id="city-lead-name" placeholder="Name" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="city-lead-phone">Phone *</label>
                  <input type="tel" class="form-control" id="city-lead-phone" placeholder="Phone" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="city-lead-zip">Your ${city.name} Zip Code</label>
                <input type="text" class="form-control" id="city-lead-zip" value="${city.zipCodes[0]}" maxlength="5">
              </div>

              <button type="button" class="btn btn-primary form-submit-btn open-lead-modal" data-city="${city.name}">
                Get Free Estimate in ${city.name} →
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
          <!-- Left Column: Rich Local Content -->
          <div class="rich-content-body">
            ${page.sections && page.sections.length > 0 ? page.sections.map(sec => `
              <h2>${sec.heading}</h2>
              ${sec.paragraphs.map(p => `
                <p>${p}</p>
              `).join('')}
            `).join('') : `
              <h2>Licensed Master Plumbing Services in ${city.name}, TX</h2>
              <p>
                Operating a residential or commercial plumbing system in ${city.name} requires experienced master plumbers who understand the localized soil conditions, water hardness ratings, and municipal building codes of ${city.county}.
              </p>
            `}

            <!-- Local Geology & Water Quality Callout Box -->
            <div class="card" style="background: var(--bg-warm); border-left: 4px solid var(--color-brand-orange); margin: 2.5rem 0; padding: 2.25rem;">
              <h3 style="color: var(--text-main); margin-bottom: 0.75rem;">
                🔬 ${city.name} Soil & Hydrological Profile
              </h3>
              <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                <strong>Geotechnical Foundation Environment:</strong> ${city.soilType}. Soil movement in ${city.county} regularly subjects sub-slab foundations to severe shifting, making routine acoustic leak detection and PEX-a repiping essential.
              </p>
              <p style="font-size: 0.95rem; color: var(--text-muted); margin: 0;">
                <strong>Water Quality & Hardness Rating:</strong> ${city.waterHardness}. Mineral scale buildup requires high-capacity water softeners and code-compliant thermal expansion tanks to prevent premature hot water tank failure.
              </p>
            </div>

            <!-- Neighborhoods & Landmarks Served -->
            <h2>Neighborhoods & Communities We Serve in ${city.name}</h2>
            <p>Our rapid-response service trucks are positioned throughout ${city.name} and surrounding areas:</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1.25rem 0 2.5rem 0;">
              ${city.landmarks.map(lm => `
                <span class="plumbzo-pill" style="font-size: 0.85rem; font-weight: 600; text-transform: none; letter-spacing: 0;">
                  📍 ${lm}
                </span>
              `).join('')}
            </div>

            <!-- 8 Services Available in this City -->
            <h2>Plumbing Services Available in ${city.name}, TX</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0 2.5rem 0;">
              ${servicesData.map(s => `
                <div class="card" style="padding: 1.5rem;">
                  <h4 style="color: var(--text-main); margin-bottom: 0.35rem; font-size: 1.1rem;">
                    ${s.shortTitle}
                  </h4>
                  <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                    ${s.summary.slice(0, 85)}...
                  </p>
                  <a href="${s.path}" style="font-size: 0.88rem; color: var(--color-brand-orange); font-weight: 700;" data-link>
                    Learn More →
                  </a>
                </div>
              `).join('')}
            </div>

            <!-- Other Texas Hubs -->
            <div style="margin-top: 3rem;">
              <span class="plumbzo-pill orange">Other Hubs</span>
              <h2 style="font-size: 1.6rem; margin-bottom: 1rem;">
                Explore Other Texas Service Areas
              </h2>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem;">
                ${otherCities.map(oc => `
                  <a href="${oc.path}" class="card" style="padding: 1rem 1.15rem; text-decoration: none;" data-link>
                    <strong style="color: var(--text-main); font-size: 0.95rem; display: block;">${oc.name}, TX</strong>
                    <span style="font-size: 0.78rem; color: var(--text-muted);">${oc.county}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Column: Sticky City Sidebar -->
          <div class="rich-content-sidebar">
            <div class="card sticky-sidebar-card" style="box-shadow: var(--shadow-card);">
              <span class="plumbzo-pill orange" style="margin-bottom: 0.75rem;">${city.name} Dispatch</span>
              <h3 style="font-size: 1.45rem; color: var(--text-main); margin-bottom: 0.5rem;">
                Plumber Standing By in ${city.name}
              </h3>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.25rem;">
                Average arrival time in ${city.name}: <strong>${city.responseTime}</strong>.
              </p>

              <a href="tel:${city.phone.replace(/[^0-9]/g, '')}" class="btn btn-primary btn-lg" style="width: 100%; margin-bottom: 0.75rem;">
                📞 Call ${city.phoneDisplay}
              </a>

              <button type="button" class="btn btn-secondary open-lead-modal" style="width: 100%;" data-city="${city.name}">
                Request Estimate Online →
              </button>

              <div style="border-top: 1px solid var(--border-light); margin-top: 1.75rem; padding-top: 1.25rem;">
                <h4 style="font-size: 0.98rem; color: var(--text-main); margin-bottom: 0.65rem;">Top Services in ${city.name}</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.45rem;">
                  ${city.topServices.map(ts => `
                    <li style="font-size: 0.88rem; color: var(--text-muted);">✓ ${ts}</li>
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
        question: `How fast can an emergency plumber arrive in ${city.name}, TX?`,
        answer: `Our licensed master plumbing partners in ${city.name} maintain an average emergency arrival time of ${city.responseTime} across ${city.county} and surrounding areas.`
      },
      {
        question: `Do plumbers in ${city.name} pull required city building permits?`,
        answer: `Yes. All major water heater replacements, sewer line excavations, and gas line repairs in ${city.name} are permitted in full compliance with ${city.name} municipal codes and Texas State Board of Plumbing Examiners (TSBPE) regulations.`
      }
    ])}
  `;
}
