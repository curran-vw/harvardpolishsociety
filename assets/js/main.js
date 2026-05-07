// harvardpolishsociety.org — small interactions
(function () {
  'use strict';

  // Smooth-scroll for in-page anchor links.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id && id.length > 1) {
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  // Footnote tooltip behavior: clicking a footnote ref scrolls to the note.
  // Already handled by the anchor handler above.

  // Open <details> by default if the URL hash points inside one.
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target) {
      var det = target.closest('details');
      if (det) det.open = true;
    }
  }
})();
