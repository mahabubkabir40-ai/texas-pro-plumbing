import { pagesContent } from '../data/pagesData.js';

export function renderLegalPage(type = 'terms') {
  const isTerms = type === 'terms';
  const pageId = isTerms ? 'G-006' : 'G-007';
  const page = pagesContent[pageId] || {};

  const title = isTerms ? 'Terms and Conditions' : 'Privacy Policy';
  const canonical = isTerms ? '/terms-and-conditions/' : '/privacy-policy/';

  return `
    <section class="hero-section" style="padding: 3rem 0 3.5rem 0;" aria-label="Legal Page Hero">
      <div class="container">
        <div class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="/" style="color: #cbd5e1;" data-link>Home</a></li>
            <li class="breadcrumb-item active" style="color: #ffffff;">${title}</li>
          </ul>
        </div>
        <div style="max-width: 800px;">
          <h1 class="hero-headline" style="font-size: 2.2rem; margin-bottom: 0.5rem;">${title} — Texas Pro Plumbing</h1>
          <p class="hero-subhead" style="font-size: 1rem;">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="max-width: 860px; margin: 0 auto;" class="rich-content-body">
          ${isTerms ? `
            <h2>1. Introduction & Acceptance of Terms</h2>
            <p>Welcome to <strong>texasproplumbing.com</strong> (the "Site"), operated by Texas Pro Plumbing ("we," "us," or "our"). By accessing, browsing, or utilizing the services provided on this website, you agree to be bound by these Terms and Conditions and our Privacy Policy.</p>

            <h2>2. Plumbing Referral & Contractor Dispatch Disclaimer</h2>
            <p>Texas Pro Plumbing operates as a specialized trade referral network and emergency dispatch intake service connecting homeowners, property managers, and businesses with independent, licensed plumbing contractors across Texas. All plumbing diagnostics, quotes, and repairs are executed directly by licensed plumbing contractors holding active credentials under the Texas State Board of Plumbing Examiners (TSBPE).</p>

            <h2>3. Estimates, Flat-Rate Pricing & Service Agreements</h2>
            <p>Preliminary estimates provided online or over the phone are rough approximations based on customer descriptions. Final binding quotes are delivered in writing on-site by the dispatched licensed technician after inspecting the plumbing system.</p>

            <h2>4. Limitation of Liability</h2>
            <p>Texas Pro Plumbing shall not be liable for indirect, incidental, or consequential damages resulting from third-party plumbing repairs, pre-existing structural defects, or unauthorized DIY modifications to gas or water supply systems.</p>

            <h2>5. Contact Information</h2>
            <p>For questions regarding these Terms, contact us at <strong>legal@texasproplumbing.com</strong> or call (800) 555-7586.</p>
          ` : `
            <h2>1. Information We Collect</h2>
            <p>At Texas Pro Plumbing, we respect your personal privacy. When you request a plumbing estimate or emergency service, we collect contact information including your full name, phone number, email address, physical service address, and zip code to dispatch a local technician.</p>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is used strictly to:
              <ul>
                <li>Route your plumbing service request to the nearest licensed master plumber in your Texas county.</li>
                <li>Send appointment confirmations, technician arrival notifications, and emergency status updates via SMS/Phone.</li>
                <li>Process service requests and follow up on customer satisfaction.</li>
              </ul>
            </p>

            <h2>3. SMS & Communication Consent (TCPA Compliance)</h2>
            <p>By submitting your phone number on our website forms or calling our dispatch lines, you provide express written consent to receive calls and text messages from Texas Pro Plumbing and our dispatched contractors regarding your service request. Message and data rates may apply. You may reply STOP at any time to opt out.</p>

            <h2>4. Third-Party Sharing & Data Security</h2>
            <p>We do not sell, rent, or trade your personal data to outside marketing agencies. We implement SSL 256-bit encryption and secure protocols to protect your personal details.</p>

            <h2>5. Privacy Inquiries</h2>
            <p>For privacy requests or to delete your stored contact details, email <strong>privacy@texasproplumbing.com</strong>.</p>
          `}
        </div>
      </div>
    </section>
  `;
}
