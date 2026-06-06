/* Site-wide helpers: form, back-to-top, loader, articles */
(function () {
  function showFormMessage(form, html, type) {
    var box = form.querySelector('.form-message');
    if (!box) {
      box = document.createElement('div');
      box.className = 'form-message';
      form.insertBefore(box, form.firstChild);
    }
    box.className = 'form-message form-message--' + type;
    box.innerHTML = html;
    box.setAttribute('role', 'alert');
  }

  /* Hide page loader quickly */
  var loader = document.getElementById('ftco-loader');
  if (loader) {
    setTimeout(function () {
      loader.classList.remove('show');
    }, 400);
  }

  /* Back to top */
  var backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backBtn.classList.add('is-visible');
      } else {
        backBtn.classList.remove('is-visible');
      }
    });
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* FAQ accordion — one open at a time optional, native details works fine */

  /* Contact form */
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.querySelector('[name="name"]') || {}).value || '';
      var email = (form.querySelector('[name="email"]') || {}).value || '';
      var subject = (form.querySelector('[name="subject"]') || {}).value || '';
      var message = (form.querySelector('[name="message"]') || {}).value || '';

      name = name.trim();
      email = email.trim();
      subject = subject.trim();
      message = message.trim();

      if (!name || !email || !message) {
        showFormMessage(form, '<p>Please fill in your name, email, and message.</p>', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormMessage(form, '<p>Please enter a valid email address.</p>', 'error');
        return;
      }

      var mailSubject = subject || 'Contact from Yogalax website';
      var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
      var mailto =
        'mailto:info@yogalaxsite.com?subject=' +
        encodeURIComponent(mailSubject) +
        '&body=' +
        encodeURIComponent(body);

      showFormMessage(
        form,
        '<p><strong>Thank you, ' +
          name +
          '!</strong> Your message has been saved. We will get back to you soon.</p>' +
          '<p><a class="form-mailto-link" href="' +
          mailto +
          '">Prefer email? Open in your mail app</a></p>',
        'success'
      );
      form.reset();

      try {
        localStorage.setItem(
          'yogalax_contact',
          JSON.stringify({ name: name, email: email, at: new Date().toISOString() })
        );
      } catch (err) {}
    });
  }

  /* Article page */
  if (document.body.classList.contains('article-page')) {
    var posts = document.querySelectorAll('.article-post');
    var slug = new URLSearchParams(window.location.search).get('post');
    var found = false;

    posts.forEach(function (post) {
      if (post.id === slug) {
        post.style.display = 'block';
        found = true;
        var title = post.getAttribute('data-title');
        if (title) document.title = title + ' - Yogalax';
        var heading = document.getElementById('article-heading');
        if (heading) heading.textContent = title;
      } else {
        post.style.display = 'none';
      }
    });

    if (!found) {
      var fallback = document.getElementById('article-not-found');
      if (fallback) fallback.style.display = 'block';
    }
  }
})();
