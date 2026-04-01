// ============================================================
//  IEIA ExhiBits Magazine — Dynamic Script
//  Handles: News feed, ticker, initiatives, partners,
//           animations, navigation, date rendering, forms
// ============================================================

(function () {
  'use strict';

  // ===== DATA: Real IEIA News Headlines =====
  const newsArticles = [
    {
      tag: 'Industry',
      title: 'Messe Frankfurt Trade Fairs India Joins Forces with BusinessLive to Expand Media Expo',
      excerpt: 'In a strategic move to broaden the reach of Media Expo, Messe Frankfurt Trade Fairs India has partnered with BusinessLive Trade Fairs, aiming to deliver an enhanced exhibitor and visitor experience.',
      date: '2026-03-20',
      link: 'https://www.ieia.in/news-detail/messe-frankfurt-trade-fairs-india-joins-forces-with-businesslive-trade-fairs-to-expand-media-expo',
      image: 'assets/exhibition_news.png'
    },
    {
      tag: 'Infrastructure',
      title: 'Lucknow to Get an International Convention and Exhibition Centre',
      excerpt: 'Uttar Pradesh prepares for a new world-class International Convention and Exhibition Centre in Lucknow, set to become a key hub for the MICE sector in northern India.',
      date: '2026-03-18',
      link: 'https://www.ieia.in/news-detail/lucknow-to-get-an-international-convention-and-exhibition-centre',
      image: 'assets/mice_event.png'
    },
    {
      tag: 'IEIA Event',
      title: 'Bharat Mandapam to Host the Biggest Gathering of Indian MICE Sector',
      excerpt: 'The 14th IEIA Open Seminar & Exhibition Services Expo is set to take place at Bharat Mandapam — the largest gathering of India\'s MICE industry leaders and exhibition professionals.',
      date: '2026-03-15',
      link: 'https://www.ieia.in/news-detail/bharat-mandapam-to-host-the-biggest-gathering-of-the-indian-mice-meetings-incentives-conferences-exhibitions-sector-the-14th-ieia-open-seminar-exhibition-services-expo-on-may-02-03-2025',
      image: 'assets/exhibits_cover.png'
    },
    {
      tag: 'Trade',
      title: 'Australia Unveils Ambitious Roadmap to Strengthen Trade Ties with India',
      excerpt: 'Australia has announced a comprehensive roadmap to deepen trade and investment relations with India, promising new collaborative opportunities for the exhibitions industry.',
      date: '2026-03-12',
      link: 'https://www.ieia.in/news-detail/australia-unveils-ambitious-roadmap-to-strengthen-trade-and-investment-ties-with-india',
      image: 'assets/exhibition_news.png'
    },
    {
      tag: 'Technology',
      title: 'Tech-Driven Sectoral Growth to Power India\'s $23-35 Trillion Economic Vision',
      excerpt: 'India\'s technological advancement across key sectors is being projected to fuel the nation\'s ambitious $23-35 trillion economic vision, directly boosting exhibition and trade fair activity.',
      date: '2026-03-10',
      link: 'https://www.ieia.in/news-detail/tech-driven-sectoral-growth-to-power-indias-23-35-trillion-economic-vision',
      image: 'assets/mice_event.png'
    },
    {
      tag: 'Logistics',
      title: 'India\'s Logistics & Warehousing Growth Hubs Rise in Tier 2 Cities',
      excerpt: 'Emerging tier 2 cities are becoming key growth hubs for India\'s logistics and warehousing sectors, creating new opportunities for regional exhibitions and trade events.',
      date: '2026-03-08',
      link: 'https://www.ieia.in/news-detail/indias-logistics-warehousing-growth-hubs-rise-in-tier-2-cities',
      image: 'assets/exhibits_cover.png'
    }
  ];

  // ===== DATA: IEIA Initiatives =====
  const initiatives = [
    {
      icon: '🎯',
      title: 'IEIA Open Seminar 2026',
      desc: 'The flagship annual conference bringing together 400+ exhibition industry leaders for knowledge sharing and networking.'
    },
    {
      icon: '🏏',
      title: 'IEIA Sports Champs',
      desc: 'Building community spirit through inter-company cricket tournaments among IEIA member organizations.'
    },
    {
      icon: '💡',
      title: 'EventTech & MarTech Summit',
      desc: 'Exploring cutting-edge technology innovations transforming the events, exhibitions, and marketing landscape.'
    },
    {
      icon: '🎓',
      title: 'PEM Certification Program',
      desc: 'Professional Exhibition Management certification — upskilling the next generation of exhibition professionals.'
    },
    {
      icon: '👩‍💼',
      title: 'WeConnect WeRise',
      desc: 'Empowering women in the exhibition industry through leadership programs, mentorship, and networking events.'
    },
    {
      icon: '🤝',
      title: 'IEIA Connect',
      desc: 'Regional networking meets across India — connecting exhibition professionals in Chennai, Hyderabad, Indore, and more.'
    },
    {
      icon: '🌐',
      title: 'BRICS MICE Forum',
      desc: 'International cooperation forum fostering MICE industry ties between BRICS & emerging market nations.'
    },
    {
      icon: '📰',
      title: 'ExhiBits E-Magazine',
      desc: 'The official industry publication covering news, trends, interviews, and thought leadership from the exhibitions world.'
    }
  ];

  // ===== DATA: Global Partners =====
  const partners = [
    { name: 'UFI', url: 'http://www.ufi.org/' },
    { name: 'IAEE', url: 'http://www.iaee.com/' },
    { name: 'AFECA', url: 'http://afeca.asia/' },
    { name: 'SISO', url: 'http://www.siso.org/' },
    { name: 'AEFI', url: 'https://www.aefi.it/en/' },
    { name: 'UBRAFE', url: 'https://ubrafe.org.br/' },
    { name: 'IELA', url: 'http://www.iela.org/' },
    { name: 'KEOA', url: 'http://www.keoa.org/' },
    { name: 'CENTREX', url: 'https://www.centrexstat.org/' },
    { name: 'SACEOS', url: 'http://www.saceos.org.sg' },
    { name: 'AAXO', url: 'https://www.aaxo.co.za/' },
    { name: 'MACEOS', url: 'https://www.maceos.com.my/' }
  ];

  // ===== DATA: Ticker Headlines =====
  const tickerItems = [
    'IEIA Open Seminar 2026 — Registrations Open',
    'ExhiBits March 2026 Edition — Now Available',
    'India Exhibition Industry Growing at 12% CAGR',
    'IEIA PEM Program 2026 Delhi — Apply Now',
    'Bharat Mandapam — India\'s Largest Convention Centre',
    '400+ Member Organizations — Join IEIA Today',
    'BRICS MICE Cooperation Forum — Coming Soon',
    'IEIA EventTech & MarTech Summit 2026',
  ];

  // ===== DATA: Newsletter Articles =====
  const newsletterArticles = [
    {
      type: 'feature',
      title: 'The Future of Exhibition Design: Immersive & AI-Powered Booths',
      excerpt: 'How artificial intelligence and immersive technologies are reshaping booth design, visitor engagement, and ROI measurement at India\'s leading trade shows.',
      date: '2026-03-25',
      author: 'Priya Sharma',
      link: 'https://www.ieia.in/news-activities'
    },
    {
      type: 'interview',
      title: 'In Conversation with IEIA Chairman on India\'s Exhibition Roadmap 2030',
      excerpt: 'An exclusive interview covering India\'s ambitious plans to become a top-5 global exhibition market — new venues, policy support, and international collaborations.',
      date: '2026-03-22',
      author: 'Rajesh Kumar',
      link: 'https://www.ieia.in/news-activities'
    },
    {
      type: 'analysis',
      title: 'Sustainability in MICE: Green Certifications Reshaping Venues',
      excerpt: 'A deep-dive into how Indian convention centres are adopting LEED and IGBC certifications, and what this means for exhibitors and event organizers.',
      date: '2026-03-18',
      author: 'Anita Desai',
      link: 'https://www.ieia.in/news-activities'
    },
    {
      type: 'opinion',
      title: 'Why Tier-2 Cities Are the Next Exhibition Powerhouses',
      excerpt: 'With world-class infrastructure emerging in Lucknow, Indore, and Hyderabad, the exhibition industry is poised for a geographic revolution.',
      date: '2026-03-14',
      author: 'Vikram Mehta',
      link: 'https://www.ieia.in/news-activities'
    },
    {
      type: 'report',
      title: 'IEIA Annual Industry Report: Exhibition Sector Grows 12% in FY26',
      excerpt: 'Our comprehensive annual report reveals robust growth in exhibitor participation, venue bookings, and international partnerships across India.',
      date: '2026-03-10',
      author: 'IEIA Research',
      link: 'https://www.ieia.in/news-activities'
    },
    {
      type: 'feature',
      title: 'Digital Twins & Virtual Exhibitions: Hybrid Event Strategies That Work',
      excerpt: 'Case studies from leading Indian exhibitors who successfully blended physical and digital experiences to triple their visitor reach.',
      date: '2026-03-06',
      author: 'Sneha Patel',
      link: 'https://www.ieia.in/news-activities'
    }
  ];

  // ===== HELPER: Format date =====
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // ===== HELPER: Time ago =====
  function timeAgo(dateStr) {
    const now = new Date();
    const past = new Date(dateStr);
    const diffMs = now - past;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return formatDate(dateStr);
  }

  // ===== RENDER: Dynamic Date in Hero =====
  function renderDynamicDates() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const heroDate = document.getElementById('heroDate');
    if (heroDate) heroDate.textContent = `${month} ${year} Edition`;

    const currentMonth = document.getElementById('currentMonth');
    if (currentMonth) currentMonth.textContent = month;

    const currentYear = document.getElementById('currentYear');
    if (currentYear) currentYear.textContent = year;

    const footerYear = document.getElementById('footerYear');
    if (footerYear) footerYear.textContent = year;
  }

  // ===== RENDER: News Grid =====
  function renderNewsGrid() {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    grid.innerHTML = newsArticles.map((article, i) => `
      <article class="update-card fade-in" style="transition-delay: ${i * .1}s">
        <div class="update-card-img">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
          <span class="card-tag">${article.tag}</span>
        </div>
        <div class="update-card-body">
          <h3 class="update-card-title">${article.title}</h3>
          <p class="update-card-excerpt">${article.excerpt}</p>
          <div class="update-card-meta">
            <span><i class="far fa-calendar-alt"></i> ${timeAgo(article.date)}</span>
            <a href="${article.link}" target="_blank" class="read-more">Read More</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // ===== RENDER: Ticker =====
  function renderTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;

    // Duplicate for seamless loop
    const items = [...tickerItems, ...tickerItems];
    track.innerHTML = items.map(t => `<span>${t}</span>`).join('');
  }

  // ===== RENDER: Initiatives =====
  function renderInitiatives() {
    const grid = document.getElementById('initiativesGrid');
    if (!grid) return;

    grid.innerHTML = initiatives.map((item, i) => `
      <div class="initiative-card fade-in" style="transition-delay: ${i * .08}s">
        <div class="initiative-icon">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `).join('');
  }

  // ===== RENDER: Partners =====
  function renderPartners() {
    const track = document.getElementById('partnersTrack');
    if (!track) return;

    track.innerHTML = partners.map(p => `
      <a href="${p.url}" target="_blank" class="partner-logo" title="${p.name}">${p.name}</a>
    `).join('');
  }

  // ===== RENDER: Newsletter =====
  function renderNewsletter() {
    const container = document.getElementById('newsletterFlex');
    if (!container) return;

    container.innerHTML = newsletterArticles.map((article, i) => {
      const initials = article.author.split(' ').map(w => w[0]).join('');
      return `
        <div class="newsletter-card fade-in" style="transition-delay: ${i * .08}s">
          <div class="newsletter-card-body">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
              <span class="newsletter-card-badge type-${article.type}">${article.type}</span>
              <span class="newsletter-card-date"><i class="far fa-calendar-alt"></i> ${timeAgo(article.date)}</span>
            </div>
            <h4 class="newsletter-card-title">${article.title}</h4>
            <p class="newsletter-card-excerpt">${article.excerpt}</p>
          </div>
          <div class="newsletter-card-footer">
            <div class="newsletter-card-author">
              <span class="newsletter-card-author-avatar">${initials}</span>
              ${article.author}
            </div>
            <a href="${article.link}" target="_blank" class="newsletter-card-readlink">Read</a>
          </div>
        </div>
      `;
    }).join('');
  }

  // ===== INTERSECTION OBSERVER: Fade-in on scroll =====
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Observe all .fade-in elements (including dynamically added ones)
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 100);
  }

  // ===== NAVBAR: Scroll shadow + active link tracking =====
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('.navbar-links a:not(.nav-cta)');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      // Shadow on scroll
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active section tracking
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });
  }

  // ===== HAMBURGER MENU =====
  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      // Animate hamburger icon
      const spans = hamburger.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ===== SMOOTH SCROLL =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ===== SUBSCRIBE FORM =====
  function initSubscribeForm() {
    const form = document.getElementById('subscribeForm');
    const msg = document.getElementById('subscribeMsg');

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('subscribeEmail').value.trim();

      if (email) {
        msg.style.display = 'block';
        msg.textContent = `✅ Thank you! ${email} has been subscribed to ExhiBits E-Magazine.`;
        form.reset();

        // Auto-hide after 5s
        setTimeout(() => {
          msg.style.display = 'none';
        }, 5000);
      }
    });
  }

  // ===== COUNTER ANIMATION =====
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent;
          const match = text.match(/(\d+)/);
          if (match) {
            const target = parseInt(match[0]);
            const suffix = text.replace(match[0], '');
            let current = 0;
            const step = Math.max(1, Math.floor(target / 40));
            const interval = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              el.textContent = current + suffix;
            }, 30);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  // ===== LIVE CLOCK in hero badge (subtle) =====
  function initLiveClock() {
    const badge = document.getElementById('heroDate');
    if (!badge) return;

    setInterval(() => {
      const now = new Date();
      const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      badge.textContent = `${months[now.getMonth()]} ${now.getFullYear()} Edition`;
    }, 60000); // Update every minute
  }

  // ===== THEME TOGGLE =====
  function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    // Restore saved preference
    const saved = localStorage.getItem('exhibits-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('exhibits-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('exhibits-theme', 'dark');
      }
    });
  }

  // ===== MAGNETIC ARROW CTA =====
  function initMagneticArrow() {
    const zone = document.getElementById('magneticArrowZone');
    const btn = document.getElementById('magneticArrowBtn');
    const label = document.getElementById('magneticLabel');
    const trail = document.getElementById('magneticTrail');
    const particles = document.getElementById('magneticParticles');

    if (!zone || !btn) return;

    // --- Spawn ambient particles ---
    if (particles) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'magnetic-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = (Math.random() * 8) + 's';
        p.style.animationDuration = (6 + Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
        p.style.background = Math.random() > 0.5
          ? 'rgba(204,32,39,' + (.2 + Math.random() * .3) + ')'
          : 'rgba(91,192,222,' + (.15 + Math.random() * .2) + ')';
        particles.appendChild(p);
      }
    }

    // --- Magnetic hover physics ---
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let isHovering = false;
    let rafId = null;

    const MAGNET_STRENGTH = 0.25;  // 0-1: how strongly button is pulled
    const MAX_DISPLACEMENT = 25;   // max px shift
    const SMOOTHING = 0.12;        // lower = smoother/slower follow
    const RETURN_SMOOTHING = 0.08; // return-to-center speed

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function clamp(val, min, max) {
      return Math.max(min, Math.min(max, val));
    }

    function animate() {
      if (isHovering) {
        currentX = lerp(currentX, targetX, SMOOTHING);
        currentY = lerp(currentY, targetY, SMOOTHING);
      } else {
        currentX = lerp(currentX, 0, RETURN_SMOOTHING);
        currentY = lerp(currentY, 0, RETURN_SMOOTHING);
      }

      btn.style.transform = `translate(${currentX}px, ${currentY}px)`;

      // Subtle tilt on the label
      if (label) {
        label.style.transform = `translateX(${currentX * 0.3}px)`;
      }

      // Keep animating if still moving
      if (Math.abs(currentX) > 0.1 || Math.abs(currentY) > 0.1 || isHovering) {
        rafId = requestAnimationFrame(animate);
      } else {
        btn.style.transform = '';
        if (label) label.style.transform = '';
        rafId = null;
      }
    }

    zone.addEventListener('mousemove', (e) => {
      const rect = zone.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      targetX = clamp(dx * MAGNET_STRENGTH, -MAX_DISPLACEMENT, MAX_DISPLACEMENT);
      targetY = clamp(dy * MAGNET_STRENGTH, -MAX_DISPLACEMENT, MAX_DISPLACEMENT);

      isHovering = true;
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }

      // Spawn trail dot occasionally
      if (trail && Math.random() > 0.7) {
        spawnTrailDot(trail, e.clientX - rect.left, e.clientY - rect.top);
      }
    });

    zone.addEventListener('mouseleave', () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    });

    // --- Trail dots ---
    function spawnTrailDot(container, x, y) {
      const dot = document.createElement('span');
      dot.className = 'trail-dot';
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      dot.style.opacity = '0.6';
      dot.style.width = dot.style.height = (3 + Math.random() * 4) + 'px';
      container.appendChild(dot);

      // Animate out
      requestAnimationFrame(() => {
        dot.style.transition = 'all .8s ease-out';
        dot.style.opacity = '0';
        dot.style.transform = `translate(${(Math.random() - .5) * 30}px, ${-20 - Math.random() * 40}px) scale(0)`;
      });

      setTimeout(() => dot.remove(), 900);
    }
  }

  // ===== 3D CURSOR ON SCROLL =====
  function initCursor3D() {
    // Skip on mobile / touch devices
    if (window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window) return;

    const cursor = document.getElementById('cursor3D');
    const trail = document.getElementById('cursorTrail');
    if (!cursor) return;

    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;
    let scrollProgress = 0;
    let lastScrollY = 0;
    let scrollVelocity = 0;
    let isVisible = false;
    let isHovering = false;
    let trailCounter = 0;

    // Spring physics config
    const SPRING = 0.15;
    const TRAIL_INTERVAL = 3; // spawn trail dot every N frames
    const MAX_TRAIL_DOTS = 12;
    const BASE_SPIN_DURATION = 6;  // seconds
    const FAST_SPIN_DURATION = 1.2;

    // Color stops: soft blue → purple (light theme)
    const COLOR_START = { r: 100, g: 120, b: 200 };  // soft blue
    const COLOR_END   = { r: 140, g: 90, b: 210 };   // soft purple

    function lerpColor(a, b, t) {
      return {
        r: Math.round(a.r + (b.r - a.r) * t),
        g: Math.round(a.g + (b.g - a.g) * t),
        b: Math.round(a.b + (b.b - a.b) * t),
      };
    }

    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursor.classList.add('active');
      }
    });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursor.classList.remove('active');
    });
    document.addEventListener('mouseenter', () => {
      isVisible = true;
      cursor.classList.add('active');
    });

    // Scroll tracking
    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      scrollVelocity = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
    }, { passive: true });

    // Hover detection for interactive elements
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], .btn, .nav-cta, .partner-logo, .initiative-card, .update-card');
      if (target) {
        isHovering = true;
        cursor.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], .btn, .nav-cta, .partner-logo, .initiative-card, .update-card');
      if (target) {
        isHovering = false;
        cursor.classList.remove('hovering');
      }
    });

    // Spawn a trail dot
    function spawnTrailDot(x, y, color) {
      if (!trail) return;
      const dot = document.createElement('span');
      dot.className = 'cursor-trail-dot';
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      dot.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, .35)`;
      dot.style.width = dot.style.height = (3 + Math.random() * 5) + 'px';
      dot.style.opacity = '0.6';
      trail.appendChild(dot);

      // Animate out
      requestAnimationFrame(() => {
        dot.style.transition = 'all .7s cubic-bezier(.4,0,.2,1)';
        dot.style.opacity = '0';
        dot.style.transform = `translate(${(Math.random() - .5) * 20}px, ${-10 - Math.random() * 25}px) scale(0)`;
      });
      setTimeout(() => dot.remove(), 750);

      // Cap trail dots
      const dots = trail.querySelectorAll('.cursor-trail-dot');
      if (dots.length > MAX_TRAIL_DOTS) {
        dots[0].remove();
      }
    }

    // Animation loop
    const shape = cursor.querySelector('.cursor-3d__shape');
    let rafId = null;
    let angle = 0;

    function animate() {
      // Spring follow
      cursorX += (mouseX - cursorX) * SPRING;
      cursorY += (mouseY - cursorY) * SPRING;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      // Scroll-driven color
      const color = lerpColor(COLOR_START, COLOR_END, scrollProgress);
      const colorStr = `rgba(${color.r}, ${color.g}, ${color.b}`;
      cursor.style.setProperty('--cursor-color', colorStr + ', .55)');
      cursor.style.setProperty('--cursor-fill', colorStr + ', .04)');
      cursor.style.setProperty('--cursor-glow', colorStr + ', .18)');

      // Scroll-driven rotation speed & scale
      const velocityFactor = Math.min(scrollVelocity / 30, 1);
      const combinedFactor = Math.max(scrollProgress, velocityFactor);
      const spinDuration = BASE_SPIN_DURATION - (BASE_SPIN_DURATION - FAST_SPIN_DURATION) * combinedFactor;
      const scale = 1 + combinedFactor * 0.25;

      // Direct rotation for buttery smooth control
      const rotSpeed = 1 + combinedFactor * 6;
      angle += rotSpeed;
      if (shape) {
        shape.style.animation = 'none';
        shape.style.transform = `rotateX(${angle}deg) rotateY(${angle * 1.3}deg) scale(${scale})`;
      }

      // Dampen scroll velocity
      scrollVelocity *= 0.92;

      // Trail dots
      trailCounter++;
      if (trailCounter >= TRAIL_INTERVAL && isVisible) {
        trailCounter = 0;
        const dist = Math.abs(mouseX - cursorX) + Math.abs(mouseY - cursorY);
        if (dist > 2) {
          spawnTrailDot(cursorX, cursorY, color);
        }
      }

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
  }

  // ===== INITIALIZE =====
  function init() {
    initThemeToggle();
    renderDynamicDates();
    renderNewsGrid();
    renderTicker();
    renderInitiatives();
    renderPartners();
    renderNewsletter();
    initNavbar();
    initHamburger();
    initSmoothScroll();
    initSubscribeForm();
    initScrollAnimations();
    animateCounters();
    initLiveClock();
    initMagneticArrow();
    initCursor3D();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
