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
]

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug)
}
