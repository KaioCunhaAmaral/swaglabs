const { I } = inject();

module.exports = {
    buttons:{
        addToCart: '.btn_inventory',
        shoppingCart: '#shopping_cart_container',
    },

    text:{
        itemDescription: '.inventory_item_description',
    },


    checkLoginSuccess(){
        I.waitForText('PRODUCTS', 20)
        I.see('PRODUCTS')
    },

    scrollPage(){
        I.scrollPageToBottom()
    },

    checkAvailableItems(){
        I.seeNumberOfElements(this.text.itemDescription, 6)
        I.wait(5)
    },

    addAllItemsToCart(){
        I.click(locate(this.buttons.addToCart).at(1))
        I.click(locate(this.buttons.addToCart).at(2))
        I.click(locate(this.buttons.addToCart).at(3))
        I.click(locate(this.buttons.addToCart).at(4))
        I.click(locate(this.buttons.addToCart).at(5))
        I.click(locate(this.buttons.addToCart).at(6))
    },

    clickShoppingCart(){
        I.click(this.buttons.shoppingCart)
    }
}