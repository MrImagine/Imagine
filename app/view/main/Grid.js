Ext.define('MyApp.view.main.Grid', {
    extend: 'Ext.container.Container',

    

    

    xtype: 'gh-grid',

    requires:['MyApp.store.Companies',
    'Ext.container.Container',
    'Ext.layout.container.VBox',
    'Ext.grid.*',
    'MyApp.model.Companies',
    'MyApp.controller.GridController'
    ],

    controller:'mainGrid',
    //width: 700,
    height: 750,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    columnLines: true,
    height: 450,
    viewConfig: {
        stripeRows: true
    },

    initComponent: function () {
        //this.width = 900;
        Ext.apply(this,{
            items: [{
            flex: 1,
            xtype: 'gridpanel',
            itemId: 'companyGrid',
            store: {
                type: 'companies'
            },
            columns:[{
                header: 'Company',
                sortable: true,
                dataIndex: 'company',
                width:200
            },{
                header: 'Price',
                width: 200,
                sortable: true,
                formatter: 'usMoney',
                dataIndex:'price'
            },{
                header: '%Change',
                width: 200,
                sortable: true,
                dataIndex: 'pctChange'
            },{
                header: 'Last Update',
                width: 200,
                sortable: true,
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                dataIndex: 'lastChange'
            }],
            stripeRows: true,
            title: 'Company grid',
            listeners: {
                select:'onGridSelected'
            }  
            
        },{//grid 2
            title: 'Работники',
            itemId: 'workerGrid',
            height: 210,
            flex: 1,
            margin: '10 0 0 0',
            defaults:{
                labelWidth: 15
            },
            xtype: 'grid',
            itemId: 'workerG',
            store: {
                    type: 'personnel'
            },
            // handler: 'workerGrid',
            listeners: {
                select:'workerGrid'
            },
            columns:[{
                    header: 'Name',
                    sortable: true,
                    dataIndex: 'name',
                    width: 200
                },{
                    header: 'Emal',
                    width: 200,
                    sortable: true,
                    dataIndex:'email'
                },{
                    header: 'Phone',
                    width: 200,
                    sortable: true,
                    dataIndex: 'phone'
                }]
        }]
    });
        this.callParent();
    }
});

