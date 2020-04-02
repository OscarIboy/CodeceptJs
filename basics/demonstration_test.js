Feature('CodeceptJS Demonstration');

Before((I) => { // or Background
    I.amOnPage('/');
});

Scenario('test some forms', (I) => {
    I.click('Log in');
    I.see('Empty password not allowed.');
    I.dontSeeInCurrentUrl('/administrator');
});

Scenario('test title', (I) => {
    I.seeInTitle('Home');
});