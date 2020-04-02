Feature('Best Practices');

const { I, loginPage } = inject();

Scenario('Focus on Readability', (I) => {
    // it's fine but...
    I.amOnPage('/');
    I.click({css: 'div.userdata .login-button'});
    I.see('Empty password not allowed.');
    // can be better
    I.amOnPage('/');
    I.click('Log in', 'div.userdata');
    I.see('Empty password not allowed.');
});

Scenario('Use Short Cuts', async (I, loginAs) => {
  // login via autoLogin
  loginAs('admin');
});