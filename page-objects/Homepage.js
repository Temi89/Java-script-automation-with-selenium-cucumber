/**
 * Created by TEMIKUFEJI on 13/09/2017.
 */

const Timeout = 3000;

module.exports = {

    /* list your selectors by name and assicoated CSS selector */
    elements: {
        searchInput: by.css('input[name="q"]'),
        submitButton: by.css('input[type=submit]')
    },


    gotohomepage(){

        return driver.get(shared.testProperties.urls.homePage).then(pageloaded => pageloaded)
    },

    _selectMenu(item){
        return driver.wait(until.elementLocated(by.linkText(item)), Timeout).then(e =>
            e.click())
    }

};
