/**
 * Created by TEMIKUFEJI on 13/09/2017.
 */

const Timeout = 3000;
const faker = require('faker');

module.exports = {

    /* list your selectors by name and assicoated CSS selector */



    variables: {
        username: null
    },


    elements: {
        email: by.css('#email'),
        firstname: by.css('#first_name'),
        lastname: by.css('#last_name'),
        password: by.css('#password'),
        continue: by.xpath('//button[@type="submit"]'),
        submitform: by.css('#join-form-submit'),
        subject_area: by.css('select#subject_area option'),
        user_role: by.css('select#user_role option')
    },

    _fillpersonaldetails(){
        return page.joinform.setEmail()
            .then(() =>
                page.joinform.setFirstname())
            .then(() =>
                page.joinform.setLastname())
            .then(() =>
                page.joinform.setPassword())
    },

    getEmail(){
        return driver.wait(until.elementLocated(page.joinform.elements.email), Timeout, `${page.joinform.elements.email} has not been located within the specified timeframe`);
    },
    setEmail(){

        return page.joinform.getEmail().then(email =>
            email.sendKeys(faker.internet.email()));
    },


    getFirstName(){
        return driver.wait(until.elementLocated(page.joinform.elements.firstname), Timeout, `${page.joinform.elements.firstname} has not been located within the specified timeframe`);
    },

    setFirstname(){
        page.joinform.variables.username = faker.name.firstName();
        page.joinform.getFirstName().then(firstname =>
            firstname.sendKeys(page.joinform.variables.username));
    },


    getLastName(){
        return driver.wait(until.elementLocated(page.joinform.elements.lastname), Timeout, `${page.joinform.elements.lastname} has not been located within the specified timeframe`);
    },
    setLastname(){

        page.joinform.getLastName().then(lastname =>
            lastname.sendKeys(faker.name.lastName()));
    },


    getPassword(){
        return driver.wait(until.elementLocated(page.joinform.elements.password), Timeout, `${page.joinform.elements.password} has not been located within the specified timeframe`);
    },


    setPassword(){

        return page.joinform.getPassword().then(password =>
            password.sendKeys(faker.internet.password()));
    },

    click_continue(){
        return driver.wait(until.elementLocated(page.joinform.elements.continue), Timeout, `${page.joinform.elements.continue} has not been located within the specified timeframe`).then(cont =>
            cont.click().then(e => e)).then(() =>
            driver.sleep('500')).then(() =>
            trace('Last step for form completion loaded...'));
    },

    set_fieldofstudy(field_study){
        return driver.wait(until.elementsLocated(page.joinform.elements.subject_area), Timeout, `${page.joinform.elements.subject_area} has not been located within the specified timeframe`).then(e =>
            e.map((item, index) => {
                item.getText().then((options) => {
                    if (options === field_study) {
                        trace(`${options} selected from dropdown list`);
                        // console.log(`${options}:::${index}`);
                        item.click();

                    }
                });
            }));
    },

    set_Acstatus(academic_status){
        return driver.wait(until.elementsLocated(page.joinform.elements.user_role), Timeout, `${page.joinform.elements.user_role} has not been located within the specified timeframe`).then(e =>
            e.map((item, index) => {
                item.getText().then((options) => {
                    if (options === academic_status) {
                        trace(`${options} selected from dropdown list`);
                        // console.log(`${options}:::${index}`);
                        item.click();

                    }
                });
            }));

    },

    submit_joinform(){
        return driver.wait(until.elementLocated(page.joinform.elements.submitform), 1000, `${page.joinform.elements.submitform} has not been located within the specified timeframe`).click()

            .then(e => e)
            .then(() => driver.wait(until.titleIs('All Documents')), 1000, `Unable to wait for page title: All Documents`)
            .then(() => trace('User created successfull and promised fufilled'))
    }


};
