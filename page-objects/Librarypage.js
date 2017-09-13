/**
 * Created by TEMIKUFEJI on 13/09/2017.
 */

const Timeout = 3000;

module.exports = {

    variables: {
        username: null
    },


    /* list your selectors by name and assicoated CSS selector */
    elements: {
        profilename: by.css('li.profile'),
    },


    getProfilename(){
        return driver.wait(until.elementLocated(page.Librarypage.elements.profilename), Timeout)
            .then(name_element => name_element.getText().then(txt => {
                trace(`profile name recorded as ${txt} from application`);
                return page.Librarypage.variables.username = txt
            }))
    },
};



