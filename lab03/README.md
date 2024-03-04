# Grandfather Spring Count - 105 Corridor
## Will Bennett

This web map provides an interactive overview of one of the routes conducted as part of the Grandfather Mountain Spring and Christmas Bird Counts.

The map is built with the [Leaflet](https://leafletjs.com/) library, using the National Geographic World Map tile layer provided by Esri.
The route data was derived from a Google Maps route and converted using the [Maps to GPX](https://mapstogpx.com) tool by Sverrir Sigmundarson.

The map code is written in Javascript, while the rest of the page is written in HTML.
The data for the route and hotspots are loaded from local JS files.
For each location a tooltip is added to the map with the name of the hotspot, and a popup is attached with a description of the stop and a link to an [eBird](https://ebird.org/home) checklist from a previous survey.
