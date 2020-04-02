const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);
// set window size for any helper: Puppeteer, WebDriver, TestCafe
setWindowSize(1180, 924);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost/joomla',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/LoginPage.js",
    CategoriesPage: "./pages/CategoriesPage.js",
    ProductsPage: "./pages/ProductsPage.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'loginAs', // use `loginAs` instead of login
      users: {
        admin: {
          login: (I) => {
            I.amOnPage('/');
            I.fillField('username', 'admin');
            I.fillField('password', secret('admin'));
            I.click('Log in');
            I.see('Hi Super User,');
          },
          check: (I) => {
             I.amOnPage('/');
             I.see('Hi Super User,');
          },
        },
        oscar: {
          login: (I) => {
            I.amOnPage('/');
            I.fillField('username', 'oscar');
            I.fillField('password', secret('oscar'));
            I.click('Log in');
          },
          check: (I) => {
            I.amOnPage('/');
            I.see('Hi oscar,');
          },
        },
        eduardo: {
          login: (I) => I.login_administrator('admin', 'admin'),
          check: (I) => {
            I.amOnPage('/');
            I.see('Hi Super User,');
         },
        }
      }
    }
  
  }
}