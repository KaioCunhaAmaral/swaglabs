const { I } = inject();
const {home_page} = inject();
const {inventory_page} = inject();
  
Given('that I fill the field Username with {string}', home_page.insertUsername);
  
Given('that I fill the field Password with {string}', home_page.insertPassword);
  
When('I click in LOGIN', home_page.clickLogin);
  
Then('I should see the Products on the page', inventory_page.checkLoginSuccess);

Given('that I perform login with the user {string} and password {string}', (Username, Password) => {
  home_page.insertUsername(Username)
  home_page.insertPassword(Password)
  home_page.clickLogin()
  inventory_page.checkLoginSuccess()
});
