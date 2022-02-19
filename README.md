# Report dashboard

Demo react application using Netlify functions

Live demo deployed here: https://report-dashboard.netlify.app/

## Libraries used

Frontend:

-   Project bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
-   _React_ version 17 with typescript
-   _React google chart_, for rendering a line chart
-   _React Material UI_ + lab, for some basic UI component: Box, Typography, Button, Loader, Alert, and Datepicker
-   _jest-fetch-mock_ for mocking the native javascript fetch api. Unit test are using jest.

Backend:

-   _Netlify_ stateless functions with typescript.  
    Currently there is 2 functions:

    -   `./netlify/functions/dashboard-data-api/dashboard-data-api.ts` is the simple GET API, called at evey launch and when we click on "Filter"
    -   `./netlify/functions/populate-data-api/populate-data-api.ts` erasing and re-generating a new set of random datas, called once and can be called one again by clicking "Generate new datas" in the bottom right corner of the footer

-   _MongoDB_ free tier cluster for storing the set of datas.
-   For playing with dates I used _date-fns_ which is more lightweight and functionnal than momentjs (it returns a Date clone object everytime)

## Running the project

This project have been created with node LTS v16.14.0 and npm 8.3.1

With these pre-requish, here are the steps:

1. netlify cli need to be installed globally `npm install netlify-cli -g`
2. Unzip or clone the project, and run into the project folder `npm i`
3. A `.env` file need to be added manually at the root of the repository, with this content: `MONGO_DB_PASSWORD=<your mongo db password>`
4. And now for running both client and server the command is: `netlify dev`

The server should now be available at http://localhost:8888

## Running the tests

The units test can be run with

`npm test`

The tests are also running on every push with github action:  
`./.github/workflows/on-push-master.yml`
