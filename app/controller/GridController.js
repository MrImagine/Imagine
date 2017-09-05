Ext.define('MyApp.controller.GridController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainGrid',

    onGridSelected: function () {
        if (true){
        Ext.Msg.confirm('Победа', 'Прошка ИП');
        };
    },
    workerGrid: function () {
        if (true){
        Ext.Msg.confirm('Победаdadadadadad', 'Прошка ИП');
        };
    }
    
});