# radio-pakistan
An app that plays Pakistani radio over the internet. The interface is simple and provides a nostalgic feel for the Pakistani diaspora.

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

## Troubleshooting audio playback
Different browsers may enforce autoplay restrictions. If audio does not play:
- Click anywhere on the page to allow playback.
- Make sure the audio source is served over HTTPS and with appropriate CORS headers.
- Check browser site permissions and ensure sound is not blocked.
