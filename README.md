# Evaluate News App Project

## Description

This project is a web app that uses an external MeaningCloud Sentiment Analysis API to perform a check of user entered URL for positivity, subjectivity, irony.

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Prerequisite

 This project should run on a local server. Node and Express should be installed on the local machine. Required packages listed in packages.json.

1. Create API credentials on [MeaningCloud.com](https://www.meaningcloud.com/developer/sentiment-analysis).
2. Insert API KEY into the `.env ` file:
 ```
API_KEY=**************************
```

## Installation

1. Clone the repository:
`git clone [https://github.com/RahafAbosefen/evaluate-news-nlp.git]`
`cd evaluate-news-nlp`

2. Install dependencies:
Ensure Node, Express, Cors, Body parser, Webpack and all required packages are installed.
- `npm install`
3. Build the project:
Set up webpack config files for development and production environments. Download files from this repo and navigate to the project folder. Afterwards, to start the server run these commands in command line:
```
//For development:
npm run build-dev
//For production:
npm run build-prod
//Start the server:
npm run start
```
4. Open your browser and navigate to [http://localhost:8000/] .

## Usage

To use the app, enter a URL in the input field and press the Submit button. Sentiment results will be displayed in the box below. If a URL is invalid, the user will see an error message. The app is fully responsive.

## Project Structure

-starter_project/
  - __test__/
  - node_modules/
  - src/
    - client/
    - server/
  - dist/
  - .babelrc
  - webpack.dev.js
  - webpack.prod.js
  - .env
  - .gitignore
  - package-lock.json
  - package.json
- README.md

## Author

Code is created by  Rahaf Abo Sefen, using starter code by Udacity.
