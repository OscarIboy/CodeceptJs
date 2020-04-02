Feature('Demo');

const { I, loginAs, CategoriesPage, ProductsPage } = inject();

var $categoryName = "Category " + Math.floor(Math.random() * 100);
var $productName = "Product " + Math.floor(Math.random() * 100);
var $productSku = Math.floor(Math.random() * 100);
var $productPrice = Math.floor(Math.random() * 100);

Scenario('Create a new Category and Product', async (I) => {
    loginAs('admin');

    I.say('Create a new category for the test');
    I.amOnPage(CategoriesPage.url);
    I.waitForElement(CategoriesPage.newButton, 30);
    I.click(CategoriesPage.newButton);
    I.waitForElement(CategoriesPage.saveCloseButton, 30);
    I.fillField(CategoriesPage.title, $categoryName);
    I.waitForElement(CategoriesPage.saveCloseButton, 30);
    I.click(CategoriesPage.saveCloseButton);
    I.see(CategoriesPage.saveSuccess);

    I.say('Create a new product for the test');
    I.amOnPage(ProductsPage.url);
    I.waitForElement(ProductsPage.newButton, 30);
    I.click(ProductsPage.newButton);
    I.waitForElement(ProductsPage.saveCloseButton, 30);
    I.fillField('Name', $productName);
    I.fillField(ProductsPage.productSku, $productSku);
    I.fillField('price', $productPrice);
    I.selectOption('#jform_category_id', $categoryName);
    I.waitForElement(ProductsPage.saveCloseButton, 30);
    I.click(ProductsPage.saveCloseButton);
    I.see(ProductsPage.saveSuccess);

    I.say('CleanUp');
    I.deleteAllProducts();
    I.deleteAllCategories();
    I.say('Thanks for watching my demonstration.')
});