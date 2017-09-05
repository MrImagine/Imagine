//view для таблицы
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Пользователи',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Имя',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Телефон', dataIndex: 'phone', flex: 1 }
    ]
});
