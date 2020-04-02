Feature('Locators');

Scenario('CSS y XPath', (I) => {
    I.amOnPage('/');
    // select by CSS
    I.seeElement('.controls');
    I.seeElement('#form-login-submit');

    // select by XPath
    I.amOnPage('/administrator')
    I.seeElement('//button[@class="btn btn-primary btn-block btn-large login-button"]');
    
    // Locate withText
    I.click('Log in');
    locate('alert').withText('Empty password not allowed.');
});