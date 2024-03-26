# Japanese Stiltgrass Observations Map

This project creates an interactive choropleth map of Japanese Stiltgrass (_Microstegium vimineum_) observations at the county level, normalized by population.
It uses the [LeafletJS](https://leafletjs.com) library to visualize observation data from the [iNaturalist](https://inaturalist.org) citizen science platform, and resident population from the [U.S. Census Bureau](https://census.gov).
Source data was loaded into QGIS and joined to a county shapefile from the Census' TIGER database.
The map is written in JavaScript and uses [JQuery](https://jquery.com) to load the shapefile data.
