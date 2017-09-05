
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    //requires:'MyApp.view.main.Checkout', //добавил


/*
    onItemSelected: function () {
        if (true){
        Ext.Msg.confirm('Победа', 'Прошка ИП');
        };
    },
*/
    onClickButton: function () {
        localStorage.removeItem('MyLoggedIn');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    }
});