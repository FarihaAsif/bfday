# Happy Boyfriend's Day Interactive Scrapbook

This is a personalized, interactive scrapbook website built with React, Vite, and Framer Motion. It replicates a handmade, romantic digital scrapbook experience with animations, hidden gifts, a personal letter, and a custom music player.

## 🚀 Getting Started

To run the project locally on your machine:

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```
3. Open your browser to `http://localhost:5173`.

To build the site for production/deployment:
```bash
npm run build
```

## 💖 How to Customize

This website was built using a "Placeholder-First" approach. You can easily swap out the placeholder images and texts without touching any React code.

### 1. Changing Text and Content
All the personal text, captions, and names live in one central file:
**`src/config/siteContent.ts`**

Open this file and you will see an `export const siteContent = { ... }` object. You can edit the `title`, `letter.body`, `bouquet.heading`, and any other text directly here.

### 2. Replacing Photos
The layout uses four Polaroid-style photos. Replace the placeholder images located here:
- `public/assets/photos/placeholder-1.jpg`
- `public/assets/photos/placeholder-2.jpg`
- `public/assets/photos/placeholder-3.jpg`
- `public/assets/photos/placeholder-4.jpg`

*Tip: Square (1:1) or slightly portrait photos work best!*

### 3. Replacing Gifts and Artwork
Replace the images in the `public/assets/gifts/` and `public/assets/illustrations/` folders.
If your new images have different filenames, just update the paths in `src/config/siteContent.ts`.

### 4. Replacing Music
1. Add your `.mp3` file to `public/assets/music/`.
2. Open `src/config/siteContent.ts`.
3. Update `music.src` to point to your new file (e.g., `"/assets/music/my-song.mp3"`).
4. Update `music.title` and `music.artist`.

### 5. Changing Colors and Fonts
Global design tokens (colors, fonts, shadows) are defined as CSS variables at the top of:
**`src/styles/globals.css`**

You can swap out Google Fonts in `index.html` and update `--font-display`, `--font-heading`, and `--font-handwritten` in the CSS to completely change the vibe.

## 🌍 Deployment

You can host this site for free using platforms like Vercel, Netlify, or GitHub Pages.
1. Run `npm run build`.
2. The generated `dist/` folder contains your static website.
3. Upload the `dist/` folder to your hosting provider.
