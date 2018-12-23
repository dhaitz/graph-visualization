# Graph Galaxies

Everything based on the awesome work of [Andrei Kashcha](https://github.com/anvaka).

which contains many awesome graphs of package dependencies for various programming languages.
http://anvaka.github.io/pm/#/

## Navigation and display instruction
See [here](https://github.com/anvaka/pm/tree/master/about).

The `ml` parameter in the url controls the maximum length for a link to be displayed. 

Increase it to see longer links, but it might obscure view and slow down.

Reload in new tab.

## Setup locally
## Setup remote




# Prerequisite: graph layout

link to repo

server address in 


# Local development


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


# Remote (on GitHub-Pages)

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