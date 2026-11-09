# Veloria

Veloria is a luxury fashion landing page with a boutique editorial aesthetic, a style questionnaire, and a dedicated contact page for the atelier.

## Highlights

- Rich home page with editorial hero, brand story, curated collection, journal block, and runway video footer.
- Interactive style concierge with a “Not yet” state that keeps the conversation open and a “Yes” flow that moves to a style questionnaire.
- Questionnaire page that determines a suggested fashion profile based on three questions.
- Contact page ready for Formspree submission with validation and a clear success flow.
- Responsive design for desktop, tablet, and mobile.

## Project structure

```text
Veloria/
├── index.html         # Home page with editorial content and tailored interactions
├── questionnaire.html # Fashion style quiz and profile result page
├── contact.html       # Contact page configured for Formspree submission
├── style.css          # Layout, styling, and responsive rules
├── script.js          # Navigation and interactive behavior
├── README.md          # Project documentation
└── .
```

## Run locally

No build step is required.

1. Open `index.html` in a browser.
2. Or serve the folder with a static server:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Formspree setup

The contact form is ready for Formspree, but you still need to replace the placeholder form endpoint in `contact.html`:

```html
<form class="contact-form standalone-form" action="https://formspree.io/f/your-form-id" method="POST">
```

Replace `your-form-id` with your actual Formspree form ID. The page also includes a `_next` redirect target that you should point to your own URL if you want the success message to appear after submission.

## Customization

- Update photography, copy, and product text in the HTML pages.
- Adjust the palette and spacing in `style.css`.
- Edit the style-question profiles in `questionnaire.html` if you want different personality rules.

## Notes

This project uses external fonts, icons, and Unsplash images. An internet connection is required for those assets to load properly.

## License

Use for portfolio, personal, or concept work. Confirm third-party asset usage rights before commercial deployment.
