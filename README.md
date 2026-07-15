# E &amp; M Medical Services, LLC — Website

A professional, responsive website for E &amp; M Medical Services, LLC — a medical practice based in Starke, Florida, providing compassionate patient-centered care since 2005.

**Tagline:** *Compassion. Care. Commitment.*

---

## About the Practice

E &amp; M Medical Services is a professional medical practice dedicated to providing high-quality healthcare with a patient-centered approach — focusing on compassionate, comprehensive, and reliable medical care, including preventive healthcare, accurate diagnosis, treatment, and ongoing patient wellness.

- **Address:** 107 C Edwards Rd, Starke, FL 32091
- **Email:** emmedicalpractice@gmail.com
- **Established:** 2005

---

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero with responsive image, services preview, values |
| Services | `services.html` | Full list of 10 medical services with photography |
| About Us | `about.html` | Story, mission, vision, core values |
| Testimonials | `testimonials.html` | 9 patient testimonials with portraits |
| Contact | `contact.html` | Contact form, address, office hours, map |

---

## Tech Stack

- Semantic HTML5
- CSS3 (custom properties, Flexbox, Grid, responsive breakpoints)
- Vanilla JavaScript (no framework dependencies)
- Google Fonts — Playfair Display + Inter
- Inline SVG icons (no icon library needed)
- `<picture>` element for responsive image loading

No build step required. This is a static site — open any `.html` file in a browser and it works.

---

## Cross-Device Optimization

The site is engineered to look and behave correctly on:

- **Apple devices** — iPhone (including notched models via `viewport-fit=cover`), iPad, Mac
- **Android devices** — Chrome, Samsung Internet, Firefox
- **Desktop & laptop** — Chrome, Safari, Firefox, Edge

### What's built in

- Adaptive hero image via `<picture>` element (mobile-optimized crop on phones)
- `theme-color` meta tag for Android Chrome address bar color
- Apple Touch Icon and web-app meta tags for iOS "Add to Home Screen"
- Safe-area insets for iPhone notch/dynamic island
- `-webkit-text-size-adjust` and `text-size-adjust` to prevent iOS landscape text resizing
- `touch-action: manipulation` on buttons to eliminate the 300ms tap delay on iOS
- Transparent tap highlights (no ugly gray flash on iOS/Android taps)
- Reduced-motion media query support (`prefers-reduced-motion`)
- Keyboard-visible focus rings for accessibility

### Breakpoints

- Mobile: `≤ 540px`
- Tablet: `≤ 768px`
- Small desktop: `≤ 900px`
- Desktop: `> 900px`

---

## Design System

**Colors**
- Primary teal: `#009688`
- Deep navy: `#1a3a5c`
- Dark gray: `#37474f`
- Off-white: `#f7f9fa`
- White: `#ffffff`

**Typography**
- Display: Playfair Display (serif)
- Body: Inter (sans-serif)

---

## Project Structure

```
em-medical-website/
├── index.html
├── services.html
├── about.html
├── testimonials.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png                    # Original color logo (header, favicon)
│   ├── logo-white.png              # White silhouette logo (footer, dark backgrounds)
│   ├── logo-transparent.png        # Transparent-background version
│   ├── backgrounds/                # Hero background images
│   │   ├── home-hero.jpg           #   Desktop/tablet hero
│   │   ├── home-hero-mobile.jpg    #   Mobile-cropped hero
│   │   ├── about-bg.jpg
│   │   ├── services-bg.jpg
│   │   ├── testimonials-bg.jpg
│   │   └── contact-bg.jpg
│   ├── services/                   # 10 service card photos
│   └── testimonials/               # 9 patient portrait photos
├── README.md
├── LICENSE
└── .gitignore
```

---

## Getting Started

### Run locally

Just open `index.html` in any modern browser, or serve the folder with any static server:

```bash
# Python 3
python3 -m http.server 8000

# Node (with npx)
npx serve .

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

---

## Deploying to GitHub

### 1. Push to GitHub

```bash
cd em-medical-website
git init
git add .
git commit -m "Initial commit: E & M Medical Services website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/em-medical-website.git
git push -u origin main
```

### 2. Enable GitHub Pages (free hosting)

1. Go to your repo on github.com
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/em-medical-website/` within 1–2 minutes.

### Alternative hosts

- **Netlify** — drag the folder into netlify.com/drop, or connect the repo for auto-deploys
- **Vercel** — import the repo at vercel.com/new, no configuration needed
- **Cloudflare Pages** — connect the repo at pages.cloudflare.com

---

## Before Going Live — Checklist

- [ ] Replace placeholder testimonials with real, permitted patient quotes
- [ ] Connect the contact form in `contact.html` to a form handler (Formspree, Netlify Forms, EmailJS, or a backend)
- [ ] Confirm and update the office hours listed on `contact.html`
- [ ] Add a phone number to the contact section if desired
- [ ] Add a favicon (`favicon.ico`) file at the project root for broader browser support
- [ ] Verify the embedded map location and coordinates
- [ ] Review copy for accuracy — especially the origin story on the About page

---

## License

See `LICENSE` for details.

---

## Contact

E &amp; M Medical Services, LLC
107 C Edwards Rd, Starke, FL 32091
emmedicalpractice@gmail.com
