// Updraft landing page script. No dependencies.

// ── Booking link ───────────────────────────────────────────────
// The booking link lives in index.html on every "Book a call" button (data-book).
// To change it, find and replace https://calendly.com/hello-vivrames/30min in index.html.

(function () {
  // ── Analytics bridge ─────────────────────────────────────────
  // Sends events to whichever tool is installed: GA4 via GTM (dataLayer) or Plausible.
  // Events: cta_click (opens the booking page), linkedin_click, faq_open — each with the page section.
  function track(event, props) {
    props = props || {};
    if (window.dataLayer) window.dataLayer.push(Object.assign({ event: event }, props));
    if (window.plausible) window.plausible(event, { props: props });
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-event]');
    if (!el) return;
    track(el.dataset.event, { section: el.dataset.section || '', label: (el.textContent || '').trim().slice(0, 60) });
  });
  document.querySelectorAll('.faq details').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) track('faq_open', { section: 'faq', label: d.querySelector('summary').textContent.trim().slice(0, 60) });
    });
  });

  // ── Rising line in "Five steps" ──────────────────────────────
  var rise = document.querySelector('[data-rise]');
  if (!rise) return;
  var done = function () { rise.classList.add('is-risen'); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return done();
  var io = new IntersectionObserver(function (entries) {
    if (entries.some(function (en) { return en.isIntersecting; })) { done(); io.disconnect(); }
  }, { threshold: 0.4 });
  io.observe(rise);
})();
