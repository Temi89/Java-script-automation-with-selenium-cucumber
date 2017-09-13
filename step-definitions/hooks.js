/* eslint new-cap:0 */
module.exports = function () {

    this.Before(() => driver.sleep(750).then(() =>
        trace("Wedbriver initialised and ready ..")));
};
