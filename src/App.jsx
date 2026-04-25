import './App.css';

function App() {
  const business = {
    name: 'Sri Shanmuga Metal Mart',
    address: 'No. 25, Gandhi Road, near Roundana Newpet, Krishnagiri, Tamil Nadu 635001',
    phoneDisplay: '+91 90431 97296',
    phoneTel: '+919043197296',
    email: 'sangilisub@gmail.com',
    hours: '9:30 AM – 9:30 PM (All days)',
    socials: {
      instagram: 'https://www.instagram.com/sangilisub?igsh=MXVhYzRmYzk3ZmlsYQ==',
      whatsapp: 'https://wa.me/+919043197296'
    },
    about: {
      headline: 'Best MetalMart in Krishnagiri - Sri Shanmuga Metal Mart',
      para1:
        "Welcome to Sri Shanmuga Metal Mart, your trusted destination in Krishnagiri for all kinds of kitchen utensils and metalware. We specialize in a wide range of products including Stainless Steel, Brass, Copper, and Aluminum cookware, alongside traditional items and pooja essentials.",
      para2:
        "From setting up a new home kitchen to restocking a hotel, we offer high-quality, durable solutions at affordable prices. Visit us today to explore our functional and stylish collections backed by friendly service and great value."
    },
    featuredProducts: [
      {
        tag: 'Popular',
        title: 'Steel utensils',
        image: '/steel_utensils_bg.png',
        desc:
          'Upgrade your kitchen with our premium steel utensils, crafted from high-quality steel for lasting durability and hygiene. Rust-resistant, easy to clean, and suitable for daily use.'
      },
      {
        tag: 'Best value',
        title: 'Aluminium utensils',
        image: '/Aluminium_utensils.png',
        desc:
          'The perfect balance of lightweight design and efficient performance. Excellent heat conductivity, easy handling, and budget-friendly — ideal for fast, even cooking.'
      },
      {
        tag: 'Traditional',
        title: 'Brass utensils',
        image: '/brass_utensils.png',
        desc:
          'Bring tradition and timeless elegance into your kitchen. Durable, beautiful, and ideal for cooking, serving, and traditional rituals.'
      }
    ]
  };

  return (
    <div className="site">
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <i className="bi bi-telephone" aria-hidden="true" />
              <a href={`tel:${business.phoneTel}`} className="topbar-link">
                {business.phoneDisplay}
              </a>
              <span className="topbar-dot" aria-hidden="true">
                •
              </span>
              <i className="bi bi-clock" aria-hidden="true" />
              <span>{business.hours}</span>
            </div>
            <div className="topbar-right d-none d-md-flex">
              <span className="topbar-pill">
                <i className="bi bi-truck" aria-hidden="true" /> Retail & Bulk Orders
              </span>
              <span className="topbar-pill">
                <i className="bi bi-shield-check" aria-hidden="true" /> Quality-first selection
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light sticky-top site-nav border-bottom">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
            <img src="/sri_shanmuga_logo.png" alt="Sri Shanmuga Metal Mart Logo" style={{ height: '40px', objectFit: 'contain' }} />
            <span className="fw-semibold brand-name">Sri Shanmuga Metal Mart</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#collections">
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a className="nav-link" href={business.socials.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-2 ms-lg-2 nav-actions">
              <a className="icon-btn" href={business.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" />
              </a>
              <a className="icon-btn" href="#contact" aria-label="Location">
                <i className="bi bi-geo-alt" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="subnav border-bottom">
        <div className="container">
          <div className="subnav-scroll">
            <a className="subnav-link" href="#products">
              Steel
            </a>
            <a className="subnav-link" href="#products">
              Copper
            </a>
            <a className="subnav-link" href="#products">
              Brass
            </a>
            <a className="subnav-link" href="#products">
              Aluminium
            </a>
            <a className="subnav-link" href="#products">
              Storage
            </a>
            <a className="subnav-link" href="#products">
              Pooja Items
            </a>
            <a className="subnav-link" href="#collections">
              Featured
            </a>
          </div>
        </div>
      </div>

      <main>
        <section id="home" className="hero">
          <div className="container py-5 py-lg-6">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-lg-6">
                <div className="eyebrow mb-3">
                  <span className="badge rounded-pill text-bg-light border">Krishnagiri • Since trusted local service</span>
                </div>
                <h1 className="display-5 fw-bold lh-sm mb-3">
                  Premium utensils & metalware for everyday cooking and traditional needs.
                </h1>
                <p className="lead text-muted mb-4">
                  Stainless steel, copper, brass, aluminium vessels, storage containers, pooja items, and more — curated for
                  quality, durability, and value.
                </p>

                <div className="d-flex flex-wrap gap-2">
                  <a className="btn btn-brand btn-lg" href="#products">
                    Explore Products
                  </a>
                  <a className="btn btn-outline-secondary btn-lg" href="#contact">
                    Visit Store
                  </a>
                </div>

                <div className="hero-highlights mt-4">
                  <div className="highlight">
                    <i className="bi bi-patch-check" />
                    <span>Quality-first selection</span>
                  </div>
                  <div className="highlight">
                    <i className="bi bi-box-seam" />
                    <span>Retail & bulk orders</span>
                  </div>
                  <div className="highlight">
                    <i className="bi bi-geo-alt" />
                    <span>Gandhi Road, Krishnagiri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-fade" aria-hidden="true" />
        </section>

        <section id="collections" className="section section-alt">
          <div className="container py-5">
            <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
              <div>
                <h2 className="h1 fw-bold mb-2">Collections</h2>
                <p className="text-muted mb-0">A quick way to browse — inspired by the “collections tiles + tabs” style.</p>
              </div>
              <div className="collection-pills">
                <button type="button" className="pill active">
                  Featured
                </button>
                <button type="button" className="pill">
                  Cookware
                </button>
                <button type="button" className="pill">
                  Storage
                </button>
                <button type="button" className="pill">
                  Pooja
                </button>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6 col-lg-3">
                <a className="collection-tile" href="#products">
                  <div className="collection-media bg-steel">
                    <i className="bi bi-grid-1x2-fill" />
                  </div>
                  <div className="collection-body">
                    <div className="collection-title">Steel Essentials</div>
                    <div className="collection-sub">Plates • Bowls • Tumblers</div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-3">
                <a className="collection-tile" href="#products">
                  <div className="collection-media bg-copper">
                    <i className="bi bi-droplet-half" />
                  </div>
                  <div className="collection-body">
                    <div className="collection-title">Copper Range</div>
                    <div className="collection-sub">Bottles • Jugs • Cookware</div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-3">
                <a className="collection-tile" href="#products">
                  <div className="collection-media bg-aluminium">
                    <i className="bi bi-lightning-charge" />
                  </div>
                  <div className="collection-body">
                    <div className="collection-title">Aluminium Cookware</div>
                    <div className="collection-sub">Fast • Even heating</div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-3">
                <a className="collection-tile" href="#products">
                  <div className="collection-media bg-gold">
                    <i className="bi bi-flower1" />
                  </div>
                  <div className="collection-body">
                    <div className="collection-title">Pooja Items</div>
                    <div className="collection-sub">Brass • Copper • Ritual</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container py-5">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <h2 className="h1 fw-bold mb-3">About Us</h2>
                <div className="about-stack">
                  <div className="about-head">{business.about.headline}</div>
                  <p className="text-muted mb-3">{business.about.para1}</p>
                  <p className="text-muted mb-0">{business.about.para2}</p>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center justify-content-center">
                <img
                  src="/sri_shanmuga_business_card.png"
                  alt="Sri Shanmuga Metal Mart Business Card"
                  className="img-fluid rounded shadow-sm"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section section-alt">
          <div className="container py-5">
            <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
              <div>
                <h2 className="h1 fw-bold mb-2">Products</h2>
                <p className="text-muted mb-0">Visit our store for More products</p>
              </div>
              <a className="btn btn-outline-secondary" href="#contact">
                Ask Availability
              </a>
            </div>

            <div className="row g-3 g-lg-4">
              {business.featuredProducts.map((p) => (
                <div className="col-md-6 col-lg-4" key={p.title}>
                  <div
                    className="product-card"
                    style={p.image ? {
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${p.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      color: 'white'
                    } : {}}
                  >
                    <div className="product-top">
                      <div className="product-badge">{p.tag}</div>
                      <div className="product-icon bg-steel">
                        <i className="bi bi-bag" />
                      </div>
                    </div>
                    <h3 className={`h5 fw-semibold text-capitalize ${p.image ? 'text-white' : ''}`}>{p.title}</h3>
                    <p className={`mb-0 ${p.image ? 'text-white-50' : 'text-muted'}`}>{p.desc}</p>
                  </div>
                </div>
              ))}

              <div className="col-md-6 col-lg-4">
                <div
                  className="product-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/copper_utensils.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white'
                  }}
                >
                  <div className="product-top">
                    <div className="product-badge">Premium</div>
                    <div className="product-icon bg-copper">
                      <i className="bi bi-fire" />
                    </div>
                  </div>
                  <h3 className="h5 fw-semibold text-white">Copper Items</h3>
                  <p className="text-white-50 mb-3">
                    Premium copper cookware & water bottles — loved for performance and tradition.
                  </p>
                  <ul className="spec-list text-white-50">
                    <li>Cookware</li>
                    <li>Water bottles & jugs</li>
                    <li>Gift-worthy pieces</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div
                  className="product-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/storage_items.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white'
                  }}
                >
                  <div className="product-top">
                    <div className="product-badge">Everyday</div>
                    <div className="product-icon bg-slate">
                      <i className="bi bi-box2-heart" />
                    </div>
                  </div>
                  <h3 className="h5 fw-semibold text-white">Storage Containers</h3>
                  <p className="text-white-50 mb-3">
                    Functional and stylish containers for home, hotels, and business kitchens.
                  </p>
                  <ul className="spec-list text-white-50">
                    <li>Stainless steel containers</li>
                    <li>Spice & grains storage</li>
                    <li>Custom sizes (on request)</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div
                  className="product-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/pooja_items.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white'
                  }}
                >
                  <div className="product-top">
                    <div className="product-badge">Ritual</div>
                    <div className="product-icon bg-gold">
                      <i className="bi bi-flower1" />
                    </div>
                  </div>
                  <h3 className="h5 fw-semibold text-white">Pooja Items</h3>
                  <p className="text-white-50 mb-3">
                    Traditional items for festivals and daily pooja — made to look beautiful and last.
                  </p>
                  <ul className="spec-list text-white-50">
                    <li>Lamps & plates</li>
                    <li>Kalash & accessories</li>
                    <li>Brass & copper options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container py-5">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-5">
                <h2 className="h1 fw-bold mb-2">Contact & Location</h2>
                <p className="text-muted mb-4">Visit our store or contact us for product availability, bulk orders, and pricing.</p>

                <div className="contact-card">
                  <div className="contact-row">
                    <div className="contact-icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div>
                      <div className="contact-label">Address</div>
                      <div className="contact-value">{business.address}</div>
                    </div>
                  </div>

                  <div className="contact-row">
                    <div className="contact-icon">
                      <i className="bi bi-telephone" />
                    </div>
                    <div>
                      <div className="contact-label">Phone</div>
                      <a className="contact-value link" href={`tel:${business.phoneTel}`}>
                        {business.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="contact-row">
                    <div className="contact-icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div>
                      <div className="contact-label">Email</div>
                      <a className="contact-value link" href={`mailto:${business.email}`}>
                        {business.email}
                      </a>
                    </div>
                  </div>

                  <div className="contact-row">
                    <div className="contact-icon">
                      <i className="bi bi-clock" />
                    </div>
                    <div>
                      <div className="contact-label">Working Hours</div>
                      <div className="contact-value">{business.hours}</div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <a
                      className="btn btn-brand"
                      href="https://dialmia.com/krishnagiri/sri-shanmuga-metal-mart?l_id=1384"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Existing Listing
                    </a>
                    <a
                      className="btn btn-outline-secondary"
                      href="https://www.google.com/maps?q=Sri%20Shanmuga%20Metal%20Mart%20Krishnagiri"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                    <a className="btn btn-outline-secondary" href={business.socials.whatsapp} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="map-card">
                  <iframe
                    title="Sri Shanmuga Metal Mart location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=sri%20shanmuga%20metal%20mart,%20krishnagiri,%20tamilnadu,%20india&output=embed"
                  />
                </div>
                <div className="mt-3 text-muted small">
                  Note: Map uses a search embed. If you share the exact Google Maps pin link, I can replace this with a precise
                  embed for your shop.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer border-top">
        <div className="container py-4">
          <div className="row g-3 align-items-center">
            <div className="col-md-7">
              <div className="d-flex align-items-center gap-2">
                <img src="/sri_shanmuga_logo.png" alt="Sri Shanmuga Metal Mart Logo" style={{ height: '30px', objectFit: 'contain' }} />
                <div>
                  <div className="fw-semibold">Sri Shanmuga Metal Mart</div>
                  <div className="text-muted small">Kitchen utensils • Copper • Brass • Steel • Aluminium • Pooja items</div>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-md-end">
              <div className="small text-muted mb-2">© {new Date().getFullYear()} Sri Shanmuga Metal Mart. All rights reserved.</div>
              <img 
                src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fsrishanmugametalmart.com&count_bg=%23B45309&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Visitors&edge_flat=true" 
                alt="Site Visitors" 
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

