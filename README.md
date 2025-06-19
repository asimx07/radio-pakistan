# radio-pakistan
An app that plays Pakistani radio over the internet.

App has pretty calming UI and gives nostalgic feels to Pakistani Diaspora.

## Updating the station list

Radio stations are defined in `src/data/stations.js`. Each entry is an object with:

- `name`: Display name of the station
- `streamUrl`: URL to the live audio stream
- `logo` (optional): Path or URL to a logo image

To add or modify stations, edit `src/data/stations.js` and update the array.
After editing, rebuild or restart the app so changes take effect.
