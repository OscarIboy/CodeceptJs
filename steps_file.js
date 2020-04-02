const { I, loginPage, CategoriesPage, ProductsPage } = inject();
// in this file you can append custom step methods to 'I' object
module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login_administrator: function(user, password) {
      this.fillField(loginPage.fields.username, user);
      this.fillField(loginPage.fields.password, password);
      this.click('Log in');
    },

    login_frontend: function(user, password) {
      this.fillField('username', user);
      this.fillField('password', password);
      this.click('Log in');
    },

    deleteAllProducts: function() {
      this.amOnPage(ProductsPage.url);
      this.checkOption("//input[@name='checkall-toggle']");
      this.waitForElement(ProductsPage.deleteButton, 30);
      this.click(ProductsPage.deleteButton);
      this.see('There is nothing to display');
    },

    deleteAllCategories: function() {
      this.amOnPage(CategoriesPage.url);
      this.checkOption("//input[@name='checkall-toggle']");
      this.waitForElement(CategoriesPage.deleteButton, 30);
      this.click(CategoriesPage.deleteButton);
      this.see('There is nothing to display');
    }
  });
}