# SiThu — Portfolio

Simple React + Vite portfolio scaffold using Tailwind CSS.

Quick start

```bash
npm install
npm run dev
```

Build

```bash
npm run build
npm run preview
```

Edit your CV content in `src/data/cvData.js` and add images to `public/assets/`.

Deploy

- Vercel: connect the repository and Vite will be detected automatically.
- Netlify: drag & drop the `dist` folder after running `npm run build`, or connect the repo and set build command `npm run build` and publish directory `dist`.
- GitHub Pages: build with `npm run build` and publish the `dist` directory using an action or gh-pages deploy tool.

Notes

- The contact form currently uses a `mailto:` fallback which opens the user's email client. To use EmailJS, follow their docs and replace the `handleSubmit` logic in `src/components/Contact.jsx`.
