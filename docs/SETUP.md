# Create Your Own Visualizations

## 1. Prepare data and compute graph layout

See https://github.com/dhaitz/graph-layout-computation to compute the graph layout files.

## 2. Set up graph data server
* In your terminal, move to the folder with the created graph layout, i.e. the folder containing the `labels.json`, `links.bin` and `positions.bin` files. 
* Start a local webserver with `http-server --cors -p 8082`


## 3. Start galaxy

    git clone https://github.com/dhaitz/graph-visualization
    cd graph-visualization
    npm i
    npm start

This will start a local development server with auto-rebuild.

Graph node size is the number of in-edges.
Edge colors are set automatically.


## 5. Open page in browser

Open `http://127.0.0.1:8080` in browser.

After the graph layout files have changed or when loading another graph,
likely the browser cache has to be cleared.

## 6. Navigate and explore

See `NAVIGATION.md` for navigation and view options.


