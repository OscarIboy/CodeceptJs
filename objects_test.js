Feature('Objects');
// globally inject objects by name
const { I } = inject();

// inject objects for a test by name
Scenario('sample test', async (I, loginAs) => {
    I.amOnPage('/administrator');
    loginAs('eduardo');
});