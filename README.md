# ![Image of Yaktocat](favicon.ico) Heutagogy

Heutagogy
# Detailed Documentation [here](/docs)

# Quickstart: How to build and run Template?
### (a) Prerequisites
* [Node 7.1.0 or later](https://nodejs.org/en/)
* [Npm 3.10.9 or later](https://docs.npmjs.com/)
* Unix based operation system([os x](https://en.wikipedia.org/wiki/OS_X), [ubuntu](https://en.wikipedia.org/wiki/Ubuntu_(operating_system)), [fedora](https://en.wikipedia.org/wiki/Fedora_(operating_system)), etc.)

Run the following commands to verify that you have the correct versions of Node and NPM installed:

    node -v
    npm -v
### (b) Clone the Repository
    git clone git@github.com:heutagogy/heutagogy-frontend.git Heutagogy
### (c) Install dependencies
    cd Heutagogy
    npm install
### (d) Build web-ui code base
    npm run build
after that you can find files in ```Heutagogy/dist``` - this files should be served(this is production build of ui)

-----------------------------------------
### Optional steps
### (e) Run test server with production version of web-ui
    npm run testserver
after running this command ```Heutagogy/dist``` files will be served on nodejs server, on http://localhost:3001

-----------------------------------------
### Questions
# How to run development version of ui?
    Do steps - a,b,c
    npm start
after running this command development version of web-ui will be availible on http://localhost:3002

Note: development version much more slower that production version
# How to run unit tests for ui?
    Do steps - a,b,c
    npm test
# How to get unit tests coverage?
    Do steps - a,b,c
    npm run test:coverage
# How to run e2e tests(Unix based OS)?
    Do steps - a,b,c
    npm run test:e2e
# How to run e2e tests(Windows)?
    Do steps - a,b,c
    npm run selenium - don't stop this process
    open new tab enter next command and tests will start
    npm run test:e2e
### What about internalization?
Heutagogy internalization depend on:
 - [Jed](http://git-scm.com/book/en/v2/Git-Tools-Submodules)
 - [getText](https://gist.github.com/mbillard/1647940)

To get all labels in po file you require to do steps a,b,c and run
    ```npm run createLocaleFiles```
after that you should go to Heutagogy/lang and find their .po files for each language, open each with po editor [po-edit](https://poedit.net/) and add related labels for each language.
After that
    ```npm run convertPOtoJson```
and after that ```npm run build``` your build will be in Heutagogy/dist with multilanguage support

# Quickstart: Requirments for production deploy
 - Production server should return index.html file for each request
 - Production server should serve Heutagogy/dist folder

# Quickstart: How to see something?
 - for ```npm run testserver``` use localhost:3001
 - for ```npm start``` use localhost:3002
 - for production use whatever you want

# Quickstart: How to change api url?
 - Fill the server address on “Login” form: e.g. http://localhost:5000

or, if you don't want to rebuild project

go to file ```Heutagogy/dist/config.js``` and change same constants, after that just refresh page with web-ui

# Quickstart: Troubles
 - you always get 401 error or you see UNKNOWN_ERROR on ui or you can't login with right password - this is CORS problem or server is dead, to solve this you should check that you use last api server and write to server side guy or frondend side guy
 - 404 not found, 400, etc. - maybe some problems with users roles
# Found an issue?
[Go here](http://gitlab.cybervisiontech.com/opensource/Heutagogy/issues)

# Browser support

- Chrome 45 +
- Firefox 42 +
- Safari 9.1 +
- IE 11 +
- IE Edge
- Opera 39 +
- IOS Safari 9.1 +
- Android Browser 4.4 +
- Chrome for Android 45 +
