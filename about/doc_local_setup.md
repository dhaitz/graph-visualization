# Install packages
For graph generation: https://github.com/anvaka/allpypi
For visualization: https://github.com/anvaka/pm


# Prepare data for graph

* checkout allpypi
* Data as 'packages.csv' in `allpypi/data`
* Format: comma-separated, null values as ' null'  (e.g. 'xy.de, null')


    xy.de,facebook.com
    yz.de, null    
    

* no other files in the data/ subfolder

# Create graph

* `node index.js` in allpypi folder
* Result: *.bin and *.json files in data/ folder
* Copy data/labels.json  data/links.bin  data/positions.bin to new graphs subfolder

# Store graph data
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


# Setup data server

* start webserver with `http-server --cors` in PARENT dir of `graphs`


# Setup web server 


* `config.js` in `pm/src/` folder:

  
    export default {
      dataUrl: '//127.0.0.1:8080/'
    };
    
* Optional: Edit welcome screen in `pm/src/welcome.jsx`
* in `pm` folder, run `npm start`



# Run

* Open `http://127.0.0.1:8081` in browser to see welcome screen


or


* Open `http://127.0.0.1:8081/#/galaxy/graphs` in browser to open graph directly


The parameter `ml` specifies maximum length of links to be displayed. Change in URL query (open in new tab) or in `src/galaxy/native/appConfig.js`
