# PTC MVP (Static HTML)

Static MVP for the Pilot Training Center website.

## Pages

- `index.html`
- `programs.html`
- `financing-pricing.html`
- `international.html`
- `contact.html`

## Assets

- `assets/css/styles.css`
- `assets/js/main.js`

## Brand + Messaging Notes

- Tagline used throughout: **"Where your aviation career starts"**
- Career-track-first positioning (outcome-based training language)
- Lead capture forms included on key pages
- Contact placeholders used as requested:
  - Email: `theshoegod100@gmail.com`
  - Phone: `123-456-7890`
  - Address: placeholder campus/advising locations
- No social links included

## WordPress Conversion Plan

To convert this static MVP into WordPress cleanly:

1. **Theme Setup**
   - Create a custom theme (or child theme) with shared `header.php`, `footer.php`, and `functions.php`.
   - Move shared navigation/footer markup out of each HTML page into template parts.

2. **Template Mapping**
   - `index.html` -> `front-page.php`
   - `programs.html` -> custom page template (`template-programs.php`)
   - `financing-pricing.html` -> custom page template (`template-financing.php`)
   - `international.html` -> custom page template (`template-international.php`)
   - `contact.html` -> custom page template (`template-contact.php`)

3. **Assets**
   - Enqueue CSS/JS via `wp_enqueue_style` and `wp_enqueue_script` in `functions.php`.
   - Keep file structure under `/assets/css` and `/assets/js` for maintainability.

4. **Content Management**
   - Replace hardcoded text sections with WordPress fields (Gutenberg blocks or ACF fields) so non-technical edits are easy.
   - Store contact info globally via theme options / ACF options page.

5. **Lead Forms**
   - Replace static form behavior with a WordPress form plugin (e.g., Gravity Forms, WPForms, Formidable).
   - Route submissions to admissions inbox and CRM/webhook if needed.

6. **Navigation + SEO**
   - Register WordPress menus and manage links in wp-admin.
   - Add SEO plugin (Rank Math/Yoast), schema, metadata, and XML sitemaps.

7. **Performance + QA**
   - Optimize CSS/JS loading, caching, and image compression.
   - Test responsive behavior, form submission, and cross-browser compatibility before launch.
