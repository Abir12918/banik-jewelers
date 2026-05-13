# Banik Jewelers Brand Foundation

## Sprint 1 Decision Summary

This project will use the brand name **Banik Jewelers**.

The website should feel like a high-end family-owned jewelry house: polished enough to sit near Cartier or Tiffany in tone, but warmer, more personal, and rooted in traditional gold jewelry craftsmanship.

## Brand Positioning

Banik Jewelers is a boutique gold jewelry destination for bridal, festive, and heirloom-inspired pieces. The brand voice should feel elegant, sincere, and welcoming.

The site should communicate:

- High-end gold jewelry
- Family-owned care and trust
- Bridal and occasion readiness
- Traditional craftsmanship with a modern boutique presentation
- Personal inquiry over anonymous ecommerce

## Visual Direction

The photography strongly suggests a dark luxury direction: gold jewelry staged on black velvet, with ruby, pearl, emerald, and champagne stone accents. The design should use the product images as the main visual material rather than decorative illustrations.

Recommended atmosphere:

- Black velvet backgrounds
- Antique gold accents
- Ruby details for warmth and tradition
- Pearl ivory for softness and family-owned approachability
- Modern glass panels used sparingly for navigation, contact, and featured catalogue overlays
- Subtle gradients that feel like light across metal, not loud color effects

## Color Palette

| Role | Name | Hex |
| --- | --- | --- |
| Primary background | Onyx Black | `#070707` |
| Secondary background | Velvet Navy | `#0B1020` |
| Primary accent | Antique Gold | `#C89B3C` |
| Light accent | Champagne | `#F6E7C1` |
| Warm accent | Ruby | `#8B1022` |
| Text light | Pearl Ivory | `#FFF8EA` |
| Text muted | Warm Stone | `#B8AA91` |

Use black and ivory as the foundation, gold as the signature accent, and ruby only for emphasis.

## Typography

Recommended pairing:

- Headings: `Cormorant Garamond`
- Body and UI: `Inter`

Rationale:

- `Cormorant Garamond` gives the brand an editorial, bridal, heirloom quality.
- `Inter` keeps the actual interface modern, readable, and approachable.

Type style:

- Large, refined serif headlines
- Short, confident section titles
- Clean body copy with generous line height
- Avoid overly decorative script fonts
- Keep letter spacing at `0`

## Logo Direction

No formal logo exists yet, so the first version should use a refined wordmark:

**BANIK JEWELERS**

Recommended treatment:

- Uppercase serif wordmark
- Antique gold color
- Small ruby dot or fine gold rule may be used as a brand accent
- Avoid heavy crown, diamond, or generic jewelry icons

## Site Map

Initial landing site:

- Home
- Catalogue
- About Us
- Contact

The first version should not include cart or checkout. The best conversion path is inquiry and appointment/contact.

## Approved Technical Direction

This project will use the **Heritage-Tech** stack:

- Framework: `Next.js 15+` with React
- Styling: `Tailwind CSS`
- Animations: `Framer Motion`
- Images: `next/image` first, with Cloudinary as a later option if the catalogue grows or remote image management becomes important
- Deployment: `Vercel`

Rationale:

- Next.js gives the site strong SEO, fast page delivery, and a natural Vercel deployment path.
- Tailwind supports the luxury visual system without a heavy CSS framework.
- Framer Motion will provide restrained, premium-feeling motion such as slow fades, reveal transitions, and subtle shimmer accents.
- `next/image` will handle responsive image optimization for the initial catalogue while keeping the implementation simple.
- Vercel will connect directly to GitHub so updates can deploy from the repository.

Implementation guardrails:

- Use server-rendered pages for the primary marketing and catalogue surfaces.
- Keep animations subtle and slow; motion should feel polished, not busy.
- Preserve original photos and generate optimized web assets separately when needed.
- Avoid adding ecommerce infrastructure in the first build.
- Favor component-level composition so future catalogue details, appointment booking, or ecommerce can be added cleanly.

## Page Goals

### Home

Purpose: Create the premium first impression and guide visitors into the catalogue or inquiry.

Must include:

- Full-bleed jewelry hero image
- Brand wordmark and short positioning statement
- Catalogue CTA
- Contact CTA
- Featured collection preview
- Short family-owned trust statement

### Catalogue

Purpose: Showcase the collection as a curated gallery.

Must include:

- Responsive visual grid
- All selected photos from `photos/`
- Category filters
- Enlarged image view or detail modal
- Inquiry CTA for each piece

Suggested categories:

- Bridal Sets
- Statement Necklaces
- Pearl Sets
- Traditional Gold
- Ruby & Emerald Accents

### About Us

Purpose: Make the brand feel trustworthy, personal, and established.

Must include:

- Family-owned positioning
- Craftsmanship and occasion jewelry copy
- Warm boutique tone
- Jewelry imagery if no family/store photo is available

### Contact

Purpose: Convert interest into conversation.

Must include:

- Contact form
- Phone/email placeholders until final details are available
- Optional WhatsApp/Instagram placeholders
- Appointment or private viewing language

## Photography Notes

The current folder contains 40 catalogue photos under `photos/`.

Observed strengths:

- Strong gold detail
- Black velvet backgrounds fit luxury direction
- Several bridal/statement pieces
- Ruby, pearl, and emerald accents create a recognizable visual signature

Implementation notes for later sprints:

- Use `IMG_0190.JPG` or another wide/impactful necklace image as an early hero candidate.
- Optimize images before publishing.
- Keep original photos untouched.
- Generate web-ready copies in a separate assets folder during build implementation.
- Use object-fit and fixed aspect ratios so the catalogue grid feels intentional.

## UX Principles

- Lead with real jewelry, not marketing copy.
- Keep pages visually rich but calm.
- Use glassmorphism only where it improves hierarchy.
- Avoid crowded text overlays on detailed jewelry images.
- Make inquiry actions easy and human.
- Do not show prices in the MVP unless the business decision changes.
- Do not build ecommerce until the showcase and inquiry flow are working well.

## Sprint 1 Acceptance Criteria

- Brand name is confirmed as Banik Jewelers.
- Visual direction is documented.
- Color and typography systems are selected.
- Initial sitemap is defined.
- Page goals are defined.
- Catalogue photo treatment is documented.
- Sprint 2 has enough guidance to begin implementation.
