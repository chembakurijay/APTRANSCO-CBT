# APTRANSCO CBT Portal

A lightweight offline/online CBT portal for APTRANSCO AEE mock examinations built using HTML, CSS, and vanilla JavaScript.

## Features

- Responsive mock test landing page
- Instructions page with declaration and exam start flow
- Exam page with timer, question palette, and answer selection
- Result page scaffold for future score display
- Modular file structure for future expansion

## Usage

1. Open `index.html` in a browser.
2. Choose a mock test.
3. Check the instructions and start the exam.

## Notes

- The portal is now a single-page application inside `index.html`.
- The exam uses modular JavaScript in `js/`.
- Question definitions are loaded from `data/flt01.js`.
- `js/app.js` controls page state, while `js/ui.js` handles rendering.

## GitHub Pages Deployment

1. Push the repository to GitHub.
2. In the repository settings, open the **Pages** section.
3. Set the source to the `main` branch (or the branch you use) and choose the `/ (root)` folder.
4. Save the settings.
5. GitHub Pages will publish the site at `https://<your-username>.github.io/<repository-name>/`.

### Notes for deployment

- `index.html` must remain in the repository root.
- The app uses only static files and browser-based module imports, so no backend is required.
- `.nojekyll` is included to prevent GitHub Pages from ignoring files or directories that start with an underscore.
- If you need to update the site, commit and push changes again; GitHub Pages will redeploy automatically.
