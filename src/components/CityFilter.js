import { citiesData } from '../data/citiesData.js';

export function renderCityDirectoryGrid(filterTitle = "Explore Our 10 Texas Service Hubs", filterSubtitle = "Local licensed plumbers standing by with fast emergency arrival in your neighborhood") {
  return `
    <section class="section" id="city-directory-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Statewide Coverage</span>
          <h2>${filterTitle}</h2>
          <p>${filterSubtitle}</p>
        </div>

        <div class="city-filter-container">
          <div class="city-search-bar">
            <input type="text" id="city-search-input" class="city-search-input" placeholder="🔍 Search by city, county (e.g. Gregg, Grayson, Victoria)...">
          </div>
        </div>

        <div class="city-cards-grid" id="city-cards-grid">
          ${citiesData.map(c => renderCityCard(c)).join('')}
        </div>
      </div>
    </section>
  `;
}

export function renderCityCard(city) {
  return `
    <div class="city-hub-card" data-city-name="${city.name.toLowerCase()}" data-city-county="${city.county.toLowerCase()}" data-city-region="${city.region.toLowerCase()}">
      <div>
        <div class="city-card-header">
          <div>
            <h3 class="city-card-title">${city.name}, TX</h3>
            <div class="city-card-county">${city.county}</div>
          </div>
          <div style="font-size: 0.85rem; font-weight: 700; color: #fbbf24; background: var(--color-primary); padding: 0.2rem 0.6rem; border-radius: var(--radius-sm);">
            ★ ${city.rating} (${city.reviewsCount})
          </div>
        </div>

        <div class="city-dispatch-badge">
          <span>⚡</span> ${city.responseTime}
        </div>

        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
          <strong>Geology & Soil:</strong> ${city.soilType}.<br>
          <strong>Water Quality:</strong> ${city.waterHardness}.
        </p>

        <div style="font-size: 0.82rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.4rem;">
          Top Services Requested:
        </div>
        <ul class="city-tags-list">
          ${city.topServices.map(ts => `
            <li class="city-service-tag">${ts}</li>
          `).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 0.5rem; margin-top: 1.25rem;">
        <a href="${city.path}" class="btn btn-secondary btn-sm" style="flex: 1;" data-link>
          City Hub Details →
        </a>
        <a href="tel:${city.phone.replace(/[^0-9]/g, '')}" class="btn btn-emergency btn-sm" style="padding: 0.5rem 0.85rem;" title="Call Local Dispatch">
          📞
        </a>
      </div>
    </div>
  `;
}

export function initCityFilterEvents() {
  const searchInput = document.getElementById('city-search-input');
  const cardsGrid = document.getElementById('city-cards-grid');

  if (searchInput && cardsGrid) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = cardsGrid.querySelectorAll('.city-hub-card');

      cards.forEach(card => {
        const name = card.getAttribute('data-city-name') || '';
        const county = card.getAttribute('data-city-county') || '';
        const region = card.getAttribute('data-city-region') || '';

        if (!query || name.includes(query) || county.includes(query) || region.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}
