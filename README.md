# Little Oaks Early Learning Center — Website Project

A responsive childcare centre website built with plain HTML, CSS, and JavaScript. The project does not require a build step or third-party JavaScript dependencies.

## Project files

- `index.html` — website structure, page content, navigation, and enquiry form
- `styles.css` — colour system, typography, responsive layout, and components
- `script.js` — mobile navigation, copyright year, and client-side form validation

## Run locally

1. Open this folder in Visual Studio Code.
2. Open **Terminal → New Terminal**.
3. Run:

```bash
python3 -m http.server 8000
```

4. Visit `http://localhost:8000` in your browser. Stop the server with `Ctrl+C`.

You can also open `index.html` directly in a browser, although a local server is recommended for testing.

## Deploy

This is a static website and can be hosted on Netlify, GitHub Pages, or another static hosting provider.

### Netlify
Upload the project folder using Netlify's manual deploy option. No build command is required; publish the folder containing `index.html`.

### GitHub Pages
Push the project files to a repository, then enable Pages in **Settings → Pages** and select the branch and root directory.

## Business information to confirm before launch

The website currently identifies the service area as San Antonio, Texas. The business owner must supply and approve:

- Exact business address and directions
- Working business email address and telephone number
- Confirmed opening hours, holiday closures, and operating days
- Programme descriptions, age eligibility, schedules, availability, and enrolment process
- Tuition, fees, payment terms, and any additional services the centre chooses to publish
- Approved photographs and confirmation of image usage rights
- Any business-specific policies, licensing details, credentials, or regulatory information the owner wants published (only after verification)

No accreditation, inspection rating, staff qualification, award, testimonial, ratio, or educational outcome is claimed in this project.

## Enquiry form configuration required

The form currently validates the parent/guardian name, email format, programme selection, and message in the browser. It does not send or store submissions.

Before collecting enquiries, connect the form to a secure form endpoint or backend, configure server-side validation and spam protection, define who receives submissions, and provide an appropriate privacy notice and data-retention process. Update the success state in `script.js` so it only confirms delivery after the endpoint reports success. Add a clear error state for failed submissions. Do not collect children's sensitive information through an unconfigured form.

## Images and external assets

The page loads photography from Unsplash image URLs and typography from Google Fonts. An internet connection is needed for these remote assets. Review the licensing and usage terms for the chosen images and replace them with client-approved images where necessary.

## Customisation

Edit the CSS custom properties at the beginning of `styles.css` to update the colour palette. Update the content and image URLs in `index.html`. Contact and business information should only be added after the owner verifies it.
