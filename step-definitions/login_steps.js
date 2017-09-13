const Homepage = page.Homepage;

module.exports = function () {

    this.When(/^I click on the "([^"]*)" button$/, menu_item =>
        Homepage._selectMenu(menu_item));

    this.Given(/^I am on the mendeley home page$/, () =>
        Homepage.gotohomepage());
};
