const { I } = inject();
const {inventory_page} = inject();
const {cart_page} = inject();
    
Given('that I add all items to the shopping cart', inventory_page.addAllItemsToCart);
  
When('I click in the shopping cart', inventory_page.clickShoppingCart);
  
Then('the system must display the total cost of the selected products', cart_page.checkProductPrices);