# Mahalakshmi Sculptures — Website

A fast, static website. No build step, no paid services, and no server code required.

## Preview

Double-click `index.html`, or for the most accurate preview run a local server in this folder:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Files

| File | Purpose |
|---|---|
| `js/data.js` | **All business details, categories and products. Edit this file to update the site.** |
| `index.html` | Home page: hero, about, collections, featured, gallery, why us, enquiry, contact |
| `collection.html` | Product listing (`collection.html?cat=<category-id>`) |
| `product.html` | Product detail (`product.html?id=<product-id>`) |
| `css/styles.css` | Design: colours, fonts (Rajdhani + Spline Sans), layout |
| `js/app.js` | Header, footer, gallery, lightbox, enquiry form, WhatsApp links |
| `assets/images/products/` | Product photos (from the IndiaMART listing) |

## Common updates (all in `js/data.js`)

- **Add a product:** copy one product block, give it a new unique `id`, set `category`, and list its photos in `images`. Set `featured: true` to show it on the home page.
- **Add photos:** put JPGs (portrait 3:4, about 750×1000 px, under 300 KB) in `assets/images/products/`.
- **Add a category:** copy a category block. It appears automatically in the collections, gallery filters, footer and enquiry form.
- **Prices, sizes, weight, finish:** fill the matching fields. Leave a field as `null` to hide it. With no price, the site shows "Price on Request".
- **Email, address, business hours, social links:** fill them in under `business`. The map uses `address` once it is set.
- **Videos:** add YouTube IDs under `videos`. A video section then appears in the gallery.

## Enquiries and WhatsApp

- Every enquiry form, "Enquire on WhatsApp" button, and the floating button opens WhatsApp with a pre-filled message addressed to **+91 99949 84943**. The customer taps Send.
- The site never shows a fake "submitted" message. To also receive enquiries by email, create a free form endpoint (such as Formspree) and paste its URL into `enquiry.endpoint`. The site then shows a success message only when that service confirms receipt.

## Before going live: checklist

- [ ] Verify product descriptions marked `TODO` in `js/data.js`
- [ ] Add the full street address, email and business hours
- [ ] Replace `YOUR-DOMAIN` in `sitemap.xml` and `robots.txt`; add a canonical link and absolute `og:image` URL in `index.html`
- [ ] Add more and higher-quality product photos when available
- [ ] Host anywhere that serves static files (Netlify, GitHub Pages, Cloudflare Pages, or any web host)
