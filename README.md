# Project Title

Search githHub Repos, its a web app to serch into my gitHub repos by name

![GIF](/MVSTTask.CarlosCorti.gif)

# Features

- Node server rendering React Redux application, view engine ejs
- Node with ES6 features (uses import statements)
- Separeted config for build react and node with babel
- Webpack builds vendor an main css and js hashed files to prevent browser future updates chaching
- Test suite with Jest + enzime + redux-mock-store + react-test-renderer, script for test coverage
- Client side with React + Redux with Redux Thunk, components with prop-types
- eslint custom config
- Uses pm2 for production start, forks one app instance for each core avaiable in deployment server
- Builds webpack and build version directly on depployment server
- Documented following JSdoc standard

## Getting Started


### Installing

To download the project use git clone

```
Git clone https://github.com/carloscorti/reposearcher.git
```

On projects root folder, install dependencies

```
npm i
```


### Development

First
```
npm run webpack
```

Starts webpack watching file for development


Then
```
npm run dev
```

Runs the app in the development mode. Open http://localhost:8080 to view it in the browser. The page will reload if you make edits.


### Production (follow the order below)

First
```
npm run build-webpack
```

Builds the app for production in ./public/build folder. The build is minified and the filenames include the hashes to prevent bowser cache in future updates.


Secondly 
```
npm run build-node
```

Builds the node server with ES6 features. It builds server aplication on ./build


Finally
```
npm run build-node
``` 

Starts app for production (uses pm2 for core load optimization)


## Running the tests

Testing framework Jest, to run test suit on watch mode for develompment use

```
npm test
```

For test coverage

```
npm run verify-tests
```


## Deployment

Production version deployed at https://mvsttask-carloscorti.herokuapp.com/


## Built With

- Dependency Manager: npm
- Server side: Node + Express
- Bundler: webpack + babel
- Client side: React + Redux with Redux Thunk


## Author

- **Carlos Corti**
