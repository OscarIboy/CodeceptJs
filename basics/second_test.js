Feature('My Second Test');

Scenario('test something', (I) => {
    I.amOnPage('https://github.com');
    I.retry(5).see('GitHub');
});