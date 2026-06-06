/* Mobile navigation toggle (replaces Bootstrap collapse) */
(function () {
  document.querySelectorAll('.navbar-toggler').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-target');
      if (!targetId) return;
      var menu = document.querySelector(targetId);
      if (menu) {
        menu.classList.toggle('show');
        var expanded = menu.classList.contains('show');
        btn.setAttribute('aria-expanded', expanded);
      }
    });
  });
})();
