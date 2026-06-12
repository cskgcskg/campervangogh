# Camper Van Gogh — v3

Premium 2022 VW T6.1 Campervan hire — Hampshire, UK.
Static marketing site for Vincent. Vanilla HTML, CSS, and JavaScript — no build step.

## What's new in v3

- Unified design system (one champagne-gold palette, type & spacing scales) shared by all pages via `styles.css`
- Top header with logo + nav (glass effect on scroll) and full-screen mobile menu; sticky "Book Now" bar on mobile
- All photos optimised: 800px WebP/JPEG thumbnails for grids, 1600px WebP for the lightbox, responsive `srcset` + lazy loading. Home page initial load ≈ 0.2 MB (was several MB)
- Font Awesome removed — inline SVG icons; fonts reduced to the weights actually used
- Unused Stripe.js removed; Flatpickr deferred; all scripts `defer`
- Fixed dead JS (class-name mismatches in old main.js), accessible nav/lightbox/forms, no layout shift (explicit image dimensions)
- SEO preserved: titles, meta, canonical, Open Graph, structured data, sitemap

## Structure

```
.
├── index.html            Home page
├── gallery.html          Photo gallery with filters + lightbox
├── booking.html          Reservation flow (Flatpickr + Formspree)
├── styles.css            Shared design system
├── main.js               Header, mobile nav, scroll reveal, CTA bar
├── whatsapp-widget.js    Floating WhatsApp widget (set your number inside)
├── blocked-dates.json    Dates unavailable for booking
└── gallery/
    ├── exterior/         *-800 thumbs, *-1600 lightbox, hero variants
    └── interior/
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push to GitHub and enable GitHub Pages (root). All asset paths are relative.

## Before going live

- Set your WhatsApp number in `whatsapp-widget.js` (currently a placeholder)
