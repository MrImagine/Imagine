Ext.define('MyApp.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'gh-grid',
    requires:['MyApp.store.Companies',

    ],

    plugins: [
        'bufferedrenderer',
        {
            xclass: 'Ext.grid.plugin.RowEditing',
            clicksToMoveEditor: 0,
            autoCancel: false
        }],



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
        xtype: 'rownumberer',
        width: 40,
        sortable: false,
        locked: true
    }, {
        text: 'Companies (Filter)',
        sortable: true,
        dataIndex: 'company',
        groupable: false,
        width: 200,
        locked: true,
        renderer: function(v, cellValues, rec) {
            return rec.get('company');
        },
        editor: {
            xtype: 'textfield'
        },
        items    : {
            xtype: 'textfield',
            flex : 1,
            margin: 2,
            enableKeyEvents: true,
            listeners: {
                keyup: function() {
                    var store = this.up('tablepanel').store;
                    store.clearFilter();
                    if (this.value) {
                        store.filter({
                            property     : 'company',
                            value         : this.value,
                            anyMatch      : true,
                            caseSensitive : false
                        });
                    }
                },
                buffer: 500
            }
        }
    },/*{
                text     : 'Компания',
                flex     : 1,
                sortable : false,
                dataIndex: 'company'
            }, */{
                text: 'Базовые цены',
                columns: [{
                    text     : 'Цена',
                    width    : 200,
                    sortable : true,
                    renderer : Ext.util.Format.usMoney,
                    dataIndex: 'price',
                    flex : 1,
                    editor: {
                        xtype: 'numberfield'
                    },
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
                    dataIndex: 'change',
                    editor: {
                        xtype: 'numberfield'
                    },
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
                    dataIndex: 'pctChange',
                    editor: {
                        xtype: 'numberfield'
                    },
                }]
            }, {
                xtype    : 'datecolumn',
                text     : 'Последнее обновление',
                width    : 200,
                sortable : true,
                format   : 'm/d/Y',
                dataIndex: 'lastChange',
                editor: {
                        xtype: 'datefield'
                    },
            }];

        this.callParent();
    },
    listeners: {
        select: 'onItemSelected'
    }
});
