const { I } = inject();

module.exports = {
fields:{
    userName: '#user-name',
    password:'#password',
},

buttons:{
    login: '#login-button'
},

    insertUsername(Username){
        I.amOnPage('/')
        I.waitForVisible(this.fields.userName, 50)
        I.fillField(this.fields.userName, Username)
      },  
    
    insertPassword(Password){
        I.waitForVisible(this.fields.password, 50)
        I.fillField(this.fields.password, Password)
    },

    clickLogin(){
        I.click(this.buttons.login)
    },
  }