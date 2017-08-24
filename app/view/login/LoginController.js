Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        localStorage.setItem("MyLoggedIn", true);

        this.getView().destroy();

        // viewport здесь
        Ext.create({
            xtype: 'app-main'
        });

    }

});

