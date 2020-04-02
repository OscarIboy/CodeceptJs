Feature('My First Test');

Scenario('test something', (I) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
});

Scenario('Opening a Page', (I) => {
  // When "http://localhost/joomla" is url in config
  I.amOnPage('/'); // -> opens http://localhost/joomla/
  I.amOnPage('/administrator'); // -> opens http://localhost/joomla/administrator
  I.amOnPage('https://google.com'); // -> https://google.com
});

Scenario('Locating Element', (I) => {
  I.amOnPage('/');
  I.seeElement('.body'); // element with CSS class user
  I.seeElement('//button[contains(., "Log in")]'); // button

  I.seeElement({css: 'div.controls'});
  I.seeElement({xpath: '//div[@class="controls"]'});
});

Scenario('Clicking', (I) => {
  // search for link or button
  I.amOnPage('/');
  I.click('Log in');

  I.click('Aesir E-Commerce', '.site-title'); // search only in .site-title
  I.click('Back to Top', {css: 'footer'}); // search only in footer
});

Scenario('Filling Fields', (I) => {
  // we are using label to match Username field
  I.amOnPage('/administrator');
  I.fillField('Username', 'admin');

  // we can use input name
  I.fillField('passwd', secret('admin'));

  // click 'Log in' button, found by text
  I.click('Log in');
});

Scenario('Assertions', (I) => {
  // Just a visible text on a page
  I.amOnPage('/');
  I.see('Home');

  // text inside .footer element
  I.see('Back to Top', '.footer');

  // opposite
  I.dontSee('Testing');

  I.seeElement('.breadcrumb');
  I.dontSeeElement('.alert');
});

Scenario('Waiting', (I) => {
  I.amOnPage('/administrator');
  I.fillField('Username', 'admin');
  I.fillField('passwd', secret('admin'));
  I.click('Log in');
  I.waitForElement('#plg_quickicon_privacycheck', 30); // secs

  // clicks a button only when it is visible
  I.click('#plg_quickicon_privacycheck');
});