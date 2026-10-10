# Birthday Surprise for Reena Didi 💗

## Files
- `index.html` – page structure + social-sharing tags
- `style.css` – dreamy pink styling and animations
- `script.js` – all behaviour. **The top of this file holds your settings** (name, messages, song, photos)
- `assets/photos/` – your photos (3 pink placeholders included)
- `assets/audio/` – put your MP3 here as `birthday-song.mp3`
- `assets/preview.jpg` – link-preview image (replace with your own 1200x630 image)

## Personalize (no coding needed)
1. Open `script.js` in Notepad/TextEdit and edit the text inside `birthdayConfig`.
2. **Photos:** copy JPGs into `assets/photos/` (e.g. `photo1.jpg`). In `photoPaths` list them, and write matching `photoCaptions`. List order = page order. Add more by adding lines. Delete the `.svg` placeholders when done.
3. **Song:** save your MP3 as `assets/audio/birthday-song.mp3` (or change `songPath`). Edit `songTitle` / `songArtist`. Use only music you have the rights to use.
4. Browser-tab title and link-preview text: edit the `<title>` and `og:` lines in `index.html`.

## Run locally
Double-click `index.html`. (Optional: run `python3 -m http.server` in this folder and open http://localhost:8000.)

## Publish (get a real URL)
- **Netlify (easiest):** open app.netlify.com/drop, drag the whole `birthday-surprise` folder in. Netlify gives you the URL (rename it in Site settings).
- **GitHub Pages:** new repo, upload all files, Settings > Pages > deploy from `main`. URL: `https://USERNAME.github.io/REPO/`.

**After you have the URL:** in `index.html` replace both `https://YOUR-SITE-URL/` values (`og:url`, `og:image`) with your real URL and re-upload. The preview image must be publicly reachable. Apps cache previews, so updates can take hours; test with a fresh link (add `?v=2`).

## Share
Send the URL on WhatsApp / Instagram DM, or use the Share button on the last screen.

## Testing checklist
- [ ] Opens on phone + laptop (Chrome, Safari, Firefox); no sideways scrolling
- [ ] "Open your surprise" works: confetti, balloons, typed heading
- [ ] Music: play/pause, mute, progress; no double tracks after Replay
- [ ] Missing MP3 shows a friendly note, nothing breaks
- [ ] Gallery: swipe on mobile, grid on desktop, lightbox arrows / Esc / close
- [ ] Make a Wish blows out and relights candles
- [ ] Letter opens and types out
- [ ] Replay, Back to the beginning, Share (or copy link)
- [ ] Open the public URL on another device; check the link preview
- [ ] Phone "reduce motion" setting calms animations
