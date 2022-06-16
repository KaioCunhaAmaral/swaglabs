const { I } = inject();

module.exports = {
    fields:{
        price: '.inventory_item_price'
    },
    
    checkProductPrices(){
        I.seeNumberOfElements(this.fields.price, 6)
    },
}