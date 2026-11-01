// JavaScript for Zorif Properties Ltd
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Reveal section content on scroll, while respecting reduced-motion settings.
  var revealItems = document.querySelectorAll(
    '.hero .trust-badge, .hero .panel-ivory, .section .section-head, ' +
    '.section .step-card, .section .note-box, .section .strategy-box, ' +
    '.section .warning-box, .section .photo-card, .section .trust-card, ' +
    '.section .contact-card, .section .info-card, .section .cta-row'
  );
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var revealDelays = new WeakMap();
    var groupIndexes = new Map();

    revealItems.forEach(function (item) {
      var group = item.closest('.row') || item;
      var index = groupIndexes.get(group) || 0;
      revealDelays.set(item, index * 70);
      groupIndexes.set(group, index + 1);
    });

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = entry.target;
          window.setTimeout(function () {
            target.classList.add('is-visible');
            target.classList.remove('is-pending');
          }, revealDelays.get(target));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (item) {
      item.classList.add('scroll-reveal', 'is-pending');
      revealObserver.observe(item);
    });
  }
});
