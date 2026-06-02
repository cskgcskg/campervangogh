# Camper Van Gogh

Premium 2022 VW T6.1 Campervan hire — Hampshire, UK.

A static marketing site for Vincent, our hand-converted campervan. Built with vanilla HTML, CSS, and JavaScript.

## Structure

```
.
├── index.html            Home page
├── gallery.html          Interior + exterior photo gallery with lightbox
├── booking.html          Reservation flow (Flatpickr + Stripe)
├── styles.css            Shared site styles
├── main.js               Home page interactions
├── whatsapp-widget.js    Floating WhatsApp contact widget
├── blocked-dates.json    Dates unavailable for booking
└── gallery/
    ├── exterior/         Exterior photos
    └── interior/         Interior photos
```

## Run locally

It's static, so any HTTP server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Push to GitHub and enable GitHub Pages on the `main` branch (root). The site is fully self-contained — all asset paths are relative.
