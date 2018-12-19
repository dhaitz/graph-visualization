# Software Galaxies

Everything based on the awesome work of Andrei Kashcha github.com/anvaka.

This repository combines visualizations of major software package managers.

All visualizations are available here: http://anvaka.github.io/pm/#/

Please read [operating manual](https://github.com/dhaitz/graph-visualization/tree/master/about#software-galaxies-documentation) -
it is short and describes basic navigation principles.

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
    


    npm i
    npm start

This will start a local development server with auto-rebuild.


# Remote (on GitHub-Pages)

# upload data

## Build and deploy

	# build
    npm run build
	
	# deploy
    cd ./build
    git add .
    git commit -m 'push to gh-pages'
    git push --force git@github.com:dhaitz/graph-visualization.git master:gh-pages