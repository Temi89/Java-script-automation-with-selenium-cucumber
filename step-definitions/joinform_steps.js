module.exports = function () {

    this.When(/^I enter my (.*) and my (.*)$/, (fieldstudy, academic_stat) => page.joinform.set_fieldofstudy(fieldstudy)
        .then(() =>
            page.joinform.set_Acstatus(academic_stat)));

    this.When(/^I submit the join form$/, () =>
        page.joinform.submit_joinform());

    this.When(/^I enter my personal details$/, () =>
        page.joinform._fillpersonaldetails());

    this.When(/^I click on continue$/, () => page.joinform.click_continue());

    this.Then(/^I can see a join form with the following fields$/, function () {
    });
};
