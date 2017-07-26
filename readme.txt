Write Own Javascript Starter Kit


// Stage all files you changed
git add .


//commit ur work Locally
git commit -m "added new stuff"

//Push ur work to Github
git push


Cory House
@housecor


npm install -g nsp
nsp check

npm build

npm install -g localtunnel
lt --port 3000



"scripts": {

      "prestart": "babel-node buildScripts/startMessage.js",
    "start": "node buildScripts/srcServer.js",
    "open:src": "babel-node buildScripts/srcServer.js",
    "lint": "esw webpack.config.* src buildScripts --color",
    "lint:watch": "npm run lint -- --watch",
    "security-check": "nsp check",
    "localtunnel": "lt --port 3000",
    "share": "npm-run-all --parallel open:src localtunnel",
    "test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch",
    "generate-mock-data": "babel-node buildScripts/generateMockData",
    "prestart-mockapi": "npm run generate-mock-data",
    "start-mockapi": "json-server --watch src/api/db.json --port 3001",
    "clean-dist": "rimraf ./dist && mkdir dist",
    "prebuild": "npm-run-all clean-dist test lint",
    "build": "babel-node buildScripts/build.js",
    "postbuild": "babel-node buildScripts/distServer.js",
    "deploy": "surge ./dist"
  },
