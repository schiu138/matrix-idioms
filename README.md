# Matrix Idiom Game — PWA Setup Guide

## What this is
An AI-powered English idiom learning app built around the Matrix trilogy.
Installs as a real app on your Samsung phone — no App Store needed.

---

## Step 1 — Add your Anthropic API key

Open `index.html` and find this line near the bottom:

```javascript
const API_KEY = 'YOUR_ANTHROPIC_API_KEY_HERE';
```

Replace `YOUR_ANTHROPIC_API_KEY_HERE` with your actual key from:
https://console.anthropic.com

---

## Step 2 — Add app icons

The `icons/` folder needs two PNG files:
- `icon-192.png` (192×192 pixels)
- `icon-512.png` (512×512 pixels)

**Option A — Generate automatically:**
```bash
npm install canvas
node make-icons.js
```

**Option B — Use any image editor:**
Create a simple dark background with a green "M" letter.
Save as PNG at both sizes into the `icons/` folder.

**Option C — Use a free online tool:**
Go to https://favicon.io or https://realfavicongenerator.net
Generate icons and place them in the `icons/` folder.

---

## Step 3 — Deploy to GitHub Pages (free hosting)

1. Create a new GitHub repository (e.g. `matrix-idioms`)
2. Upload all files to the repository:
   - index.html
   - manifest.json
   - sw.js
   - icons/ (folder with both PNG files)
3. Go to repository Settings → Pages
4. Set Source to: `main` branch, `/ (root)` folder
5. Click Save
6. Your app URL will be: `https://yourusername.github.io/matrix-idioms`

---

## Step 4 — Install on Samsung phone

1. Open Samsung Internet or Chrome on your phone
2. Go to your GitHub Pages URL
3. Tap the menu (three dots)
4. Tap "Add to Home Screen" or "Install App"
5. The app icon appears on your home screen

---

## Files in this project

| File | Purpose |
|---|---|
| `index.html` | The complete app — all HTML, CSS, and JavaScript |
| `manifest.json` | Tells the phone this is an installable app |
| `sw.js` | Service worker — enables offline use |
| `make-icons.js` | Script to auto-generate the app icons |
| `icons/icon-192.png` | App icon (small) |
| `icons/icon-512.png` | App icon (large) |

---

## How the app works

- Select a film (Matrix I, Reloaded, or Revolutions)
- Select a scene from the dropdown
- Tap "Generate Scene" — the AI writes fresh dialogue with 4 idioms embedded
- Tap any amber-highlighted phrase to see the meaning + memory hook
- Switch to Quiz Mode to test yourself
- Your progress (idioms learned, quiz score) is saved on your phone
- Every scene can be regenerated for different idioms

---

## Costs

- GitHub Pages hosting: **free**
- Anthropic API: pay per use (approximately $0.003 per scene generated — very low cost)
- You can set usage limits at https://console.anthropic.com

---

## Adding more movies

To add a new movie trilogy, open `index.html` and find the `const F = [...]` array.
Add a new object following the same pattern with a title and list of scenes.
The AI handles the rest automatically.
