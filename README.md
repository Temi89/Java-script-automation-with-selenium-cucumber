# AutomationTask
Simple Example using selenium cucumber Js

[![Shippable branch](https://api.shippable.com/projects/59b969cc8a029806001de73c/badge?branch=master)](https://app.shippable.com/github/Temi89/AutomationTask)


## Tools Refrence
 selenium cucumber Js: https://www.npmjs.com/package/selenium-cucumber-js 
 cucumber js
 selenium webdriver (driving the web application): https://www.npmjs.com/package/selenium-webdriver
 selenium webdriver api documentation :  https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise.html
 Faker(generate random data fo testing): https://www.npmjs.com/package/faker

 Page-objects: been used to make life easier so that there is a central place if tests needs to be changed and elements updated

 ### Reports
 
 HTML and JSON reports are automatically generated and stored in the default `./reports` folder. This location can be changed by providing a new path using the `-r` command line switch:
 
 ![Cucumber HTML report](img/cucumber-html-report.png)
 

### Directory structure

You can use the framework without any command line arguments if your application uses the following folder structure:

```bash
.
├── features
│   └── google-search.feature
├── step-definitions
│   └── google-search-steps.js
├── page-objects
│   └── google-search.js
└── shared-objects
│   ├── test-data.js
│   └── stuff.json
└── reports
    ├── cucumber-report.json
    └── cucumber-report.html
```

## Installation

```bash
npm install 
```

## Usage

```bash
 Firefox : Npm run bdd -- -t @CreateUser -b firefox
 Chrome :  Npm run bdd -- -t @CreateUser 
 ```

 

 
 