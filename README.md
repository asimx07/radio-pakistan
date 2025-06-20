# radio-pakistan

A React-based application that streams Pakistani radio stations. The interface is simple and nostalgic for the Pakistani diaspora. This project was initialized with a basic React setup.

## Available Scripts
- `npm start` - Start the development server.
- `npm run build` - Build the production bundle.
- `npm run lint` - Lint the source code.

## Development
Install dependencies and start the development server:

```bash
npm install
npm start
```

## Production Build
Generate an optimized bundle in the `build/` directory:

```bash
npm run build
```

### Deploying `build/`
Upload the contents of the `build/` directory to a static host such as [GitHub Pages](https://pages.github.com/) or [Netlify](https://www.netlify.com/). For GitHub Pages you can push `build/` to a `gh-pages` branch. Netlify accepts a `build/` folder directly.

## Updating the station list
Radio stations are defined in `src/data/stations.js`. Each entry is an object with:

- `name`: Display name of the station
- `streamUrl`: URL to the live audio stream
- `logo` (optional): Path or URL to a logo image

To add or modify stations, edit `src/data/stations.js` and update the array. After editing, rebuild or restart the app so changes take effect.

## Usage
Open `index.html` in a browser. The page lists a few stations with play/pause controls. Select a station to start streaming. A volume slider lets you adjust playback volume and the currently playing station name is shown.

No build step is required because React is loaded from a CDN.

## Customizing the Look
* **Fonts** – The default font is [Noto Nastaliq Urdu](https://fonts.google.com/specimen/Noto+Nastaliq+Urdu) loaded from Google Fonts. Update the `@import` line in `styles.css` to change the typeface.
* **Colors** – Global colors are defined in `styles.css`. Update the CSS variables under `:root` to tweak the palette.
* **Logo** – A vintage microphone logo is provided in `assets/images/vintage-radio.svg`. Swap it with your own graphic while keeping the `.logo` class in the HTML.

Include the `styles.css` file in your HTML pages to apply these styles.

## Troubleshooting audio playback
Different browsers may enforce autoplay restrictions. If audio does not play:
- Click anywhere on the page to allow playback.
- Make sure the audio source is served over HTTPS and with appropriate CORS headers.
- Check browser site permissions and ensure sound is not blocked.
