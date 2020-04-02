Feature('CodeceptJS demo');

Scenario('Within and Comments', (I) => {
    I.amOnPage('/administrator');
    within('.login', () => {
        I.fillField('Username', 'TestUser');
        I.say('Enter the Password', 'red');
        I.fillField('passwd', secret('Test123'));
        I.click('Log in');
    });
    I.say('Testing');
    I.see('Username and password do not match or you do not have an account yet.');
});