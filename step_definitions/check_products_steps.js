const { I } = inject();
const {home_page} = inject();
const {inventory_page} = inject();
  
  When('I scroll through the inventory page', inventory_page.scrollPage);
  
  Then('I should see all available products', inventory_page.checkAvailableItems);