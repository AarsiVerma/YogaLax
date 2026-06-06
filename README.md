# Yogalax — Yoga Website

A responsive multi-page yoga & wellness website built with **HTML5**, **CSS3**, and **JavaScript** for a BCA Web Technologies assignment.

**Author:** Aarsi Verma (24030124005)

## Features

- 5 main pages + article detail pages
- Fully responsive custom CSS layout (no Bootstrap)
- Breath-hold timer on the home page
- Pranayama carousel, blog posts, class schedule
- Contact form with validation (no backend required)
- FAQ section, testimonials, back-to-top button
- SEO meta descriptions and favicon

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Classes | `classes.html` |
| Schedule | `schedule.html` |
| Blog | `blog.html` |
| Contact | `contact.html` |
| Article | `article.html?post=slug` |

## How to run

1. Open `index.html` in a browser, **or**
2. Use **Live Server** in VS Code for best results

## Deploy on GitHub Pages

1. Create a GitHub repository
2. Upload all project files
3. Go to **Settings → Pages →** source: `main` branch, folder `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name/`

## Project structure

```
├── index.html, classes.html, schedule.html, blog.html, contact.html
├── article.html
├── favicon.svg
├── css/
│   ├── layout.css    # Grid, navbar, utilities
│   ├── style.css     # Theme & components
│   └── home.css      # Home page styles
├── js/
│   ├── nav.js        # Mobile menu
│   ├── site.js       # Form, back-to-top, articles
│   ├── main.js       # Animations & carousel
│   └── script.js     # Breath timer
└── images/
```

## Contact form

Submitting the form shows a thank-you message. An optional link opens your email app (`mailto:`) to send the message to **info@yogalaxsite.com**.

## Tech notes

- jQuery is used for carousel and scroll animations (Owl Carousel, Waypoints)
- Custom `css/layout.css` replaces Bootstrap grid and components
