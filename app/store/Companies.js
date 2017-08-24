Ext.define('MyApp.store.Companies', {
    extend: 'Ext.data.Store',

    alias: 'store.companies',

    model: 'MyApp.model.Companies',

    data: { items: [
        { company: 'Прошка ИП', price: '71.72', change:  '0.02', pctChange:'0.03', lastChange: '09/01/2017'},
        { company: 'Гллаша Ltd', price: '29.01', change: '0.42', pctChange:'1.47', lastChange: '09/01/2017'},
        { company: 'НеудачаГроуп', price: '31.61', change: '-0.48', pctChange:'-1.54', lastChange: '06/02/2017'}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});