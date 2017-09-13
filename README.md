# AutomationTask
Simple Example using selenium cucumber Js

**The frame work used for the task is based on:** 
 selenium cucumber Js: https://www.npmjs.com/package/selenium-cucumber-js 
 cucumber js
 selenium webdriver (driving the web application): https://www.npmjs.com/package/selenium-webdriver
 selenium webdriver api documentation :  https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise.html
 Faker(generate random data fo testing): https://www.npmjs.com/package/faker

Page-objects: been used to make life easier so that there is a central place if tests needs to be changed and elements updated

reports - here you can find html formats after tests run successfully

**To get up and running I have created directory that containing** 

features : where I have captured and described scenarios using cucumber Js (Gherkin language)
shared-Objects: include property files which could be extended in the future they contain some test data used in this excersise such as Url's 
Step-definitions: in this directory i have defined 3 js files
joinform_steps: This would contain all definitions relating to filling the form including first and last part of the form 
library_steps: On successful creation of a user by default the selected menu item is Library and this would also contain definitions specific to the behavior of this page 
login_steps: contains definitions used to create a new user 

Npm install (this should install all the dev depencies required for this project)

In the Package.json a script has been made to make running the test easy . The test could also be run on both chrome and firefox
 
**The following commands would assist :**
 
 Firefox : Npm run bdd -- -t @CreateUser -b firefox
 Chrome :  Npm run bdd -- -t @CreateUser 
 
 