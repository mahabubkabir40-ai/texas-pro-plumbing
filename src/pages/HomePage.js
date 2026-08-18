import { pagesContent } from '../data/pagesData.js';
import { citiesData } from '../data/citiesData.js';
import { servicesData } from '../data/servicesData.js';
import { renderFAQAccordion } from '../components/FAQAccordion.js';

export function renderHomePage() {
  const page = pagesContent['G-001'] || {};

  return `
    <!-- 1. HERO SECTION (100% EXACT DOC CONTENT + PLUMBZO SPLIT UI) -->
    <section class="hero-section" aria-label="Texas Pro Plumbing Homepage Hero">
      <div class="container">
        <div class="hero-grid">
          <!-- Hero Left Column -->
          <div class="hero-content">

            <h1 class="hero-headline">
              Top-Rated Plumbing, Drain Cleaning & Water Heater Services in <span>Texas</span>
            </h1>

            <div class="hero-subheadline">
              Reliable Residential & Commercial Solutions Across the Lone Star State
            </div>

            <p class="hero-subhead">
              Connecting Texas property owners with certified master plumbers. We deliver fast emergency diagnostics, upfront flat-rate pricing, and durable craftsmanship engineered specifically for Texas homes.
            </p>

            <div class="hero-cta-group">
              <button type="button" class="btn btn-primary btn-lg open-lead-modal" id="hero-get-quote-btn">
                Get Free Estimate →
              </button>
              <a href="tel:8005557586" class="btn btn-secondary btn-lg" id="hero-emergency-call-btn">
                Call (800) 555-7586
              </a>
            </div>

            <!-- Social Proof Avatar Cluster -->
            <div class="hero-social-proof">
              <div class="avatar-stack">
                <div class="avatar-stack-item" style="background: #2563eb;">TX</div>
                <div class="avatar-stack-item" style="background: #059669;">JP</div>
                <div class="avatar-stack-item" style="background: #d97706;">MR</div>
                <div class="avatar-stack-item" style="background: #7c3aed;">SD</div>
              </div>
              <div class="rating-stars-box">
                <div class="stars-row">★★★★★</div>
                <div class="rating-text"><strong>4.9 / 5.0 Star Rating</strong> | Verified Texas Customer Reviews</div>
              </div>
            </div>
          </div>

          <!-- Hero Right Column: High-Res Plumber Photo -->
          <div class="hero-photo-wrapper">
            <img src="/images/hero_plumber_sink.jpg" alt="Licensed Texas master plumber repairing sink plumbing" class="hero-photo-img">
          </div>
        </div>
      </div>
    </section>


    <!-- 3. CLIMATE & SOIL DEMANDS (WHY HOMEOWNERS TRUST US - BENTO GRID) -->
    <section class="section section-subtle" aria-label="The Unique Demands of the Texas Climate and Soil">
      <div class="container">
        <div class="section-header">
          <h2>The Unique Demands of the Texas Climate & Soil on Residential Plumbing</h2>
          <p>
            Operating and maintaining a residential plumbing system in Texas presents distinct structural and environmental challenges that standard plumbing guides overlook. Understanding these localized variables is critical to diagnosing problems accurately and preventing catastrophic property damage:
          </p>
        </div>

        <div class="bento-trust-grid">
          <!-- Bento Col 1: Solid Orange Card -->
          <div class="bento-card-orange">
            <div>
              <div style="font-size: 2.2rem; margin-bottom: 1rem;">🏜️</div>
              <h3 style="font-size: 1.45rem; margin-bottom: 0.75rem;">Expansive Blackland & Clay Soils</h3>
              <p style="font-size: 0.96rem; line-height: 1.6; opacity: 0.95;">
                Much of Texas sits on highly reactive clay soils that swell during wet seasons and shrink dramatically during summer droughts. This constant soil movement exerts thousands of pounds of pressure on sub-slab foundations, shifting concrete slabs and causing dangerous pinhole leaks or shear breaks in underground copper and PVC water lines.
              </p>
            </div>
            <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 1.5rem;">
              ✓ Non-Invasive Acoustic Detection
            </div>
          </div>

          <!-- Bento Col 2: Plumber Portrait Card -->
          <div class="bento-card-photo">
            <img src="/images/plumber_portrait.jpg" alt="Licensed Master Plumber in Texas">
          </div>

          <!-- Bento Col 3: White Card -->
          <div class="bento-card-white">
            <div style="font-size: 2.2rem; margin-bottom: 1rem;">🪨</div>
            <h3 style="font-size: 1.45rem; margin-bottom: 0.75rem; color: var(--text-main);">Extreme Hard Mineral Water</h3>
            <p style="font-size: 0.96rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 1.5rem;">
              Groundwater across Central, North, and South Texas contains elevated concentrations of dissolved calcium and magnesium. Without proper water softening, this hard water creates heavy mineral scaling inside water heater tanks, severely reducing energy efficiency, deteriorating heating elements, and causing premature tank failure within 6 to 8 years.
            </p>
            <div style="font-weight: 800; font-size: 0.85rem; color: var(--color-brand-orange); text-transform: uppercase; letter-spacing: 0.05em;">
              ✓ Ion-Exchange Descaling
            </div>
          </div>

          <!-- Bento Wide Row: Pipe Manifold Banner -->
          <div class="bento-card-wide">
            <div style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
              <span class="plumbzo-pill orange" style="margin-bottom: 0.75rem;">Freeze Resilience</span>
              <h3 style="font-size: 1.55rem; color: var(--text-main); margin-bottom: 0.5rem;">Sudden Winter Freeze Snaps</h3>
              <p style="font-size: 0.96rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
                While Texas enjoys warm weather most of the year, sudden arctic cold fronts can cause rapid, severe temperature drops. Uninsulated attic piping, exterior hose bibbs, and crawlspace plumbing lines are exceptionally vulnerable to freezing and bursting when cold snaps hit unprotected structures.
              </p>
              <div>
                <button type="button" class="btn btn-dark btn-sm open-lead-modal">
                  Request Freeze Inspection →
                </button>
              </div>
            </div>
            <div style="min-height: 240px;">
              <img src="/images/pipe_inspection.jpg" alt="PEX and copper manifold plumbing" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. OUR COMPREHENSIVE STATEWIDE PLUMBING CAPABILITIES (7 FULL CAPABILITIES) -->
    <section class="section" id="services-overview-section" aria-label="Our Comprehensive Statewide Plumbing Capabilities">
      <div class="container">
        <div class="section-header">
          <h2>Our Comprehensive Statewide Plumbing Capabilities</h2>
          <p>
            Texas Pro Plumbing delivers full-scope plumbing solutions across residential and commercial properties. Every service is performed in strict accordance with Texas State Board of Plumbing Examiners (TSBPE) standards and local municipal building codes:
          </p>
        </div>

        <div class="plumbzo-service-cards-grid">
          <!-- Service 1: Water Heater -->
          <div class="plumbzo-service-card">
            <div>
              <div class="service-card-photo-box">
                <img src="/images/water_heater_card.jpg" alt="Water heater installation" class="service-card-photo">
                <span class="service-card-tag-pill">🔥 Water Heating</span>
              </div>
              <div class="service-card-content">
                <h3>Water Heater Repair, Replacement & Tankless Conversions</h3>
                <p>
                  Turnkey diagnostics, tankless upgrades, and same-day replacements for gas and electric water heaters with code-compliant expansion tanks and upfront pricing.
                </p>
              </div>
            </div>
            <div class="service-card-bottom">
              <a href="/services/water-heater-replacement/" class="service-card-link-text" data-link>Learn More</a>
              <a href="/services/water-heater-replacement/" class="service-card-circle-btn" data-link>→</a>
            </div>
          </div>

          <!-- Service 2: Slab Leaks -->
          <div class="plumbzo-service-card">
            <div>
              <div class="service-card-photo-box">
                <img src="/images/pipe_inspection.jpg" alt="Slab leak detection" class="service-card-photo">
                <span class="service-card-tag-pill">🛡️ Foundation Plumbing</span>
              </div>
              <div class="service-card-content">
                <h3>Non-Invasive Slab Leak Detection & Whole-Home Repiping</h3>
                <p>
                  Acoustic leak diagnostics and overhead PEX-A repiping to permanently fix sub-slab copper pinhole leaks caused by shifting Texas clay foundation soils.
                </p>
              </div>
            </div>
            <div class="service-card-bottom">
              <a href="/services/slab-leak-repair-repiping/" class="service-card-link-text" data-link>Learn More</a>
              <a href="/services/slab-leak-repair-repiping/" class="service-card-circle-btn" data-link>→</a>
            </div>
          </div>

          <!-- Service 3: Drain Cleaning -->
          <div class="plumbzo-service-card">
            <div>
              <div class="service-card-photo-box">
                <img src="/images/hero_plumber_sink.jpg" alt="Drain cleaning and hydro-jetting" class="service-card-photo">
                <span class="service-card-tag-pill">🌊 Drain & Rooter</span>
              </div>
              <div class="service-card-content">
                <h3>Professional Drain Cleaning & High-Pressure Hydro-Jetting</h3>
                <p>
                  Heavy-duty motorized rooter snaking and 4,000 PSI hydro-jetting to clear stubborn grease, hair clogs, and invasive tree roots from sewer lines.
                </p>
              </div>
            </div>
            <div class="service-card-bottom">
              <a href="/services/drain-cleaning/" class="service-card-link-text" data-link>Learn More</a>
              <a href="/services/drain-cleaning/" class="service-card-circle-btn" data-link>→</a>
            </div>
          </div>

          <!-- Service 4: 24/7 Emergency -->
          <div class="plumbzo-service-card">
            <div>
              <div class="service-card-photo-box">
                <img src="/images/plumber_portrait.jpg" alt="24/7 Emergency plumbing technician" class="service-card-photo">
                <span class="service-card-tag-pill">⚡ 24/7 Dispatch</span>
              </div>
              <div class="service-card-content">
                <h3>24/7 Emergency Plumbing Repair & Rapid Leak Isolation</h3>
                <p>
                  On-call licensed master plumbers available 24/7/365 for active pipe bursts, ceiling leaks, sewer overflows, and immediate main water shutoff isolation.
                </p>
              </div>
            </div>
            <div class="service-card-bottom">
              <a href="/services/emergency-plumbing-repair/" class="service-card-link-text" data-link>Learn More</a>
              <a href="/services/emergency-plumbing-repair/" class="service-card-circle-btn" data-link>→</a>
            </div>
          </div>

          <!-- Service 5: Sewer Line & Camera -->
          <div class="plumbzo-service-card">
            <div>
              <div class="service-card-photo-box">
                <img src="/images/pipe_inspection.jpg" alt="Trenchless sewer line repair" class="service-card-photo">
                <span class="service-card-tag-pill">📹 Sewer Camera</span>
              </div>
              <div class="service-card-content">
                <h3>Trenchless Sewer Line Repair & HD Video Camera Inspections</h3>
                <p>
                  High-definition optical video camera inspections and trenchless CIPP epoxy pipe lining to repair damaged, bellied, or cracked sewer lines without trenching.
                </p>
              </div>
            </div>
            <div class="service-card-bottom">
              <a href="/services/sewer-line-repair-camera-inspection/" class="service-card-link-text" data-link>Learn More</a>
              <a href="/services/sewer-line-repair-camera-inspection/" class="service-card-circle-btn" data-link>→</a>
            </div>
          </div>

          <!-- Service 6: Water Softeners -->
          <div class="plumbzo-service-card">
            <div>
              <div class="service-card-photo-box">
                <img src="/images/water_heater_card.jpg" alt="Water softeners and filtration" class="service-card-photo">
                <span class="service-card-tag-pill">💧 Water Quality</span>
              </div>
              <div class="service-card-content">
                <h3>Whole-House Water Softening & Filtration Systems</h3>
                <p>
                  Custom-sized ion-exchange water softeners and reverse osmosis drinking water systems engineered to eliminate hard water scaling and mineral buildup across Texas.
                </p>
              </div>
            </div>
            <div class="service-card-bottom">
              <a href="/services/water-softener-filtration/" class="service-card-link-text" data-link>Learn More</a>
              <a href="/services/water-softener-filtration/" class="service-card-circle-btn" data-link>→</a>
            </div>
          </div>

          <!-- Service 7: Commercial Plumbing -->
          <div class="plumbzo-service-card">
            <div>
              <div class="service-card-photo-box">
                <img src="/images/pipe_inspection.jpg" alt="Commercial Plumbing Services" class="service-card-photo">
                <span class="service-card-tag-pill">🏢 Commercial</span>
              </div>
              <div class="service-card-content">
                <h3>Commercial Plumbing Services & Grease Trap Maintenance</h3>
                <p>
                  Full-service commercial plumbing, certified backflow preventer testing, grease trap jetting, and boiler maintenance for restaurants, retail, and medical facilities.
                </p>
              </div>
            </div>
            <div class="service-card-bottom">
              <a href="/services/commercial-plumbing/" class="service-card-link-text" data-link>Learn More</a>
              <a href="/services/commercial-plumbing/" class="service-card-circle-btn" data-link>→</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. THE 5-STEP TEXAS PRO PLUMBING SERVICE GUARANTEE (EXACT DOC WORKFLOW) -->
    <section class="section section-subtle" aria-label="The 5-Step Texas Pro Plumbing Service Guarantee">
      <div class="container">
        <div class="section-header">
          <span class="plumbzo-pill orange">Our Workflow</span>
          <h2>The 5-Step Texas Pro Plumbing Service Guarantee</h2>
          <p>Every service call is executed with military precision to protect your plumbing infrastructure and property.</p>
        </div>

        <div class="pipeline-wrapper-card">
          <div class="pipeline-grid">
            <!-- Step 1 -->
            <div class="pipeline-step-item">
              <div class="pipeline-icon-circle">
                <span>📞</span>
                <span class="pipeline-step-number-tag">01</span>
              </div>
              <h3 class="pipeline-step-title">Rapid Local Dispatch</h3>
              <p class="pipeline-step-desc">When you call our central dispatch hotline, we immediately route your service request to the nearest licensed master plumbing technician in your territory.</p>
            </div>

            <!-- Step 2 -->
            <div class="pipeline-step-item">
              <div class="pipeline-icon-circle">
                <span>🔍</span>
                <span class="pipeline-step-number-tag">02</span>
              </div>
              <h3 class="pipeline-step-title">Thorough On-Site Diagnostic</h3>
              <p class="pipeline-step-desc">Our plumber conducts a comprehensive diagnostic inspection, assessing water pressure, checking pipe integrity, and identifying the underlying root cause.</p>
            </div>

            <!-- Step 3 -->
            <div class="pipeline-step-item">
              <div class="pipeline-icon-circle">
                <span>📋</span>
                <span class="pipeline-step-number-tag">03</span>
              </div>
              <h3 class="pipeline-step-title">Transparent Upfront Flat-Rate Pricing</h3>
              <p class="pipeline-step-desc">You receive a clear, itemized written estimate before any physical work begins. We never charge hidden dispatch fees or surprise overtime surcharges.</p>
            </div>

            <!-- Step 4 -->
            <div class="pipeline-step-item">
              <div class="pipeline-icon-circle">
                <span>🔧</span>
                <span class="pipeline-step-number-tag">04</span>
              </div>
              <h3 class="pipeline-step-title">Precision Technical Execution</h3>
              <p class="pipeline-step-desc">Repairs and installations are completed using heavy-duty commercial-grade materials and OEM parts, adhering strictly to Texas plumbing codes.</p>
            </div>

            <!-- Step 5 -->
            <div class="pipeline-step-item">
              <div class="pipeline-icon-circle">
                <span>🛡️</span>
                <span class="pipeline-step-number-tag">05</span>
              </div>
              <h3 class="pipeline-step-title">System Verification & Clean Worksite</h3>
              <p class="pipeline-step-desc">We pressure-test our work, test all safety relief valves, and clean up the work area completely before leaving your property.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 7. FEATURED REGIONAL SERVICE HUBS (100% VERBATIM DOC CONTENT) -->
    <section class="section" aria-label="Featured Regional Service Hubs">
      <div class="container">
        <div class="section-header">
          <span class="plumbzo-pill orange">Statewide Service Areas</span>
          <h2>Featured Regional Service Hubs</h2>
          <p>
            Texas Pro Plumbing operates localized service hubs across Texas to ensure prompt response times and municipal code compliance. Explore our priority service areas:
          </p>
        </div>

        <div class="hubs-interactive-grid">
          <!-- 1. Longview, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/longview/" data-link>Longview, TX</a>
            </h3>
            <p class="hub-clean-text">
              Serving Gregg and Harrison Counties with 24/7 emergency leak repair, sewer rooter services, and water heater swaps.
            </p>
          </div>

          <!-- 2. Sherman, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/sherman/" data-link>Sherman, TX</a>
            </h3>
            <p class="hub-clean-text">
              Providing freeze-protection services, water heater maintenance, and slab leak detection across Grayson County.
            </p>
          </div>

          <!-- 3. Victoria, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/victoria/" data-link>Victoria, TX</a>
            </h3>
            <p class="hub-clean-text">
              Fast emergency dispatch, hard water scaling solutions, and sewer line inspections throughout the Crossroads region.
            </p>
          </div>

          <!-- 4. Temple, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/temple/" data-link>Temple, TX</a>
            </h3>
            <p class="hub-clean-text">
              Reliable residential repiping, drain clearing, and commercial plumbing across Bell County.
            </p>
          </div>

          <!-- 5. Bryan, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/bryan/" data-link>Bryan, TX</a>
            </h3>
            <p class="hub-clean-text">
              Full-service plumbing maintenance, water heater installations, and emergency drain repairs across Brazos County.
            </p>
          </div>

          <!-- 6. Burleson, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/burleson/" data-link>Burleson, TX</a>
            </h3>
            <p class="hub-clean-text">
              Rapid plumbing repairs, sub-slab water line bypasses, and fixture replacements in Johnson County.
            </p>
          </div>

          <!-- 7. Georgetown, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/georgetown/" data-link>Georgetown, TX</a>
            </h3>
            <p class="hub-clean-text">
              Whole-home water softeners, tankless installations, and leak detection for Williamson County properties.
            </p>
          </div>

          <!-- 8. Conroe, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/conroe/" data-link>Conroe, TX</a>
            </h3>
            <p class="hub-clean-text">
              Emergency plumbing repairs, water main installations, and drainage solutions across Montgomery County.
            </p>
          </div>

          <!-- 9. Rowlett, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/rowlett/" data-link>Rowlett, TX</a>
            </h3>
            <p class="hub-clean-text">
              High-ticket water heater upgrades, emergency pipe repairs, and leak detection serving Rockwall and Dallas Counties.
            </p>
          </div>

          <!-- 10. New Braunfels, TX -->
          <div class="hub-clean-card">
            <h3 class="hub-clean-title">
              <a href="/locations/new-braunfels/" data-link>New Braunfels, TX</a>
            </h3>
            <p class="hub-clean-text">
              Water softener systems, water heater flushes, and emergency repairs across Comal and Guadalupe Counties.
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- 9. FREQUENTLY ASKED QUESTIONS (100% EXACT VERBATIM DOC CONTENT) -->
    ${renderFAQAccordion([
      {
        question: "How quickly can an emergency plumber arrive at my Texas home?",
        answer: "For urgent emergencies—such as active burst pipes, severe sewage backups, or major gas leaks—our on-call dispatchers prioritize immediate routing, with technicians typically arriving within 45 to 90 minutes depending on your specific city and traffic conditions."
      },
      {
        question: "What are the primary warning signs of a hidden slab leak?",
        answer: "Key indicators include an unexplained spike in your monthly water utility bill, the sound of rushing water when all faucets are turned off, warm spots on your tile or laminate flooring, damp baseboards, or cracks appearing in your drywall and foundation."
      },
      {
        question: "How does hard water affect plumbing systems in Texas?",
        answer: "Water across much of Texas carries high levels of dissolved calcium and magnesium. This mineral content precipitates out when heated, coating heating elements in water heaters and narrowing pipe interiors. A properly sized whole-home water softener prevents scale formation and extends appliance life."
      },
      {
        question: "Are permits required for water heater replacements in Texas?",
        answer: "Yes. Texas state law and local municipal ordinances require a plumbing permit and safety inspection when replacing a water heater. This verifies that temperature and pressure relief valves, expansion tanks, and venting systems meet current safety standards."
      },
      {
        question: "How do I locate my home's main water shut-off valve?",
        answer: "In most Texas residences, the main water shut-off valve is located either in an underground meter box near the street curb or on the exterior wall where the main water line enters the home. Turning the valve a quarter-turn (for ball valves) or clockwise until tight (for gate valves) cuts water to the entire property."
      }
    ], "Frequently Asked Questions About Texas Plumbing Services", "Direct answers to common residential and commercial plumbing questions across Texas")}

    <!-- 10. PLUMBZO SIGNATURE BOTTOM COPPER PIPE BANNER -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="guarantee-banner" style="background: linear-gradient(rgba(19, 19, 18, 0.78), rgba(19, 19, 18, 0.88)), url('/images/pipe_inspection.jpg') center/cover;">
          <div class="guarantee-grid">
            <div>
              <span class="plumbzo-pill dark" style="margin-bottom: 1rem;">24/7 Texas Emergency Hotline</span>
              <h2 class="guarantee-title">Have a Sudden Plumbing Problem?</h2>
              <p class="guarantee-desc">
                From sudden midnight pipe bursts to weekend water heater failures, our licensed master plumbers are ready to deploy across Texas.
              </p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <a href="tel:8005557586" class="btn btn-primary btn-lg" id="bottom-cta-call">
                Call (800) 555-7586
              </a>
              <button type="button" class="btn btn-outline-white btn-lg open-lead-modal">
                Request Free Estimate →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
