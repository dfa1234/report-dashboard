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

If needed netlify cli can be installed globally: `npm install netlify-cli -g`

For running both client and server:

`netlify dev`

## Running the tests

`npm test`

The tests are also running on every push with github action:  
`./.github/workflows/on-push-master.yml`
