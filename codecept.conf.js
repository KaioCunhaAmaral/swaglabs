exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com',
      show: true,
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './page_objects/home_page.js',
    inventory_page: './page_objects/inventory_page.js',
    cart_page: './page_objects/cart_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/login_steps.js',
      './step_definitions/steps.js',
      './step_definitions/check_products_steps.js',
      './step_definitions/shopping_cart_steps.js',
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'SwagLabs'
}