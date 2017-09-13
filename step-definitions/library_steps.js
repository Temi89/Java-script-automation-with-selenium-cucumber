/**
 * Created by TEMIKUFEJI on 13/09/2017.
 */


module.exports = function () {

    this.Then(/^a profile is created with my personal details from the previous step$/, () =>
        page.Librarypage.getProfilename().then(() =>
            expect(page.joinform.variables.username).to.equal(page.Librarypage.variables.username)));

    this.Then(/^the page title is "([^"]*)"$/, function (title) {

    });
};