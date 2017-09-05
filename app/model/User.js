Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    fields: ['name', 'email', 'phone'],

    proxy:{
        type: 'rest',
        url: 'app/model/UserData.json',
        reader: {
            type: 'json'
        }
    }
});