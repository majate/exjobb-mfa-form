# Exjobb MFA - Form micro frontend
This is the "Form" micro frontend for a [single-spa](https://single-spa.js.org/) micro frontend application developed for a degree project at KTH.

Each micro frontends used by this application has its own repo (this repo only contains one of the micro frontends). If you want to run the entire application, you need to install/build/run all of the micro frontends as well as the root configuration.

The code for the other parts can be found here:
- [The root configuration](https://github.com/majate/exjobb-mfa-root)
- [The header micro frontend](https://github.com/majate/exjobb-mfa-header)

## Installation
1. Ensure that you have [Node](https://nodejs.org/en/) and npm installed on your system.
    - The project was developed with the following versions, so try to use similar:
        - `Node v16.15.1`
        - `npm 8.12.1`
2. Clone this repo.
3. Go into the repo and execute:
```
npm install
```

## Run in development mode
```
npm start
```
Hosts this micro frontend in development mode at [http://localhost:9001](http://localhost:9001) with hot reload if you edit the code.

To see the component, you must start the root configuration and open it in a browser.

## Build
```
npm run build
```
Builds the project and places the output in `dist/`.

## Run in production mode
See the [instructions](https://github.com/majate/exjobb-mfa-root) for the root configuration.
