export function renderFAQAccordion(faqs = [], title = "Frequently Asked Questions About Texas Plumbing Services", subtitle = "Direct answers to common residential and commercial plumbing questions across Texas") {
  if (!faqs || faqs.length === 0) return '';

  return `
    <section class="section section-subtle" aria-label="Frequently Asked Questions">
      <div class="container">
        <div class="section-header">
          <h2>${title}</h2>
          <p>${subtitle}</p>
        </div>

        <div class="faq-accordion-container">
          ${faqs.map((faq, idx) => `
            <div class="faq-item ${idx === 0 ? 'active' : ''}" data-faq-index="${idx}">
              <button type="button" class="faq-question-btn" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                <span class="faq-question-text">${faq.question}</span>
                <span class="faq-toggle-icon" aria-hidden="true">${idx === 0 ? '−' : '+'}</span>
              </button>
              <div class="faq-answer-panel" style="${idx === 0 ? 'display: block;' : 'display: none;'}">
                <p>${faq.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initFAQAccordionEvents() {
  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const item = btn.closest('.faq-item');
      if (!item) return;
      
      const parent = item.parentElement;
      const wasActive = item.classList.contains('active');

      // Close all in this container
      parent.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
        const b = el.querySelector('.faq-question-btn');
        const icon = el.querySelector('.faq-toggle-icon');
        const panel = el.querySelector('.faq-answer-panel');
        if (b) b.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = '+';
        if (panel) panel.style.display = 'none';
      });

      // If it was not active, open it
      if (!wasActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        const icon = item.querySelector('.faq-toggle-icon');
        const panel = item.querySelector('.faq-answer-panel');
        if (icon) icon.textContent = '−';
        if (panel) panel.style.display = 'block';
      }
    });
  });
}
