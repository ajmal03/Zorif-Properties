# Zorif Properties Ltd website: changes (prepared 28 Oct 2026)

Replaces the live site at https://zorifpropertiesltd.com. The page is shorter and clearer. It now uses the new Zorif Properties brand (forest green and ivory), matched to the Zorif Instagram carousel (sections 14 and 15), instead of the old navy theme.

## 1. Enquiries (the most important fix)
- Before: the "Landlord Property Submission" and "Investor Requirements Form" forms on the page sent nothing. js/script.js only hid the form and showed "Thank you". The page also said "Enquiries are routed directly to firoz@…" and "A confirmation copy has been queued for our team".
- After: the fake forms, the "routed directly"/"queued" wording and the form JavaScript and CSS are all removed. Every landlord button opens https://forms.gle/zX5rpoWVx2SbUbxv8 in a new tab. Every investor button opens https://forms.gle/pcxMXGig1QsSVdQM8 in a new tab.
- Hero buttons: "Discuss Your Property" / "Share Your Investment Requirements" (links to #landlord-enquiry / #investor-enquiry) -> "I'm a Landlord" / "I'm an Investor" (Google Forms).

## 2. Free call
- Before: no booking link.
- After: "Book a free 15-minute call" (https://calendly.com/muhammedfiroznazar/free-15-minute-call, new tab) appears in the hero, the landlord section, the investor section, the contact section and the footer.

## 3. Location
- Before: Bedford appeared 5 times on the page and once in the brochure. Examples: "Focused on Bedford & surrounding areas", "operations across Bedford and surrounding areas", "Bedford & Surrounds / Core Operational Focus", "Primary Focus: Bedford & surrounding areas", and "PRIMARY FOCUS: Bedford and surrounding areas." in the brochure.
- After: "Selected UK areas" / "Working in selected UK areas". Bedford, Cambridge and 1% Club appear nowhere.

## 4. Guaranteed rent for landlords
- Before: the section was titled "Company Lets & Serviced Accommodation", and guaranteed rent was never mentioned.
- After: the section is titled "Guaranteed Rent & Company Lets" and has this paragraph: "With guaranteed rent, Zorif Properties Ltd rents your property on an agreed term and pays you a fixed monthly rent, even when the property is empty. The rent, the term and who looks after what are all set out in a written agreement before anything starts…" It has no figures. The suitability note now also mentions mortgage lender, freeholder and council permission.

## 5. Toned-down claims
- "round-the-clock guest support" -> removed ("We handle guests, cleaning, regular inspections and the agreed maintenance").
- "London Headquarters" (contact card) -> "Registered office". "Office Address" -> "Registered office".
- "PRS & ICO Compliant" / "Regulated Standards" -> "Registered" / "ICO registered and PRS member".
- "Active Member" / "approved member … upholding transparent resolution standards" -> "Member".
- "Strict supervision of guests, contractors…" -> "Written agreements: everything agreed in writing before we start."
- "comprehensive inspection", "prime order", "never surprises", "Dedicated Property Advisory & Management" -> plain wording.
- "government-authorised consumer redress scheme" -> "government-approved redress scheme for property agents".
- "We maintain high staging standards…" -> "The standard we aim for".
- "Full Hands-Off Management" (form option) -> removed along with the form.

## 6. Insurance
- Added "Insured with Simply Business" to the hero trust badges, the Registrations & Insurance card, the footer and the brochure.

## 7. Instagram
- https://www.instagram.com/madebyfiroz?obrf=NXdwZ2h4ZjRpeW9s&utm_source=qr -> https://www.instagram.com/madebyfiroz/

## 8. SEO and sharing
- Favicon: none (404) -> favicon.ico, favicon.svg, favicon-32.png, apple-touch-icon.png and favicon-512.png (an orange circle on black).
- OG image: none -> images/og-image.png (1200x630, black #0a0a0a, white bold "Zorif Properties Ltd", orange #ff6a00 accent, Switzer font).
- Title and OG title did not match ("…Property Opportunities & Management" vs "…Property Management & Sourcing") -> both are now "Zorif Properties Ltd | Property Sourcing & Guaranteed Rent".
- Meta description: generic -> it now names guaranteed rent, investors and "selected UK areas".
- Added a canonical link (https://zorifpropertiesltd.com/) and Twitter card tags.
- sitemap.xml: none (404) -> added.
- robots.txt: Cloudflare default only -> "Allow all" plus a sitemap line. Cloudflare may still add its own managed block in front of this.

## 9. Brochure
- downloads/zorif-properties-company-brochure.txt (".TXT") -> downloads/zorif-properties-brochure.pdf (one-page A4, black/orange, no Bedford, with insurance, the Google Forms and Calendly links). It is linked from the nav and the footer. The old .txt file is deleted.

## 10. Photos
- Before: 3 Unsplash hot-links, and the bedroom one is broken on the live site (images.unsplash.com/photo-1540518614846… returns 404). The kitchen photo showed a person.
- After: 3 self-hosted black-and-white interiors in images/ (generated example images, plus lazy loading). The label reads "Example images only, not Zorif properties."

## 11. Email links
- Before: the HTML was a copy of Cloudflare's processed output, with /cdn-cgi/l/email-protection links and the email-decode script.
- After: plain mailto:firoz@zorifpropertiesltd.com links. Cloudflare's Email Obfuscation will re-hide them on the live site if it is still switched on.

## 12. Legal pop-ups
- The privacy notice now says that enquiries come through Google Forms and calls are booked through Calendly. The cookie note is simplified and honest. The complaints procedure is reworded in plain English, with the same 3 / 15 working-day steps.

## Removed to trim the page
- The "Services & Process" nav link. It pointed to #services, which did not exist.
- The address from the top bar. It now shows the company number, PRS and ICO.
- The "Our Approach" filler line ("We believe exceptional property partnerships are built on…").
- Landlord steps cut from 5 long cards to 4 short ones. Investor steps cut from 5 to 4 short ones.
- The "Strategies evaluated depending on specific property characteristics…" filler line.
- The "Furnishing & Staging Vision" heading text and the repeated "Illustrative concept" captions. One clear label is kept.
- The long About text ("dedicated property solutions business… professional corporate accountability") -> two plain sentences.
- The whole tabbed form card with about 20 form fields, the "Thank you" panels, and the unused form CSS and JS.
- The separate "Download Company Brochure" section. The brochure is still in the nav and the footer.
- The ICO "Displayed as factual registration record without implying endorsement" line.
- The unused Playfair Display font and the 300-weight font, so less to download.

## 13. Trust logos (added 28 Oct 2026)
- **Property Redress (PRS) logo: added.** Property Redress says: "Download a digital version of our new logo. It is mandatory for all property agents to display their redress certificate and Property Redress logo both in the window of their branches and on their website." (https://www.propertyredress.co.uk/, also https://www.theprs.co.uk/Resource/ViewFile/141). The file came from the official "Download our logo" button: https://cdn.prod.website-files.com/6655a35f4289849985b10f25/674734f56fb706f9e78893b4_Property%20Redress%20icon%20COLOUR%20transparent%20png.avif
  - The original is kept as images/property-redress-logo-official.avif. images/property-redress-logo.png is the same image converted to PNG, with no other change.
  - It is shown on a white chip, because the logo text is dark, in the hero trust badge, the Registrations & Insurance card and the PRS pop-up, next to "PRS061215". A "Check our membership" link goes to https://www.propertyredress.co.uk/agent-finder.
  - The scheme has rebranded from "Property Redress Scheme" to "Property Redress". The wording now says "Property Redress (Property Redress Scheme) membership: PRS061215".
- **ICO logo: not used (not allowed).** The ICO says: "Use of any of the Commission's logos without the Commission's consent infringes the copyright … No permission will be granted for the use of the logos … unless … expressly approved by their office." (https://ico.org.uk/global/copyright-and-re-use-of-materials/, "Use of logos"). It is a text badge instead.
  - Before: "ICO registered / Ref: ZC269425" and "Information Commissioner's Office – Registered".
  - After: "Registered with the ICO / Ref: ZC269425" and "Registered with the Information Commissioner's Office, ref ZC269425", with a "Check the ICO register" link (https://ico.org.uk/ESDWebPages/Search).
- **Simply Business logo: not used.** Simply Business publishes no permission for customers to use its logo, so the plain text "Insured with Simply Business" stays.
- /workspace/zorif-certificates/ has no separate badge files. The PRS certificate PDF has the logo built in, but the official website download is used because it is cleaner.

## 14. New Zorif Properties brand (29 Oct 2026)
Source: brand pack at zorif-brand-package (README, brand guide PDF, 01-logos, 06-web). All content fixes in sections 1 to 13 are kept.
- **Name:** the public name is "Zorif Properties". "Zorif Properties Ltd" is used only for legal and trust details (top bar, How we work panel, Registrations card, footer, legal pop-ups and brochure company details). The pack's "ZORIF PROPERTY PARTNERS" wordmark is not used anywhere.
- **Logo:** the official symbol (lintel and two piers, the exact geometry from 01-logos/symbol-*.svg) sits in the header in forest and in the footer in ivory, next to an HTML wordmark: "ZORIF" with "PROPERTIES" underneath. The old blue house/Z icon is gone. The faint watermark of the symbol in the hero follows the guide's "symbol-forest at low opacity".
- **Colours:** forest #123C32 and ivory #F5F2E9 are the main colours. Sage #DCE3DD is used for the investor section and notes. Terracotta #B9694C is only an accent (eyebrow lintel marks, step-card rules and the Calendly button in Contact). Navy and blue are fully removed.
- **Typography:** Arial, as the brand guide says (bold for titles, regular for body). There are no web-font downloads now, so the Google Fonts and Plus Jakarta Sans links are removed. The body text is a little larger, and there is more space between sections.
- **Architectural details:** small lintel marks next to section labels, a stepped "cap" on the How we work panel, thin rules, square corners and faint horizontal lines in the hero.
- **Favicons:** replaced with the brand icons from 06-web (favicon.ico, favicon.svg from icon-32.svg, favicon-16/32.png, apple-touch-icon.png from icon-180, icon-192.png and favicon-512.png). theme-color is now #123C32.
- **OG image:** rebuilt at 1200x630 in ivory and forest, with the symbol, "ZORIF PROPERTIES", "Guaranteed rent for landlords. Property sourcing for investors." and "Selected UK areas".
- **Photos:** the same three generated interiors, now toned from forest-charcoal to ivory instead of plain black and white. Still labelled "Example images only, not Zorif properties." The alt text now says "illustration, not a Zorif property".
- **PRS logo chip:** still the official Property Redress logo on a white chip, now with a thin border so it stands out on ivory.
- **Brochure PDF:** restyled from black and orange to forest, ivory and terracotta, with the symbol and the same content. It still fits on 1 page.
- **Copy (light tone changes, no new claims):**
  - Hero headline: "Property opportunities. Clear communication. Considered management." became "Thoughtful property conversations. Clear next steps. Lasting relationships."
  - Hero intro: added "Every property has people behind it."
  - Investors intro: added "It starts with a conversation." and "check them with you".
  - Landlord step 1: "check whether it suits" became "talk through whether it suits".
  - About: added "Good property work is about people, and we would rather build lasting relationships than rush a deal."
  - Contact: the heading "Contact" became "Let's talk", and "We will come back to you with clear next steps." was added.
  - Phone hours: "Monday – Friday: 9am – 6pm" became "Monday to Friday, 9am to 6pm".
- **Navigation:** the separate "Home" link is removed from the top menu, because the logo links home. It is still in the footer.
- **Not changed:** the madebyfiroz personal brand is not touched (see section 15 for the Instagram link).

## 15. Matched to the Zorif Instagram carousel (29 Oct 2026)
The site now looks like the 10-slide intro carousel (Zorif-01 to Zorif-10). All content fixes are kept.
- **Headlines:** a serif in regular weight and sentence case, like the carousel. It uses Georgia, with Gelasio (a free Google font built to Georgia's measurements) loaded as a fallback for phones without Georgia. Section titles are now sentence case, for example "Guaranteed rent & company lets" and "Property sourcing & checks".
- **Labels:** small bold uppercase labels in terracotta (light terracotta #DEA087 on forest), as in "MEET ZORIF". The small lintel marks next to them are removed.
- **Body text:** Arial / Helvetica, as before and as in the carousel.
- **Logo lockup:** the symbol with the company name beside it (changed to title case in section 16).
- **House skyline:** thin outline houses with 2x2 windows on a terracotta ground line, redrawn from the carousel's own measurements (images/brand/skyline-on-forest.svg and skyline-on-ivory.svg). They divide the hero, Investors, About and Contact sections.
- **Sections alternate forest and ivory:** hero (forest), Landlords (ivory), Investors (forest), Standards (ivory), About (forest), Contact (ivory), footer (forest). The sage background is no longer used for a section. Sage is now only the colour of the big faded step numbers.
- **Buttons:** pill-shaped and uppercase, like "DM US TO CONNECT". On forest the main buttons are terracotta, with an ivory outline as the second choice. The hero's Calendly link is styled like "GET TO KNOW US →".
- **Cards:** large faded serif step numbers (01 to 04), as on the carousel slides. "How we work" is an ivory card on the forest hero.
- **OG image and brochure:** both redone to match: forest, the lockup, a thin rule, a terracotta label, serif headlines and the house skyline (OG); serif section headings (brochure).
- **Instagram link:** the footer now links to the new Zorif account @zorifproperties (https://www.instagram.com/zorifproperties/) instead of the personal madebyfiroz account. Nothing about the madebyfiroz brand itself was changed.

## 16. Logo wording in title case (29 Oct 2026)
- The wordmark next to the symbol now reads "Zorif Properties" (capital Z and P only) instead of "ZORIF / PROPERTIES" in capitals.
- It's set in the same serif as the headlines (Georgia, with Gelasio as a fallback), in regular weight on one line.
- Changed in the website header and footer, the OG image (images/og-image.png) and the PDF brochure (downloads/zorif-properties-brochure.pdf). Nothing else was changed.
