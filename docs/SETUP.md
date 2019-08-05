# *** work in progress ***

# Create Your Own Visualizations

## Prepare data and compute graph layout

See https://github.com/dhaitz/graph-layout-computation to compute the graph layout files.

## Set up graph data 'server'
graphs folder structure:

* `graphs` parent folder
* Own folder `mygraph`
* labels.json links.bin positions.bin meta.json in own folder
* individual data folder in `graphs`, each containing the bin/json files
* in `graphs`, put a `manifest.json` with following content:


    {
      "all": [
        "mygraph"
      ],
      "last": "mygraph"
    }

for each subfolder.



* start webserver with `http-server --cors -p 8082` in PARENT dir of `graphs`

Edit .html 


## Local development

    git clone https://github.com/dhaitz/graph-visualization
    cd graph-visualization

This requires a http-server running with a computed graph layout.


    npm i
    npm start

This will start a local development server with auto-rebuild.




## Run

* Open `http://127.0.0.1:8080` in browser to see welcome screen


or


* Open `http://127.0.0.1:8080/#/galaxy/graphs` in browser to open graph directly

