Feature('Skip and Todo');

Scenario('test something', (I) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
});

Scenario.todo('Test',  I => {
    /**
     * 1. Click to field
     * 2. Fill field
     *
     * Result:
     * 3. Field contains text
     */
    });

Scenario.skip('Opening a Page', (I) => {
  // When "http://localhost/joomla" is url in config
  I.amOnPage('/'); // -> opens http://localhost/joomla/
  I.amOnPage('/administrator'); // -> opens http://localhost/joomla/administrator
  I.amOnPage('https://google.com'); // -> https://google.com
});