/* E & M Medical Services — Interactive scripts */

document.addEventListener('DOMContentLoaded', function () {
  // Hero background video — force autoplay with user-interaction fallback
  const heroVideo = document.querySelector('.hero-bg-video');
  if (heroVideo) {
    // Ensure muted programmatically (some browsers require this)
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.setAttribute('playsinline', '');
    heroVideo.setAttribute('webkit-playsinline', '');

    const attemptPlay = function () {
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(function () {
          // Autoplay blocked — start on any user interaction
          const startOnInteraction = function () {
            heroVideo.play().catch(function () {});
            ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(function (evt) {
              document.removeEventListener(evt, startOnInteraction, { passive: true });
            });
          };
          ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(function (evt) {
            document.addEventListener(evt, startOnInteraction, { passive: true, once: true });
          });
        });
      }
    };

    // Try immediately, then again once the video reports it can play
    attemptPlay();
    heroVideo.addEventListener('loadeddata', attemptPlay);
    heroVideo.addEventListener('canplay', attemptPlay);

    // If tab becomes visible again, resume playback
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && heroVideo.paused) {
        heroVideo.play().catch(function () {});
      }
    });
  }

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isActive = siteNav.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isActive);
    });

    // Close menu when a link is clicked
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (
        siteNav.classList.contains('active') &&
        !siteNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        siteNav.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate submission — in production, connect to your form handler
      setTimeout(function () {
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.style.background = '#4caf50';
        contactForm.reset();

        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      }, 800);
    });
  }

  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(26, 58, 92, 0.1)';
      } else {
        header.style.boxShadow = '0 2px 8px rgba(26, 58, 92, 0.08)';
      }
    });
  }
});
