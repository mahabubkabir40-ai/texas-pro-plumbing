import { pagesContent } from '../data/pagesData.js';
import { citiesData } from '../data/citiesData.js';
import { renderTrustBadges } from '../components/TrustBadges.js';
import { renderCityDirectoryGrid } from '../components/CityFilter.js';
import { renderFAQAccordion } from '../components/FAQAccordion.js';

export function renderLocationsHubPage() {
  const page = pagesContent['G-002'] || {};

  return `
    <!-- Header Hero -->
    <section class="hero-section" style="padding: 4.5rem 0 4.5rem 0;" aria-label="Locations Directory Hero">
      <div class="container">
        <div class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="/" data-link>Home</a></li>
            <li class="breadcrumb-item active">Service Areas</li>
          </ul>
        </div>

        <div style="max-width: 840px;">
          <span class="plumbzo-pill orange">Statewide Texas Coverage</span>
          <h1 class="hero-headline" style="font-size: clamp(2rem, 3.8vw, 3rem); margin-bottom: 1rem;">
            Texas Plumbing Service Areas & Local City Dispatch Hubs
          </h1>
          <p class="hero-subhead">
            Connecting homeowners and commercial businesses with certified local master plumbers across 10 strategic Texas growth markets. 30–45 minute emergency arrival times with full municipal code compliance.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="tel:8005557586" class="btn btn-primary btn-lg">
              📞 Call Local Dispatch: (800) 555-PLUMB
            </a>
            <button type="button" class="btn btn-secondary btn-lg open-lead-modal">
              Request Service in Your City →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
    ${renderTrustBadges()}

    <!-- City Hub Directory Grid -->
    ${renderCityDirectoryGrid("Select Your Texas City for Immediate Service", "Click any city below to explore localized pricing, emergency dispatch times, and soil-specific plumbing services.")}

    <!-- Regional Coverage Overview -->
    <section class="section section-subtle">
      <div class="container">
        <div class="section-header">
          <span class="plumbzo-pill orange">Strategic Hub Network</span>
          <h2>Why We Focus on Texas's Fastest-Growing Cities</h2>
          <p>
            Large metro centers are plagued by corporate conglomerate pricing, 4-hour dispatch windows, and generic service. Our network focuses on dedicated local hubs where we provide faster arrival, lower overhead, and neighborhood-focused master plumbers.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;" class="grid-3-col">
          <div class="card">
            <div class="service-icon-box">📍</div>
            <h3 style="margin-bottom: 0.5rem; color: var(--text-main);">North Texas & Texoma Corridor</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted);">
              Covering <strong>Sherman</strong> (Grayson County), <strong>Rowlett</strong> (Dallas/Rockwall), and <strong>Burleson</strong> (Johnson/Tarrant). Fast emergency response for clay soil foundation movements, water line replacements, and winter freeze prep.
            </p>
          </div>

          <div class="card">
            <div class="service-icon-box">📍</div>
            <h3 style="margin-bottom: 0.5rem; color: var(--text-main);">Central Texas & Austin Metro</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted);">
              Covering <strong>Georgetown</strong> (Williamson County), <strong>Temple</strong> (Bell County), and <strong>Bryan</strong> (Brazos County). Specialized in limestone rock hard water treatment, tankless upgrades, and non-invasive slab leak repair.
            </p>
          </div>

          <div class="card">
            <div class="service-icon-box">📍</div>
            <h3 style="margin-bottom: 0.5rem; color: var(--text-main);">East Texas, Gulf Coast & Hill Country</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted);">
              Covering <strong>Longview</strong> (East Texas), <strong>Conroe</strong> (Houston North), <strong>Victoria</strong> (Gulf Coast), and <strong>New Braunfels</strong> (Hill Country). Full sewer hydro-jetting, water softening, and commercial grease trap service.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    ${renderFAQAccordion(page.faqs || [
      {
        question: "How do I find out if Texas Pro Plumbing covers my specific neighborhood or zip code?",
        answer: "We cover all neighborhoods and surrounding communities within a 25 to 35-mile radius of our 10 primary city landing hubs. Call our dispatch team at (800) 555-PLUMB to check immediate real-time technician availability for your address."
      },
      {
        question: "Are your local city technicians licensed specifically for Texas building codes?",
        answer: "Yes. Every technician dispatched through our network holds a valid license from the Texas State Board of Plumbing Examiners (TSBPE) and pulls all required municipal permits in your city."
      }
    ])}
  `;
}
