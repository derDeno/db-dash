# db-dash
Deutsche Bahn onboard (in train WiFi network) Dashboard.

It uses the local api endpoints, that are available on the trains WiFi network.

## Usage

Open `index.html` in a browser while connected to the train's WiFi network. The page periodically queries
`/api1/rs/status` and `/api1/rs/tripInfo/trip` to display connection state, speed, location on a map and
basic trip information.
