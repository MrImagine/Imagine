Ext.define('MyApp.view.main.Ggrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainggrid',

    requires: [
        'MyApp.store.User'
    ],
    //reenderTo: document.body,
    store: {
        type: 'user'
    },
    //width: 400,
    //height: 200,
    title: 'Группы пользователей',
    columns: [
        {
            text: 'Название',
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: 'name'
        },
        {
            text: 'Email',
            width: 150,
            dataIndex: 'email',
            hidden: true
        },
        {
            text: 'Телефон',
            flex: 1,
            dataIndex: 'phone'
        }
    ],
    listeners: {
        select: 'onItemSelected'
    }
});