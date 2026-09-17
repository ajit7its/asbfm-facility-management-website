import React, { useEffect } from "react";

const services = [
  {
    icon: "bi-building-check",
    title: "Facility Management",
    text: "Integrated day-to-day facility support designed to keep workplaces organized, functional and professionally managed."
  },
  {
    icon: "bi-shield-check",
    title: "Security Services",
    text: "Disciplined security support focused on access management, vigilance, site protocols and a safe workplace environment."
  },
  {
    icon: "bi-stars",
    title: "Housekeeping Services",
    text: "Professional cleaning and hygiene routines for offices, commercial spaces and common areas, with attention to presentation and consistency."
  },
  {
    icon: "bi-people",
    title: "Manpower Solutions",
    text: "Workforce deployment for operational and support roles, helping organizations scale people requirements with a single service partner."
  },
  {
    icon: "bi-buildings",
    title: "Building Management",
    text: "Coordinated building support covering routine upkeep, vendor coordination and operational assistance for managed premises."
  }
];

const highlights = [
  ["01", "Professional Workforce", "People-first service delivery with clear roles, supervision and workplace discipline."],
  ["02", "Process Driven", "Structured routines, checklists and communication designed for consistent day-to-day operations."],
  ["03", "Corporate Focus", "Service thinking built around professional workplaces, employee experience and operational continuity."],
  ["04", "One Point of Contact", "Multiple facility support requirements coordinated through one accountable service partner."]
];

function useRevealAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useRevealAnimations();

  const closeNavbar = () => {
    const nav = document.getElementById("mainNav");
    if (nav?.classList.contains("show")) {
      window.bootstrap?.Collapse?.getOrCreateInstance(nav)?.hide();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top site-navbar">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#home" onClick={closeNavbar}>
            <img src="/assets/asbfm-logo.jpg" alt="ASBFM logo" />
            <span>
              <strong>ASBFM</strong>
              <small>Facility Management</small>
            </span>
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Why ASBFM", "#why-us"],
                ["Contact", "#contact"]
              ].map(([label, href]) => (
                <li className="nav-item" key={href}>
                  <a className="nav-link" href={href} onClick={closeNavbar}>{label}</a>
                </li>
              ))}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a className="btn btn-brand btn-sm px-4" href="#contact" onClick={closeNavbar}>
                  Request a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container position-relative z-2">
            <div className="row align-items-center min-vh-100 py-5">
              <div className="col-lg-7">
                <div className="hero-content reveal">
                  <span className="eyebrow">PEOPLE • PLACES • BETTER TOMORROW</span>
                  <h1>Professional facilities.<br /><span>Better workplaces.</span></h1>
                  <p>
                    Integrated facility support for corporate offices, commercial
                    spaces and managed properties — delivered with professionalism,
                    discipline and a people-first approach.
                  </p>

                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <a href="#services" className="btn btn-brand btn-lg px-4">
                      Explore Our Services <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                    <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                      Talk to Our Team
                    </a>
                  </div>

                  <div className="hero-trust mt-5">
                    <div><strong>2015</strong><span>Established</span></div>
                    <div><strong>5</strong><span>Core Services</span></div>
                    <div><strong>24/7</strong><span>Facility Mindset</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to About">
            <span></span>
          </a>
        </section>

        <section id="about" className="section-padding about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 reveal">
                <div className="image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                    alt="Modern corporate workplace"
                    loading="lazy"
                  />
                  <div className="experience-card">
                    <span className="number">2015</span>
                    <span className="label">Building better<br />workplaces</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 reveal reveal-delay-1">
                <span className="section-kicker">ABOUT ASBFM</span>
                <h2 className="section-title">A reliable partner behind the workplace.</h2>
                <p className="lead-text">
                  ASBFM Facility Management Pvt. Ltd. brings essential workplace
                  services together under one professional service framework.
                </p>
                <p>
                  From housekeeping and security to manpower and building support,
                  our approach is built around dependable people, clear processes
                  and responsive coordination. The objective is simple: help your
                  organization maintain a workplace that is safe, clean, organized
                  and ready for business every day.
                </p>

                <div className="owner-box mt-4">
                  <div className="owner-icon"><i className="bi bi-person-badge"></i></div>
                  <div>
                    <small>MANAGING DIRECTOR</small>
                    <h5 className="mb-0">Dasari Bheemesh</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-padding services-section">
          <div className="container">
            <div className="section-heading text-center reveal">
              <span className="section-kicker">OUR SERVICES</span>
              <h2 className="section-title">Everything your workplace needs.</h2>
              <p>
                A focused service portfolio for organizations that value clean
                environments, dependable support and professional operations.
              </p>
            </div>

            <div className="row g-4 mt-2">
              {services.map((service, index) => (
                <div className="col-md-6 col-lg" key={service.title}>
                  <article className={`service-card reveal reveal-delay-${Math.min(index + 1, 3)}`}>
                    <div className="service-icon"><i className={`bi ${service.icon}`}></i></div>
                    <span className="service-number">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href="#contact" className="service-link">
                      Discuss this service <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section-padding why-section">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 reveal">
                <span className="section-kicker light">WHY ASBFM</span>
                <h2 className="section-title text-white">Professional service starts with the right people.</h2>
                <p className="text-white-50">
                  Corporate facilities need more than individual services.
                  They need coordination, consistency and a service partner that
                  understands the importance of the workplace experience.
                </p>
                <a href="#contact" className="btn btn-gold mt-3">
                  Start a Conversation <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>

              <div className="col-lg-7">
                <div className="row g-3">
                  {highlights.map(([number, title, text]) => (
                    <div className="col-md-6" key={number}>
                      <div className="highlight-card reveal">
                        <span>{number}</span>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-box reveal">
              <div>
                <span className="section-kicker">LET'S WORK TOGETHER</span>
                <h2>Looking for a dependable facility partner?</h2>
                <p>Tell us about your workplace, site or manpower requirement.</p>
              </div>
              <a href="#contact" className="btn btn-brand btn-lg px-4">
                Request a Consultation <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding contact-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5 reveal">
                <span className="section-kicker">CONTACT</span>
                <h2 className="section-title">Let's discuss your facility requirements.</h2>
                <p>
                  Share your requirement with the ASBFM team. We can discuss the
                  site, workforce, service scope and operational expectations.
                </p>

                <div className="contact-list mt-4">
                  <a href="tel:+919000891957">
                    <i className="bi bi-telephone"></i>
                    <span><small>CALL US</small>9000891957 / 9000205455</span>
                  </a>
                  <a href="mailto:info@asbfm.in">
                    <i className="bi bi-envelope"></i>
                    <span><small>EMAIL</small>info@asbfm.in<br />sales@asbfm.in</span>
                  </a>
                  <div>
                    <i className="bi bi-geo-alt"></i>
                    <span>
                      <small>HEAD OFFICE</small>
                      2nd Floor, Melkiors Pride,<br />
                      Hitex Road, Vinayaka Nagar,<br />
                      Khanammet, Hi Tech City – 500084
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 reveal reveal-delay-1">
                <div className="contact-card">
                  <div className="contact-card-head">
                    <div>
                      <span className="section-kicker">ENQUIRE NOW</span>
                      <h3>Tell us what you need.</h3>
                    </div>
                    <i className="bi bi-chat-square-text"></i>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Your name" />
                      </div>
                      <div className="col-md-6">
                        <label>Company</label>
                        <input type="text" className="form-control" placeholder="Company name" />
                      </div>
                      <div className="col-md-6">
                        <label>Phone</label>
                        <input type="tel" className="form-control" placeholder="+91" />
                      </div>
                      <div className="col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="you@company.com" />
                      </div>
                      <div className="col-12">
                        <label>Service Required</label>
                        <select className="form-select">
                          <option>Select a service</option>
                          {services.map((s) => <option key={s.title}>{s.title}</option>)}
                        </select>
                      </div>
                      <div className="col-12">
                        <label>Requirement</label>
                        <textarea className="form-control" rows="4" placeholder="Tell us briefly about your requirement..."></textarea>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-brand px-4" type="submit">
                          Send Enquiry <i className="bi bi-send ms-2"></i>
                        </button>
                        <small className="d-block mt-2 text-muted">
                          Form submission can be connected to your Laravel / PHP API later.
                        </small>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="footer-brand">
                <img src="/assets/asbfm-logo.jpg" alt="ASBFM logo" />
                <div>
                  <strong>ASBFM Facility Management Pvt. Ltd.</strong>
                  <span>People • Places • Better Tomorrow</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
              </div>
              <small>© {new Date().getFullYear()} ASBFM Facility Management Pvt. Ltd. All rights reserved.</small>
            </div>
          </div>
        </div>
      </footer>

      <div className="floating-actions">
        <a
          className="floating-whatsapp"
          href="https://wa.me/919000891957?text=Hello%20ASBFM%2C%20I%20would%20like%20to%20know%20more%20about%20your%20facility%20management%20services."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with ASBFM on WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>

        <a className="floating-call" href="tel:+919000891957" aria-label="Call ASBFM">
          <i className="bi bi-telephone-fill"></i>
        </a>
      </div>
    </>
  );
}

export default App;
