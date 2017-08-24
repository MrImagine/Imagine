
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    //requires:'MyApp.view.main.Checkout', //добавил



    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Неуспел', 'Нужен Ajax', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            
        }
    },

    onClickButton: function () {
        localStorage.removeItem('MyLoggedIn');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    }
});