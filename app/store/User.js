Ext.define('MyApp.store.User', {
    extend: 'Ext.data.Store',
    
    alias: 'store.user',
    model: 'MyApp.model.User',

    data: [
        { name: 'UniClub', email: 'unic@waite.com', phone: '555-111-1224' },
        { name: 'Партизаны', email: 'p@rtizan.com', phone: '555-222-1234' },
        { name: 'СпящиеВночи', email: 'ne@veru.net', phone: '555-222-1244' },
        { name: 'Симпсоны', email: 'sim@up.cam', phone: '555-222-1254' }
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});