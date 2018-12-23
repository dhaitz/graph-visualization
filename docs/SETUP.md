# *** work in progress ***

# Create Your Own Visualizations

## Prepare data and compute graph layout

see https://github.com/dhaitz/graph-layout-computation for instructions

## Store graph data
graphs folder structure:

* `graphs` parent folder
* individual data folder in `graphs`, each containing the bin/json files
* in `graphs`, put a `manifest.json` with following content:


    {
      "all": [
        "subfolder1",
        "subfolder2"
      ],
      "last": "subfolder2"
    }

for each subfolder



## Local development


    git clone https://github.com/dhaitz/graph-visualization
    cd graph-visualization



* `config.js` in `pm/src/` folder:
  
    export default {
      dataUrl: '//127.0.0.1:8080/'
    };
    

This requires a http-server running with a computed graph layout.


    npm i
    npm start

This will start a local development server with auto-rebuild.



## Setup local data server

* start webserver with `http-server --cors` in PARENT dir of `graphs`


## Setup web local server 


* `config.js` in `pm/src/` folder:

  
    export default {
      dataUrl: '//127.0.0.1:8080/'
    };
    
* Optional: Edit welcome screen in `pm/src/welcome.jsx`
* in `pm` folder, run `npm start`



## Run

* Open `http://127.0.0.1:8081` in browser to see welcome screen


or


* Open `http://127.0.0.1:8081/#/galaxy/graphs` in browser to open graph directly



## Remote (on GitHub-Pages)

##### Upload data


##### Build and deploy

	# build
    npm run build
	
	# deploy
    cd ./build
    git add .
    git commit -m 'push to gh-pages'
    git push --force git@github.com:dhaitz/graph-visualization.git master:gh-pages
	
##### Adjust welcome screen


##### Open

https://dhaitz.github.io/graph-visualization/