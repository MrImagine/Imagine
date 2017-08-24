Ext.define('MyApp.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'gh-grid',
    requires:['MyApp.store.Companies'],
    store: {
        type: 'companies'
    },
    columnLines: true,
    height: 350,
    title: 'Сгруппированная табица',
    viewConfig: {
        stripeRows: true
    },

    initComponent: function () {
        //this.width = 900;
        this.columns = [{
                text     : 'Компания',
                flex     : 1,
                sortable : false,
                dataIndex: 'company'
            }, {
                text: 'Базовые цены',
                columns: [{
                    text     : 'Цена',
                    width    : 200,
                    sortable : true,
                    renderer : Ext.util.Format.usMoney,
                    dataIndex: 'price'
                }, {
                    text     : 'Изменение цен',
                    width    : 200,
                    sortable : true,
                    renderer :  function(val) {
                        if (val > 0) {
                            return '<span style="color:green;">' + val + '</span>';
                        } else if (val < 0) {
                            return '<span style="color:red;">' + val + '</span>';
                        }
                        return val;
                    },
                    dataIndex: 'change'
                }, {
                    text     : '% Изменение цен',
                    width    : 200,
                    sortable : true,
                    renderer : function(val) {
                        if (val > 0) {
                            return '<span style="color:green;">' + val + '</span>';
                        } else if (val < 0) {
                            return '<span style="color:red;">' + val + '</span>';
                        }
                        return val;
                    },
                    dataIndex: 'pctChange'
                }]
            }, {
                xtype    : 'datecolumn',
                text     : 'Последнее обновление',
                width    : 200,
                sortable : true,
                format   : 'm/d/Y',
                dataIndex: 'lastChange'
            }];

        this.callParent();
    },
    listeners: {
        select: 'onItemSelected'
    }
});
