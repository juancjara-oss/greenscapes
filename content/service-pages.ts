export interface ServicePage {
  slug: string
  name: string
  tagline: string
  metaTitle: string
  metaDescription: string
  image: string
  keywords: string
  content: string
}

export const servicePages: ServicePage[] = [
  {
    slug: 'lawn-mowing',
    name: 'Lawn Mowing & Edging',
    tagline: 'Precision cuts. Crisp edges. Every time.',
    metaTitle: 'Lawn Mowing Service Roanoke VA | Greenscapes VA',
    metaDescription: 'Professional lawn mowing and edging in Roanoke, VA. Same-week service for residential and commercial properties. Call (540) 798-4479 for a free estimate.',
    image: '/assets/daleville-lawn-back-mower.webp',
    keywords: 'lawn mowing Roanoke VA, grass cutting service Roanoke Virginia, lawn care Roanoke, residential lawn mowing Salem VA',
    content: `
      <p>A well-maintained lawn is one of the first things people notice about your property. At Greenscapes VA, we deliver precision lawn mowing and edging services that give your yard a clean, professional look — every single visit.</p>

      <h2>Professional Lawn Mowing in Roanoke, Virginia</h2>
      <p>We serve homeowners and businesses throughout Roanoke, Salem, Vinton, Daleville, and the surrounding Roanoke Valley. Whether you need weekly, bi-weekly, or monthly service, we create a schedule that works for your lawn and your budget.</p>
      <p>Our team uses commercial-grade mowing equipment to deliver consistent, clean results. We mow at the correct height for your grass type, alternate cutting patterns to prevent ruts, and bag or mulch clippings based on your preference.</p>

      <h2>What's Included in Every Visit</h2>
      <ul>
        <li>Precision mowing at the proper height for your grass type</li>
        <li>Clean edging along driveways, sidewalks, and flower beds</li>
        <li>String trimming around trees, fences, and obstacles</li>
        <li>Blowing clippings off hard surfaces</li>
        <li>A final walkthrough to make sure everything looks perfect</li>
      </ul>

      <h2>Residential & Commercial Lawn Mowing</h2>
      <p>We work with homeowners who want a beautiful front yard and commercial property managers who need reliable, consistent service across multiple locations. Our team shows up on schedule — rain or shine — and gets the job done right.</p>

      <h2>Same-Week Service Available</h2>
      <p>Need your lawn cut before a weekend event or an unexpected visit? We offer same-week scheduling throughout the Roanoke area. Call us Monday and we can often have your lawn looking great by Wednesday.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>Greenscapes VA proudly serves Roanoke, Salem, Vinton, Daleville, Boones Mill, Montvale, Troutville, Blue Ridge, Cloverdale, Catawba, Smith Mountain Lake, and Botetourt County.</p>

      <p>Contact us today at <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> for a free, no-obligation estimate on lawn mowing service for your property.</p>
    `,
  },
  {
    slug: 'hedge-trimming',
    name: 'Hedge & Shrub Trimming',
    tagline: 'Sharp lines. Healthy plants. Year-round curb appeal.',
    metaTitle: 'Hedge & Shrub Trimming Roanoke VA | Greenscapes VA',
    metaDescription: 'Expert hedge and shrub trimming in Roanoke, VA. Keep your landscape looking sharp year-round. Residential & commercial. Call (540) 798-4479.',
    image: '/assets/shrub-trimming-reidsville.webp',
    keywords: 'hedge trimming Roanoke VA, shrub trimming Roanoke Virginia, bush trimming Salem VA, landscape trimming Roanoke',
    content: `
      <p>Overgrown hedges and untrimmed shrubs can make even the nicest property look neglected. Greenscapes VA delivers expert hedge and shrub trimming services that keep your landscape looking sharp, healthy, and well-maintained throughout the entire year.</p>

      <h2>Hedge & Shrub Trimming in Roanoke, Virginia</h2>
      <p>Our team has the experience and equipment to handle everything from small ornamental shrubs to large privacy hedges. We trim to your specifications, maintaining the shape and size you want while promoting healthy growth for the season ahead.</p>
      <p>Proper trimming isn't just about appearance — it's about plant health. Our technicians know the right times to trim different species, so we never cut at the wrong time and damage next year's growth or blooms.</p>

      <h2>What We Trim</h2>
      <ul>
        <li>Privacy hedges and border shrubs</li>
        <li>Ornamental and flowering shrubs</li>
        <li>Boxwoods, hollies, and evergreens</li>
        <li>Azaleas, camellias, and spring bloomers</li>
        <li>Overgrown or neglected shrub beds</li>
        <li>Foundation plantings around homes and buildings</li>
      </ul>

      <h2>More Than Just Trimming</h2>
      <p>After every trimming job, we clean up all clippings and debris, leaving your property looking pristine. We can also advise you on which shrubs may need to be replaced and what species would thrive best in your specific yard conditions in the Roanoke Valley climate.</p>

      <h2>Seasonal Timing in Virginia</h2>
      <p>In Virginia's climate, most shrubs benefit from trimming in late winter before new growth begins, and again in mid-summer after the first flush of growth. Flowering shrubs like azaleas should be trimmed right after they bloom to preserve next year's flowers. We handle the timing so you don't have to think about it.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>We provide hedge and shrub trimming services throughout Roanoke, Salem, Vinton, Daleville, Boones Mill, Montvale, Cloverdale, Troutville, and surrounding areas in the Roanoke Valley.</p>

      <p>Call us at <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> to schedule a free estimate for hedge and shrub trimming at your property.</p>
    `,
  },
  {
    slug: 'landscape-design',
    name: 'Landscape Design',
    tagline: 'Your vision. Our expertise. Extraordinary results.',
    metaTitle: 'Landscape Design Roanoke VA | Greenscapes VA',
    metaDescription: 'Custom landscape design services in Roanoke, Virginia. Transform your outdoor space with expert planning and installation. Call (540) 798-4479 for a free consultation.',
    image: '/assets/underwood-design.webp',
    keywords: 'landscape design Roanoke VA, landscaping company Roanoke Virginia, custom landscape design Salem VA, outdoor design Roanoke',
    content: `
      <p>A beautiful landscape doesn't happen by accident — it starts with a thoughtful plan. Greenscapes VA offers complete landscape design services in Roanoke, Virginia, taking your outdoor space from an empty yard or overgrown mess to a stunning, functional landscape you'll enjoy for years.</p>

      <h2>Custom Landscape Design in Roanoke, Virginia</h2>
      <p>Every property is different, and every homeowner has a different vision. We take the time to understand how you want to use your outdoor space — whether that's a low-maintenance garden, a backyard entertainment area, a colorful flower border, or a welcoming front entrance — and design a plan that fits your lifestyle and budget.</p>
      <p>Our landscape design process starts with a thorough assessment of your property: soil conditions, sun exposure, drainage, existing plants, and the architectural style of your home. From there, we develop a design that works with your property's natural features rather than against them.</p>

      <h2>Our Design Services Include</h2>
      <ul>
        <li>Full landscape planning and plant selection</li>
        <li>Planting bed design and installation</li>
        <li>Tree and shrub placement for year-round interest</li>
        <li>Seasonal color with annuals and perennials</li>
        <li>Mulching and ground cover installation</li>
        <li>Coordination with hardscaping and irrigation</li>
      </ul>

      <h2>Plants That Thrive in the Roanoke Valley</h2>
      <p>We select plants that are well-suited to Virginia's climate, native species where possible, and drought-tolerant varieties that look great without requiring excessive watering. Our designs are built for beauty and long-term sustainability.</p>

      <h2>From Design to Installation</h2>
      <p>Unlike some companies that only design on paper, Greenscapes VA handles the full project — from initial concept through final installation and cleanup. You work with one team from start to finish, which means better communication, fewer surprises, and a smoother process overall.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>We design and install landscapes for residential and commercial clients throughout Roanoke, Salem, Vinton, Daleville, Botetourt County, Smith Mountain Lake, and surrounding areas.</p>

      <p>Ready to transform your outdoor space? Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> to schedule your free landscape design consultation.</p>
    `,
  },
  {
    slug: 'irrigation-systems',
    name: 'Irrigation Systems',
    tagline: 'Smart watering. Lush lawn. Lower water bills.',
    metaTitle: 'Irrigation System Installation Roanoke VA | Greenscapes VA',
    metaDescription: 'Professional irrigation system installation and repair in Roanoke, VA. Smart, water-efficient systems for homes and businesses. Call (540) 798-4479.',
    image: '/assets/irrigation-home.webp',
    keywords: 'irrigation system Roanoke VA, sprinkler system Roanoke Virginia, irrigation installation Salem VA, lawn irrigation Roanoke',
    content: `
      <p>Hand-watering or dragging hoses across your yard is time-consuming and inefficient. A professionally installed irrigation system from Greenscapes VA keeps your lawn and garden properly hydrated — automatically — while using less water than traditional methods.</p>

      <h2>Irrigation System Installation in Roanoke, Virginia</h2>
      <p>We design and install custom in-ground irrigation systems for residential and commercial properties throughout the Roanoke Valley. Every system is engineered to your property's specific layout, soil type, plant varieties, and sun exposure to deliver exactly the right amount of water to every zone.</p>
      <p>A properly designed system eliminates dry spots and overwatered areas, promotes deeper root growth, and can reduce your water usage by up to 50% compared to manual watering.</p>

      <h2>Our Irrigation Services</h2>
      <ul>
        <li>New irrigation system design and installation</li>
        <li>Smart controller and timer upgrades</li>
        <li>Spring startup and system inspection</li>
        <li>Winterization and blowout service</li>
        <li>Repair of broken heads, valves, and lines</li>
        <li>System audits and efficiency improvements</li>
      </ul>

      <h2>Smart Irrigation Technology</h2>
      <p>We install smart irrigation controllers that adjust watering schedules automatically based on local weather data. When it rains, the system skips the cycle. During heat waves, it waters a little more. This technology pays for itself in water savings within the first season in most Roanoke-area properties.</p>

      <h2>Don't Forget to Winterize</h2>
      <p>Roanoke winters regularly drop below freezing, and any water left in irrigation lines can expand and crack pipes, heads, and valves. Our winterization service uses compressed air to blow out every zone before the first hard freeze — protecting your investment and preventing costly spring repairs.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>Greenscapes VA installs and services irrigation systems throughout Roanoke, Salem, Vinton, Daleville, Montvale, Botetourt County, Smith Mountain Lake, and surrounding areas.</p>

      <p>Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> for a free irrigation system estimate. We'll assess your property and recommend the most efficient solution for your needs.</p>
    `,
  },
  {
    slug: 'seasonal-cleanup',
    name: 'Seasonal Cleanup',
    tagline: 'Spring ready. Winter ready. Always ready.',
    metaTitle: 'Seasonal Lawn Cleanup Service Roanoke VA | Greenscapes VA',
    metaDescription: 'Spring and fall seasonal cleanup services in Roanoke, VA. Leaf removal, bed cleanup, debris removal. Same-week service available. Call (540) 798-4479.',
    image: '/assets/leaf-cleanup-roanoke.webp',
    keywords: 'seasonal cleanup Roanoke VA, fall cleanup Roanoke Virginia, leaf removal Roanoke, spring cleanup Salem VA, yard cleanup Roanoke',
    content: `
      <p>Every season brings a new set of challenges for your lawn and landscape. Greenscapes VA provides thorough spring and fall cleanup services that prepare your Roanoke property for whatever comes next — whether that's a summer of growth or a winter of dormancy.</p>

      <h2>Seasonal Cleanup Services in Roanoke, Virginia</h2>
      <p>We serve homeowners and property managers throughout the Roanoke Valley who want their properties to look great year-round without spending their weekends doing yard work. Our seasonal cleanup crews are efficient, thorough, and leave your property looking immaculate.</p>

      <h2>Spring Cleanup</h2>
      <p>After Roanoke's winter, your yard needs attention before the growing season kicks in. Our spring cleanup service includes:</p>
      <ul>
        <li>Removal of dead leaves, twigs, and winter debris</li>
        <li>Cutting back ornamental grasses and perennials</li>
        <li>Raking and dethatching lawn areas</li>
        <li>Edging and cleaning up planting beds</li>
        <li>Fresh mulch application to beds</li>
        <li>Inspection for winter damage to plants and lawn</li>
      </ul>

      <h2>Fall Cleanup</h2>
      <p>Fall cleanup in the Roanoke Valley means one thing above all else: leaves. With the beautiful fall foliage comes a serious amount of leaf cleanup. A thick layer of leaves left on your lawn through winter will kill the grass underneath. Our fall cleanup service includes:</p>
      <ul>
        <li>Complete leaf removal from lawn and beds</li>
        <li>Gutter cleaning (add-on service available)</li>
        <li>Cutting back summer perennials</li>
        <li>Final lawn mowing before dormancy</li>
        <li>Winterizer fertilizer application</li>
        <li>Mulching planting beds for winter insulation</li>
      </ul>

      <h2>One-Time or Recurring Service</h2>
      <p>We offer seasonal cleanup as a one-time service or as part of an annual maintenance plan. Many of our clients book spring and fall cleanups together at a discounted rate, combined with weekly or bi-weekly lawn mowing throughout the growing season.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>Our cleanup crews serve Roanoke, Salem, Vinton, Daleville, Boones Mill, Montvale, Blue Ridge, Cloverdale, Troutville, Smith Mountain Lake, and Botetourt County.</p>

      <p>Don't let the seasons get ahead of you. Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> to schedule your spring or fall cleanup today.</p>
    `,
  },
  {
    slug: 'hardscaping-patios',
    name: 'Hardscaping & Patios',
    tagline: 'Beautiful outdoor living spaces built to last.',
    metaTitle: 'Hardscaping & Patio Installation Roanoke VA | Greenscapes VA',
    metaDescription: 'Expert hardscaping and patio installation in Roanoke, VA. Patios, walkways, retaining walls, and fire pits. Call (540) 798-4479 for a free estimate.',
    image: '/assets/firepit-patio.webp',
    keywords: 'hardscaping Roanoke VA, patio installation Roanoke Virginia, retaining wall Roanoke, walkway installation Salem VA, outdoor living Roanoke',
    content: `
      <p>A well-designed hardscape transforms your outdoor space into a true extension of your home. Greenscapes VA builds beautiful, durable hardscaping projects in Roanoke, Virginia — from intimate patios to full outdoor living areas — using premium materials and expert craftsmanship built to last for decades.</p>

      <h2>Hardscaping & Patio Installation in Roanoke, Virginia</h2>
      <p>Hardscaping refers to the non-living elements of your landscape: patios, walkways, retaining walls, steps, fire pits, and more. Done well, hardscaping adds structure, functionality, and significant value to your property. It also reduces the amount of lawn and garden that requires ongoing maintenance.</p>
      <p>Our team handles every phase of your hardscaping project — from initial design and material selection through excavation, base preparation, installation, and final cleanup. We don't cut corners on the base work, which is what determines whether a patio lasts 5 years or 50.</p>

      <h2>Our Hardscaping Services</h2>
      <ul>
        <li>Paver and natural stone patio installation</li>
        <li>Concrete and flagstone walkways</li>
        <li>Retaining walls and raised garden beds</li>
        <li>Steps and staircases</li>
        <li>Fire pit and outdoor fireplace installation</li>
        <li>Driveway edging and borders</li>
      </ul>

      <h2>Materials We Work With</h2>
      <p>We work with a wide range of hardscaping materials to match your style and budget: concrete pavers, natural flagstone, tumbled brick, slate, bluestone, and more. During your consultation, we'll walk you through your options and help you choose materials that complement your home's architecture and hold up to Virginia's climate.</p>

      <h2>Adding Value to Your Roanoke Property</h2>
      <p>A professionally installed patio or hardscape feature consistently delivers strong return on investment. Outdoor living spaces are one of the top features homebuyers look for in the Roanoke market, and a well-designed hardscape can add significant resale value while giving you years of enjoyment in the meantime.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>We install patios, walkways, and hardscaping features for residential and commercial clients throughout Roanoke, Salem, Vinton, Daleville, Botetourt County, Smith Mountain Lake, and surrounding areas in southwestern Virginia.</p>

      <p>Ready to create your dream outdoor space? Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> for a free hardscaping consultation and estimate.</p>
    `,
  },
  {
    slug: 'commercial-grounds-maintenance',
    name: 'Commercial Grounds Maintenance',
    tagline: 'Professional grounds care that keeps your business looking its best.',
    metaTitle: 'Commercial Grounds Maintenance Roanoke VA | Greenscapes VA',
    metaDescription: 'Commercial grounds maintenance in Roanoke, VA. Reliable mowing, trimming, cleanup and landscaping for businesses, office parks and commercial properties. Call (540) 798-4479.',
    image: '/assets/commercial-grounds-maintenance.webp',
    keywords: 'commercial grounds maintenance Roanoke VA, commercial lawn care Roanoke Virginia, business landscaping Roanoke, commercial mowing Salem VA, grounds maintenance Botetourt County',
    content: `
      <p>Your property's exterior is the first thing clients, customers, and employees see. At Greenscapes VA, we provide dependable commercial grounds maintenance for businesses, office parks, retail centers, and commercial properties throughout Roanoke, Salem, Vinton, and the surrounding Roanoke Valley.</p>

      <h2>Why Commercial Properties Need a Different Approach</h2>
      <p>Commercial grounds maintenance isn't simply residential lawn care at a larger scale. It requires consistent scheduling, accountability, and a crew that works efficiently without disrupting your operations or your customers. We understand that a missed visit or a poorly maintained entrance reflects directly on your business — and we take that seriously.</p>
      <p>Our commercial clients receive priority scheduling, direct communication with our team, and service that meets the same standard every single visit. No excuses, no skipped visits during busy season.</p>

      <h2>Commercial Services We Provide</h2>
      <ul>
        <li><strong>Lawn Mowing & Edging</strong> — Regular mowing on a schedule that keeps your property looking sharp at all times. We handle properties of all sizes, from small storefronts to large office campuses.</li>
        <li><strong>Hedge & Shrub Trimming</strong> — Precision trimming of foundation plantings, entrance hedges, and ornamental shrubs to maintain a polished, professional appearance.</li>
        <li><strong>Seasonal Cleanup</strong> — Spring and fall cleanups to remove debris, cut back overgrowth, and prepare your grounds for the season ahead.</li>
        <li><strong>Mulch Installation</strong> — Fresh mulch in planting beds keeps your commercial landscape looking maintained and well-invested.</li>
        <li><strong>Landscape Design & Enhancement</strong> — Upgrade your property's entrance or common areas with new planting designs that improve curb appeal and make a strong first impression.</li>
        <li><strong>Irrigation System Maintenance</strong> — Keep your irrigation running efficiently with seasonal startup, inspections, and winterization.</li>
      </ul>

      <h2>Serving Commercial Properties Across the Roanoke Valley</h2>
      <p>We work with a wide range of commercial clients in Roanoke, Salem, Vinton, Daleville, and Botetourt County — including office buildings, medical facilities, retail shopping centers, restaurant properties, warehouses, and industrial facilities. Whether your property needs weekly visits during the growing season or a year-round maintenance contract, we build a service plan around your needs and your budget.</p>

      <h2>Reliable, Accountable, Local</h2>
      <p>We're a locally owned company, not a national franchise. When you call, you reach Carlos directly — not a call center. That means faster responses, more flexibility, and a crew that treats your commercial property with the same care they'd give their own. We're fully licensed and insured in Virginia, and we carry the coverage required for commercial property work.</p>
      <p>Most of our commercial clients have been with us for multiple seasons. That consistency is something we're proud of — and something you can count on.</p>

      <p>Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> to discuss a commercial grounds maintenance contract for your property. We offer free site assessments and can typically begin service within the same week.</p>
    `,
  },
  {
    slug: 'hoa-grounds-maintenance',
    name: 'HOA Grounds Maintenance',
    tagline: 'Keeping community common areas pristine — every week, every season.',
    metaTitle: 'HOA Grounds Maintenance Roanoke VA | Greenscapes VA',
    metaDescription: 'HOA grounds maintenance in Roanoke, VA. Reliable lawn care and landscaping for homeowner associations and community common areas. Call (540) 798-4479.',
    image: '/assets/hoa-grounds-maintenance.webp',
    keywords: 'HOA grounds maintenance Roanoke VA, HOA lawn care Roanoke Virginia, homeowner association landscaping Roanoke, community grounds maintenance Salem VA',
    content: `
      <p>Homeowner associations have a unique challenge: the grounds need to look great all the time, for every resident, on a budget that has to work for the whole community. Greenscapes VA partners with HOAs throughout the Roanoke Valley to provide consistent, high-quality grounds maintenance that keeps common areas looking their best — without the management headaches.</p>

      <h2>What HOA Grounds Maintenance Includes</h2>
      <p>We work with each HOA board to build a customized maintenance plan that covers the specific needs of your community. Typical HOA contracts include:</p>
      <ul>
        <li><strong>Common Area Mowing & Edging</strong> — Entrances, medians, retention pond surrounds, pocket parks, and any shared turf areas maintained on a consistent weekly or bi-weekly schedule.</li>
        <li><strong>Hedge & Shrub Trimming</strong> — Entrance plantings, common area hedges, and ornamental shrubs kept neatly shaped throughout the season.</li>
        <li><strong>Mulch Installation</strong> — Annual or semi-annual mulch refresh in common area planting beds to maintain a clean, maintained appearance and protect plant roots.</li>
        <li><strong>Seasonal Cleanup</strong> — Spring and fall cleanup of common areas including leaf removal, bed cleanup, and debris removal.</li>
        <li><strong>Irrigation Maintenance</strong> — Startup, inspection, repair, and winterization for common area irrigation systems.</li>
        <li><strong>Landscape Enhancement</strong> — Annual color plantings, entrance landscape upgrades, and bed renovation to keep your community looking fresh.</li>
      </ul>

      <h2>Why HOAs Choose Greenscapes VA</h2>
      <p>HOA boards need a contractor they can trust to show up consistently, communicate clearly, and handle issues without being micromanaged. We provide a single point of contact for your board, detailed service logs on request, and a crew that understands the importance of consistency to your residents.</p>
      <p>We know that residents notice everything — the entrance that wasn't edged, the hedge that's starting to look overgrown, the mulch that needs refreshing. Our HOA clients stay with us year after year because we stay ahead of those details before residents have to bring them up.</p>

      <h2>Serving HOAs Throughout the Roanoke Valley</h2>
      <p>We currently maintain HOA and community properties in Roanoke, Salem, Vinton, Daleville, Cloverdale, and surrounding areas. We're familiar with the common grass types, soil conditions, and seasonal patterns throughout the Roanoke Valley — which means we adjust our approach as conditions change, not just follow a generic calendar.</p>
      <p>We're fully licensed and insured in Virginia and carry the coverage appropriate for community property work. References from current HOA clients are available on request.</p>

      <p>Ready to discuss a maintenance contract for your community? Call us at <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong>. We offer free site assessments for HOA properties and can provide a detailed proposal for your board to review.</p>
    `,
  },
  {
    slug: 'mulch-installation',
    name: 'Mulch Installation',
    tagline: 'Fresh mulch that transforms your beds and protects your plants.',
    metaTitle: 'Mulch Installation Roanoke VA | Greenscapes VA',
    metaDescription: 'Professional mulch installation in Roanoke, VA. Hardwood, dyed, and natural mulch delivered and installed in planting beds. Call (540) 798-4479 for a free estimate.',
    image: '/assets/mulch-installation.webp',
    keywords: 'mulch installation Roanoke VA, mulch delivery Roanoke Virginia, hardwood mulch Roanoke, landscape mulch Salem VA, mulch beds Vinton Virginia',
    content: `
      <p>Fresh mulch is one of the fastest ways to transform how your property looks — and one of the best investments you can make for the long-term health of your trees, shrubs, and planting beds. Greenscapes VA provides professional mulch installation for residential and commercial properties throughout Roanoke, Salem, Vinton, and the surrounding Roanoke Valley.</p>

      <h2>Why Mulch Matters More Than You Think</h2>
      <p>Mulch does a lot more than make your beds look neat. A proper 2–3 inch layer of mulch:</p>
      <ul>
        <li><strong>Retains soil moisture</strong> — reduces evaporation so your plants need less water, especially during Roanoke's dry summer stretches</li>
        <li><strong>Suppresses weeds</strong> — blocks sunlight that weed seeds need to germinate, dramatically reducing the amount of hand-weeding required</li>
        <li><strong>Regulates soil temperature</strong> — keeps roots cooler in summer and insulates them during Roanoke's winter freezes</li>
        <li><strong>Improves soil health</strong> — organic mulches like hardwood break down slowly and add nutrients and beneficial microbial activity to the soil over time</li>
        <li><strong>Prevents erosion</strong> — especially important on sloped beds common in the hilly Roanoke Valley terrain</li>
        <li><strong>Protects roots from mower and trimmer damage</strong> — a properly mulched ring around trees prevents the lawn equipment damage that kills more trees than disease does</li>
      </ul>

      <h2>Mulch Types We Install</h2>
      <p>We work with our clients to choose the right mulch for their property, plantings, and budget:</p>
      <ul>
        <li><strong>Double-shredded hardwood</strong> — the most popular choice in the Roanoke area. Natural brown color that blends well with most landscapes, breaks down into the soil over 1–2 seasons.</li>
        <li><strong>Dyed black mulch</strong> — provides a clean, high-contrast look that makes green plantings pop. Holds color longer than natural mulch.</li>
        <li><strong>Dyed red/brown mulch</strong> — warm tones that complement brick homes and traditional landscapes common in Roanoke's older neighborhoods.</li>
        <li><strong>Pine bark nuggets</strong> — larger pieces that last longer and work well for sloped beds where finer mulch washes away.</li>
      </ul>

      <h2>Our Mulch Installation Process</h2>
      <p>We don't just dump mulch and spread it. A proper installation includes edging the beds for a clean definition line, removing or suppressing existing weeds before mulch goes down, applying the correct depth (2–3 inches — too little doesn't work, too much suffocates roots), and keeping mulch away from plant stems and tree trunks to prevent rot and disease.</p>
      <p>Many properties only need one mulch refresh per year — typically in spring. Properties with high weed pressure or heavy organic breakdown may benefit from a light top-dress in fall as well.</p>

      <h2>Residential & Commercial Mulch Installation</h2>
      <p>We install mulch for homeowners, HOAs, commercial properties, and property managers throughout Roanoke, Salem, Vinton, Daleville, Smith Mountain Lake, and Botetourt County. Whether you have a few small beds or extensive commercial plantings across multiple acres, we have the crew and equipment to get it done efficiently.</p>

      <p>Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> for a free mulch installation estimate. We'll measure your beds, recommend the right product, and give you a clear price — no surprises.</p>
    `,
  },
  {
    slug: 'fertilization-weed-control',
    name: 'Fertilization & Weed Control',
    tagline: 'Feed your lawn. Fight the weeds. Win the season.',
    metaTitle: 'Lawn Fertilization & Weed Control Roanoke VA | Greenscapes VA',
    metaDescription: 'Professional lawn fertilization and weed control in Roanoke, VA. Seasonal programs that keep your grass thick, green, and weed-free. Call (540) 798-4479.',
    image: '/assets/fertilization-weed-control.jpg',
    keywords: 'lawn fertilization Roanoke VA, weed control Roanoke Virginia, lawn treatment Roanoke, pre-emergent weed control Salem VA, fertilizer service Roanoke',
    content: `
      <p>A green, weed-free lawn doesn't happen by chance — it's the result of the right nutrients applied at the right time, combined with a consistent weed control strategy. Greenscapes VA offers professional fertilization and weed control programs designed specifically for the grass types and growing conditions of the Roanoke Valley.</p>

      <h2>Lawn Fertilization in Roanoke, Virginia</h2>
      <p>Most Roanoke-area lawns are planted with tall fescue, a cool-season grass that has specific nutritional needs throughout the year. Applying the wrong fertilizer at the wrong time — a common mistake with generic big-box products — can actually damage your lawn or promote disease rather than healthy growth.</p>
      <p>We use professional-grade fertilizers with the correct nitrogen, phosphorus, and potassium ratios for each season. Our programs are timed around Virginia's growing calendar, not a generic national schedule, so your lawn gets what it needs when it actually needs it.</p>

      <h2>Seasonal Fertilization Program</h2>
      <ul>
        <li><strong>Early Spring</strong> — Slow-release starter fertilizer to wake the lawn from dormancy and support early green-up</li>
        <li><strong>Late Spring</strong> — Balanced feeding to sustain growth heading into summer</li>
        <li><strong>Summer</strong> — Light feeding if needed; focus shifts to stress management during Roanoke's heat</li>
        <li><strong>Early Fall</strong> — The most important application of the year for tall fescue — heavy feeding to promote root development and thickening before winter</li>
        <li><strong>Late Fall</strong> — Winterizer application to store nutrients that fuel next spring's growth</li>
      </ul>

      <h2>Weed Control — Pre-Emergent & Post-Emergent</h2>
      <p>Weeds compete directly with your grass for water, nutrients, and space. The most effective weed control strategy uses two approaches together:</p>
      <ul>
        <li><strong>Pre-emergent herbicides</strong> — applied in early spring before crabgrass and summer annual weeds germinate. Timing is everything — too early or too late and it doesn't work. We track soil temperatures to apply at exactly the right window.</li>
        <li><strong>Post-emergent treatments</strong> — applied to actively growing broadleaf weeds like dandelions, clover, henbit, and chickweed. We use selective herbicides that kill the weeds without harming your turf.</li>
      </ul>

      <h2>Grub Control</h2>
      <p>Grubs (the larvae of Japanese beetles and other beetles) feed on grass roots just below the soil surface. A bad infestation can kill large patches of lawn by late summer. We offer preventive grub control applications in early summer before populations establish, and curative treatments if grubs are already present.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>We provide fertilization and weed control services throughout Roanoke, Salem, Vinton, Daleville, Botetourt County, Smith Mountain Lake, and surrounding areas.</p>

      <p>Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> to get a free lawn assessment and fertilization program recommendation for your property.</p>
    `,
  },
  {
    slug: 'aeration-overseeding',
    name: 'Aeration & Overseeding',
    tagline: 'Open up the soil. Thicken the turf. Transform your lawn.',
    metaTitle: 'Lawn Aeration & Overseeding Roanoke VA | Greenscapes VA',
    metaDescription: 'Professional core aeration and overseeding in Roanoke, VA. The best investment for a thicker, healthier lawn. Fall scheduling available. Call (540) 798-4479.',
    image: '/assets/aeration-overseeding.jpg',
    keywords: 'lawn aeration Roanoke VA, overseeding Roanoke Virginia, core aeration Roanoke, lawn overseeding Salem VA, aeration service Roanoke fall',
    content: `
      <p>If your lawn looks thin, feels hard underfoot, or struggles to stay green despite regular watering and fertilizing, compacted soil is likely the culprit. Core aeration combined with overseeding is the single most impactful treatment you can do for a tall fescue lawn in the Roanoke Valley — and fall is the perfect time to do it.</p>

      <h2>What Is Core Aeration?</h2>
      <p>Core aeration uses a machine to pull small plugs of soil (called cores) out of your lawn, typically 2–3 inches deep and spaced every few inches across the entire turf area. This process:</p>
      <ul>
        <li>Relieves soil compaction caused by foot traffic, mowing equipment, and clay-heavy soils common in the Roanoke area</li>
        <li>Allows air, water, and nutrients to penetrate deep into the root zone</li>
        <li>Creates ideal seedbed conditions for overseeding</li>
        <li>Encourages deeper root growth, making the lawn more drought-tolerant</li>
        <li>Reduces thatch buildup that blocks water and fertilizer from reaching the soil</li>
      </ul>
      <p>The small cores left on the surface break down naturally within 2–3 weeks, returning beneficial organic matter to the soil.</p>

      <h2>Overseeding — Thickening Your Turf</h2>
      <p>After aeration, we overseed the lawn with premium tall fescue seed varieties selected for performance in Virginia's climate. The aeration holes create perfect seed-to-soil contact, dramatically improving germination rates compared to broadcasting seed on an un-aerated lawn.</p>
      <p>Overseeding fills in thin areas, repairs summer damage, and gradually crowds out weeds by giving desirable grass a competitive advantage. A thick, dense turf is your lawn's best defense against both weeds and disease.</p>

      <h2>Why Fall Is the Right Time in Roanoke</h2>
      <p>For tall fescue lawns — the dominant grass type throughout the Roanoke Valley — fall is the ideal window for aeration and overseeding. Specifically, late August through mid-October is optimal because:</p>
      <ul>
        <li>Soil temperatures are still warm enough for rapid germination</li>
        <li>Air temperatures are cooling down, reducing heat stress on new seedlings</li>
        <li>Fall rains help keep new seed moist without requiring constant irrigation</li>
        <li>New grass has the entire fall and winter to establish roots before summer heat arrives</li>
        <li>Pre-emergent weed control from spring has broken down, so it won't block germination</li>
      </ul>

      <h2>After Aeration & Overseeding</h2>
      <p>We walk you through the post-treatment care steps: keeping the seedbed moist for the first 2–3 weeks, avoiding heavy foot traffic while seed germinates, and timing your first mow of the new growth. We're available to answer questions throughout the germination period — typically 7–21 days for tall fescue.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>We provide aeration and overseeding services throughout Roanoke, Salem, Vinton, Daleville, Botetourt County, Smith Mountain Lake, and surrounding areas. Fall scheduling fills up quickly — we recommend booking in August to secure your preferred date.</p>

      <p>Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> to schedule your fall aeration and overseeding appointment.</p>
    `,
  },
  {
    slug: 'additional-services',
    name: 'Additional Services',
    tagline: 'More ways we can transform your outdoor space.',
    metaTitle: 'Additional Lawn & Landscaping Services Roanoke VA | Greenscapes VA',
    metaDescription: 'Sod installation, seeding, drainage, pressure washing, stump grinding, and bush hogging in Roanoke, VA. Full-service outdoor care from Greenscapes VA. Call (540) 798-4479.',
    image: '/assets/additional-services.jpg',
    keywords: 'sod installation Roanoke VA, stump grinding Roanoke Virginia, bush hogging Roanoke, drainage solutions Roanoke, pressure washing Roanoke VA, lawn seeding Salem VA',
    content: `
      <p>Beyond our core lawn care and landscaping services, Greenscapes VA offers a range of additional services to handle every aspect of your outdoor property. Whether you need an instant lawn, better water management, or a deep clean for your driveway, we have you covered throughout the Roanoke Valley.</p>

      <h2>Sod Installation</h2>
      <p>When you need results immediately — not weeks from now — sod installation is the answer. Fresh sod gives you an instant lawn that looks and functions like established turf from day one. Greenscapes VA handles the complete sod installation process:</p>
      <ul>
        <li>Soil preparation and grading for proper drainage and a level surface</li>
        <li>Soil amendment to improve fertility and water retention where needed</li>
        <li>Professional sod laying with tight seams and proper edging</li>
        <li>Post-installation care instructions and follow-up</li>
      </ul>
      <p>Sod is ideal for new construction properties, heavily damaged lawn areas, high-erosion spots, and anywhere you need an immediate, finished look. We source high-quality tall fescue and Bermuda sod varieties suited to Roanoke's climate and sun conditions.</p>

      <h2>Lawn Seeding</h2>
      <p>For larger areas or budget-conscious projects, lawn seeding is an effective way to establish or restore turf. Proper seeding goes beyond scattering seed on bare dirt — it requires the right seed selection, proper seedbed preparation, and good soil contact to achieve strong germination rates.</p>
      <p>Our seeding services include:</p>
      <ul>
        <li>Soil testing and amendment recommendations</li>
        <li>Grading and seedbed preparation</li>
        <li>Broadcast or slit seeding depending on the area and conditions</li>
        <li>Starter fertilizer application</li>
        <li>Straw or erosion control blanket installation on slopes</li>
      </ul>
      <p>Fall is the prime seeding season for tall fescue in the Roanoke area — we book up quickly, so plan ahead.</p>

      <h2>Drainage Solutions</h2>
      <p>Standing water, soggy lawn areas, and water pooling against your foundation are more than just nuisances — they can cause serious damage to your lawn, landscape plants, and home structure over time. Greenscapes VA diagnoses drainage problems and installs practical solutions that redirect water away from problem areas.</p>
      <p>Our drainage services include:</p>
      <ul>
        <li><strong>French drains</strong> — perforated pipe systems buried underground that collect and redirect subsurface water</li>
        <li><strong>Surface grading</strong> — regrading lawn areas to eliminate low spots where water collects</li>
        <li><strong>Dry creek beds</strong> — decorative rock channels that manage surface runoff while adding visual interest to your landscape</li>
        <li><strong>Downspout extensions and drainage pipes</strong> — directing roof runoff away from foundations and into appropriate discharge areas</li>
        <li><strong>Catch basins</strong> — underground collection points for high-volume runoff areas</li>
      </ul>
      <p>Roanoke's hilly terrain and heavy clay soils make drainage issues extremely common. If you have areas that stay wet long after rain, or water that runs toward your home, call us for a free drainage assessment.</p>

      <h2>Pressure Washing</h2>
      <p>Years of dirt, algae, mold, and grime can make your hardscaping look far older than it is. Professional pressure washing restores driveways, walkways, patios, decks, and other outdoor surfaces to a clean, fresh appearance — often making them look almost new.</p>
      <p>We offer pressure washing for:</p>
      <ul>
        <li>Concrete driveways and sidewalks</li>
        <li>Paver patios and walkways</li>
        <li>Wooden and composite decks</li>
        <li>Retaining walls and stone features</li>
        <li>Fences</li>
        <li>Commercial parking areas and exterior surfaces</li>
      </ul>
      <p>We use appropriate pressure levels and cleaning agents for each surface type — enough to clean effectively without damaging softer materials like wood or aging pavers.</p>

      <h2>Stump Grinding</h2>
      <p>After a tree is removed, the stump left behind is more than an eyesore — it's a tripping hazard, a magnet for pests like termites and carpenter ants, and an obstacle for mowing. Greenscapes VA offers professional stump grinding to eliminate stumps quickly and cleanly.</p>
      <p>Our stump grinder reduces stumps to wood chips a few inches below ground level, allowing you to fill the area with soil and seed or sod over it. We grind stumps of all sizes and can handle multiple stumps in a single visit. The resulting wood chips can be used as mulch on-site or removed entirely — your choice.</p>
      <ul>
        <li>All stump sizes handled</li>
        <li>Ground to below surface level</li>
        <li>Wood chips removed or repurposed as mulch</li>
        <li>Area ready for seeding or sodding after service</li>
      </ul>

      <h2>Bush Hogging</h2>
      <p>Overgrown fields, pastures, and large lots with heavy brush, tall weeds, and saplings require more than a standard mower — they need a bush hog. Greenscapes VA provides bush hogging services for rural properties, large lots, right-of-ways, and acreage throughout the Roanoke Valley that has become overgrown or difficult to manage.</p>
      <p>Bush hogging is ideal for:</p>
      <ul>
        <li>Clearing overgrown fields and pastures</li>
        <li>Maintaining rural property and fence lines</li>
        <li>Reclaiming lots overtaken by brush and saplings</li>
        <li>Right-of-way and easement clearing</li>
        <li>Seasonal maintenance of large acreage properties</li>
        <li>Preparing land for construction, seeding, or fencing</li>
      </ul>
      <p>We use a commercial Ventrac with a brush cutter attachment capable of handling heavy vegetation efficiently. Whether you need a one-time clearing or seasonal maintenance, we can put your land back under control.</p>

      <h2>Serving the Roanoke Valley</h2>
      <p>All additional services are available throughout Roanoke, Salem, Vinton, Daleville, Botetourt County, Smith Mountain Lake, and surrounding areas in the Roanoke Valley.</p>

      <p>Call <strong>(540) 798-4479</strong> or email <strong>prettylawn@greenscapesva.com</strong> to discuss any of these services. We offer free estimates and can typically schedule an assessment within the same week.</p>
    `,
  },
]

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug)
}
