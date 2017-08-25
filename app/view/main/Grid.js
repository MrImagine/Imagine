Ext.define('MyApp.view.main.Grid', {
    extend: 'Ext.container.Container',

    xtype: 'gh-grid',

    requires:['MyApp.store.Companies',
    'Ext.container.Container',
    'Ext.layout.container.VBox',
    'Ext.grid.*',
    'MyApp.model.Companies'
    ],
    //width: 700,
    height: 450,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    columnLines: true,
    height: 350,
    title: 'Сгруппированная табица',
    viewConfig: {
        stripeRows: true
    },

    initComponent: function () {
        //this.width = 900;
        Ext.apply(this,{
            items: [{
            flex: 1,
            xtype: 'gridpanel',
            store: {
                type: 'companies'
            },
            columns:[{
                header: 'Company',
                sortable: true,
                dataIndex: 'company',
                flex: 1
            },{
                header: 'Price',
                width: 75,
                sortable: true,
                formatter: 'usMoney',
                dataIndex:'price'
            },{
                header: '%Change',
                width: 100,
                sortable: true,
                dataIndex: 'pctChange'
            },{
                header: 'Last Update',
                width: 115,
                sortable: true,
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                dataIndex: 'lastChange'
            }],
            stripeRows: true,
            title: 'Company grid'
        },{
            frame: true,
            height: 110,
            margin: '10 0 0 0',
            defaults:{
                labelWidth: 150
            },
            items:[{
                xtype: 'textfield',
                fieldLabel: 'Info1',
            },{
                xtype: 'datefield',
                fieldLabel: 'Info2',
                value: new Date()
            }]
        }]
    });
        this.callParent();
    }
});


            /*
        }]
        this.columns = [{
        xtype: 'rownumberer',
        width: 40,
        sortable: false,
        
    }, {
        text: 'Companies (Filter)',
        sortable: true,
        dataIndex: 'company',
        groupable: false,
        width: 200,
        
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
    },{
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
                    }

            }];

        this.callParent();
    },
    listeners: {
        select: 'onItemSelected'
    }
});
*/