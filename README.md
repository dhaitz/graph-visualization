# Software Galaxies

This repository combines visualizations of major software package managers.

All visualizations are available here: http://anvaka.github.io/pm/#/

Please read [operating manual](https://github.com/anvaka/pm/tree/master/about#software-galaxies-documentation) -
it is short and describes basic navigation principles.


# Local development

git clone https://github.com/anvaka/pm
cd pm
npm i
npm start
```

This will start local development sever with auto-rebuild.



# Build and deploy

	# build
    npm run build
	
	# deploy
    cd ./build
    git add .
    git commit -m 'push to gh-pages'
    git push --force git@github.com:anvaka/pm.git master:gh-pages