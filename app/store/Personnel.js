Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { name: 'Пётр', email: "peter33@mail.com", phone: "+799999999" },
        { name: 'Андрей',     email: "andreyK@mail.com",  phone: "+788888888" },
        { name: 'Алесантра',   email: "alesandra@mail.com",    phone: "+777777777" },
        { name: 'Миша',     email: "misha@mail.com",        phone: "+766666666" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
