import { citiesData } from '../data/citiesData.js';
import { servicesData } from '../data/servicesData.js';

export function renderLeadModal() {
  return `
    <div class="lead-modal-backdrop" id="lead-modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="lead-modal-container">
        <button type="button" class="modal-close-btn" id="lead-modal-close" aria-label="Close modal">✕</button>
        
        <div id="modal-form-view">
          <div class="hero-form-header">
            <span class="plumbzo-pill orange" style="margin-bottom: 0.5rem;">⚡ 24/7 Texas Dispatch</span>
            <h3 class="hero-form-title" style="font-size: 1.6rem; color: var(--text-main); margin-bottom: 0.25rem;">Request a Free Estimate</h3>
            <p class="hero-form-subtitle" style="font-size: 0.92rem; color: var(--text-muted); margin: 0;">Connect with a certified Texas Master Plumber in minutes</p>
          </div>

          <form id="lead-intake-form" onsubmit="return false;" style="margin-top: 1.25rem;">
            <!-- Service Selection -->
            <div class="form-group">
              <label class="form-label" for="modal-service">Select Plumbing Service *</label>
              <select class="form-control" id="modal-service" required>
                <option value="" disabled selected>-- Select Plumbing Issue --</option>
                ${servicesData.map(s => `
                  <option value="${s.title}">${s.title}</option>
                `).join('')}
                <option value="Other Plumbing Issue">Other / General Plumbing Repair</option>
              </select>
            </div>

            <!-- Location Selection -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="modal-city">Texas City / Hub *</label>
                <select class="form-control" id="modal-city" required>
                  <option value="" disabled selected>-- Select City --</option>
                  ${citiesData.map(c => `
                    <option value="${c.name}">${c.name} (${c.county})</option>
                  `).join('')}
                  <option value="Other Texas City">Other Texas Area</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="modal-zip">Zip Code</label>
                <input type="text" class="form-control" id="modal-zip" placeholder="e.g. 75601" maxlength="5">
              </div>
            </div>

            <!-- Urgency Level -->
            <div class="form-group">
              <label class="form-label">Service Urgency *</label>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; background: var(--bg-subtle); padding: 0.75rem 1rem; border: 1.5px solid var(--border-medium); border-radius: var(--radius-sm); font-size: 0.88rem; font-weight: 600; cursor: pointer;">
                  <input type="radio" name="urgency" value="Emergency 24/7" checked>
                  <span style="color: var(--color-brand-orange); font-weight: 800;">⚡ Emergency 24/7</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; background: var(--bg-subtle); padding: 0.75rem 1rem; border: 1.5px solid var(--border-medium); border-radius: var(--radius-sm); font-size: 0.88rem; font-weight: 600; cursor: pointer;">
                  <input type="radio" name="urgency" value="Standard / Scheduled">
                  <span style="color: var(--text-main); font-weight: 700;">📅 Standard / Next Day</span>
                </label>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="modal-name">Full Name *</label>
                <input type="text" class="form-control" id="modal-name" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="modal-phone">Phone Number *</label>
                <input type="tel" class="form-control" id="modal-phone" placeholder="(555) 000-0000" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="modal-notes">Brief Description of Problem (Optional)</label>
              <textarea class="form-control" id="modal-notes" rows="2" placeholder="e.g. Water heater leaking from base, slab warm spot in hallway..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary form-submit-btn" id="modal-submit-btn">
              Dispatch Technician / Get Estimate →
            </button>

            <p class="form-privacy-note">
              🔒 100% Free & No-Obligation. By submitting, you agree to receive a call/SMS from our dispatch center to confirm appointment details.
            </p>
          </form>
        </div>

        <!-- Success Screen -->
        <div id="modal-success-view" style="display: none; text-align: center; padding: 1.5rem 0;">
          <div style="width: 64px; height: 64px; background: #d1fae5; color: #059669; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.25rem auto;">
            ✓
          </div>
          <h3 style="font-size: 1.6rem; color: var(--text-main); margin-bottom: 0.5rem;">Estimate Request Received!</h3>
          <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
            A licensed Texas plumbing dispatch specialist is reviewing your request. Expect a call within <strong style="color: var(--color-brand-orange);">5 to 15 minutes</strong>.
          </p>
          <div style="background: var(--bg-warm); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-medium); margin-bottom: 1.5rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-brand-orange); text-transform: uppercase; margin-bottom: 0.25rem;">For Immediate Emergency Priority:</div>
            <a href="tel:8005557586" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 0.5rem; text-align: center;">
              Call Now: (800) 555-7586
            </a>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="modal-reset-btn">
            Done
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initLeadModalEvents() {
  const backdrop = document.getElementById('lead-modal-backdrop');
  const closeBtn = document.getElementById('lead-modal-close');
  const form = document.getElementById('lead-intake-form');
  const formView = document.getElementById('modal-form-view');
  const successView = document.getElementById('modal-success-view');
  const resetBtn = document.getElementById('modal-reset-btn');

  function openModal(defaultService = '', defaultCity = '') {
    if (formView) formView.style.display = 'block';
    if (successView) successView.style.display = 'none';
    if (backdrop) backdrop.classList.add('open');
    if (defaultService) {
      const sSelect = document.getElementById('modal-service');
      if (sSelect) sSelect.value = defaultService;
    }
    if (defaultCity) {
      const cSelect = document.getElementById('modal-city');
      if (cSelect) cSelect.value = defaultCity;
    }
  }

  function closeModal() {
    if (backdrop) backdrop.classList.remove('open');
  }

  // Bind open triggers
  document.querySelectorAll('.open-lead-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      const city = btn.getAttribute('data-city') || '';
      openModal(service, city);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (resetBtn) resetBtn.addEventListener('click', closeModal);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formView) formView.style.display = 'none';
      if (successView) successView.style.display = 'block';
    });
  }
}
