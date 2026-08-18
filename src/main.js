import './styles/main.css';
import './styles/components.css';

import { pagesContent } from './data/pagesData.js';
import { citiesData } from './data/citiesData.js';
import { servicesData } from './data/servicesData.js';

import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderLeadModal, initLeadModalEvents } from './components/LeadModal.js';
import { initFAQAccordionEvents } from './components/FAQAccordion.js';
import { initCityFilterEvents } from './components/CityFilter.js';

import { renderHomePage } from './pages/HomePage.js';
import { renderLocationsHubPage } from './pages/LocationsHubPage.js';
import { renderServicesHubPage } from './pages/ServicesHubPage.js';
import { renderAboutPage } from './pages/AboutPage.js';
import { renderContactPage } from './pages/ContactPage.js';
import { renderLegalPage } from './pages/LegalPage.js';
import { renderServicePillarPage } from './pages/ServicePillarPage.js';
import { renderCityHubPage } from './pages/CityHubPage.js';

// SEO & Schema Updater
function updateSEO(path) {
  // Normalize path
  let normalizedPath = path.endsWith('/') ? path : path + '/';
  if (normalizedPath === '') normalizedPath = '/';

  // Find page data
  let pageData = null;
  for (const [pid, p] of Object.entries(pagesContent)) {
    if (p.path === normalizedPath || (p.path === '/' && normalizedPath === '/')) {
      pageData = p;
      break;
    }
  }

  const defaultTitle = "Texas Pro Plumbing | Licensed 24/7 Plumbers Across TX";
  const defaultDesc = "Looking for trusted plumbers in Texas? Texas Pro Plumbing offers 24/7 emergency leak repair, water heater replacement & slab leak detection statewide.";

  const metaTitle = pageData?.metaTitle || defaultTitle;
  const metaDesc = pageData?.metaDescription || defaultDesc;
  const canonicalUrl = `https://texasproplumbing.com${normalizedPath}`;

  // Update DOM Title
  document.title = metaTitle;

  // Update Meta Description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.name = "description";
    document.head.appendChild(descTag);
  }
  descTag.content = metaDesc;

  // Update Canonical
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.href = canonicalUrl;

  // Generate & Inject Structured Data (JSON-LD)
  let schemaScript = document.getElementById('json-ld-schema');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'json-ld-schema';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }

  const schemaGraph = [
    {
      "@context": "https://schema.org",
      "@type": "PlumbingService",
      "name": "Texas Pro Plumbing",
      "url": "https://texasproplumbing.com/",
      "telephone": "+1-800-555-7586",
      "priceRange": "$$",
      "description": metaDesc,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "areaServed": citiesData.map(c => ({
        "@type": "City",
        "name": c.name,
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Texas"
        }
      })),
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://texasproplumbing.com/"
        },
        ...(normalizedPath !== '/' ? [{
          "@type": "ListItem",
          "position": 2,
          "name": pageData?.h1 || metaTitle,
          "item": canonicalUrl
        }] : [])
      ]
    }
  ];

  if (pageData?.faqs && pageData.faqs.length > 0) {
    schemaGraph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pageData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  schemaScript.textContent = JSON.stringify(schemaGraph, null, 2);
}

// Router
function router() {
  const path = window.location.pathname;
  const app = document.getElementById('app');

  let pageHtml = '';

  if (path === '/' || path === '') {
    pageHtml = renderHomePage();
  } else if (path === '/locations' || path === '/locations/') {
    pageHtml = renderLocationsHubPage();
  } else if (path === '/services' || path === '/services/') {
    pageHtml = renderServicesHubPage();
  } else if (path === '/about-us' || path === '/about-us/') {
    pageHtml = renderAboutPage();
  } else if (path === '/contact-us' || path === '/contact-us/') {
    pageHtml = renderContactPage();
  } else if (path === '/terms-and-conditions' || path === '/terms-and-conditions/') {
    pageHtml = renderLegalPage('terms');
  } else if (path === '/privacy-policy' || path === '/privacy-policy/') {
    pageHtml = renderLegalPage('privacy');
  } else if (path.startsWith('/services/')) {
    const serviceSlug = path.replace('/services/', '').replace('/', '');
    pageHtml = renderServicePillarPage(serviceSlug);
  } else if (path.startsWith('/locations/')) {
    const citySlug = path.replace('/locations/', '').replace('/', '');
    pageHtml = renderCityHubPage(citySlug);
  } else {
    // 404 fallback to Home
    pageHtml = renderHomePage();
  }

  // Render Full Page Layout
  app.innerHTML = `
    ${renderHeader(path)}
    <main id="main-content">
      ${pageHtml}
    </main>
    ${renderFooter()}
    ${renderLeadModal()}
  `;

  // Update Head Meta and Schema
  updateSEO(path);

  // Initialize interactive components
  initHeaderDrawer();
  initLeadModalEvents();
  initFAQAccordionEvents();
  initCityFilterEvents();

  // Scroll to top
  window.scrollTo(0, 0);
}

// Mobile Menu Drawer Handler
function initHeaderDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-links a').forEach(l => {
    l.addEventListener('click', closeDrawer);
  });
}

// Intercept Link Clicks for SPA Router
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-link]');
  if (link) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && href !== window.location.pathname) {
      window.history.pushState({}, '', href);
      router();
    }
  }
});

// Handle Browser Back/Forward
window.addEventListener('popstate', router);

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', router);
