
# Automation SwagLabs

Automation of the website saucedemo.com, utilizing CodeceptJS and Playwright.

## Setup

To run the tests it is required to have installed Node.js and npm.

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Next, configure the file codecept.conf.js with the browser in which you wish to run the tests(Chromium, Firefox or Webkit).

To install the necessary dependencies, just run the command:

```bash
  npm install
```
## Running tests

To run all tests, run the following command:

```bash
  npm run suite
```

To run one or more specific tests, run the following command with the tag of the desired test

Example :

```bash
  npm run test "@login_success"
```