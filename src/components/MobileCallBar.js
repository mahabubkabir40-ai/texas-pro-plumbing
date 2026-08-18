export function renderMobileCallBar(phone = "8005557586", displayPhone = "(800) 555-PLUMB") {
  return `
    <div class="mobile-floating-bar" role="complementary" aria-label="Quick Action Floating Bar">
      <a href="tel:${phone}" class="btn btn-emergency" id="mobile-call-cta">
        <span>📞</span> Call ${displayPhone}
      </a>
      <button type="button" class="btn btn-primary open-lead-modal" id="mobile-quote-cta">
        <span>⚡</span> Free Estimate
      </button>
    </div>
  `;
}
