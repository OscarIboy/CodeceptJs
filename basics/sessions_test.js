Feature('Multiple Sessions');

Scenario('test login', (I) => {
    I.amOnPage('/');
    I.fillField('username', 'admin');
    I.fillField('password', secret('admin'));
    I.click('Log in');
    I.see('Hi Super User,');

    session('oscar', () => {
        // another session started in a new window
        I.amOnPage('/');
        I.fillField('username', 'oscar');
        I.fillField('password', secret('oscar'));
        I.click('Log in');
        I.see('Hi oscar,');
    });

    // switching back to default session
    I.click('Log out');
    I.see('Log in');

    // switching to the another session
    session('oscar', () => {
        // Log out
        I.click('Log out');
        I.see('Log in');
    });
});