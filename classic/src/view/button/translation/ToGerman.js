/**
 * ToGerman Button
 *
 * @class MoMo.client.view.button.translation.ToGerman
 */
Ext.define('MoMo.client.view.button.translation.ToGerman', {
    extend: 'Ext.Button',
    xtype: 'momo-translation-de-button',
    requires: [
        'Ext.app.ViewModel',

        'MoMo.client.view.button.TranslationController',
        'MoMo.client.view.button.TranslationModel'
    ],

    controller: 'button.translation',

    viewModel: 'button.translation',

    /**
     *
     */
    bind: {
        tooltip: '{tooltip}',
        text: '{text}'
    },

    /**
     *
     */
    listeners: {
        click: 'onClick'
    },

    /**
     *
     */
    constructor: function(cfg) {
        var me = this;
        me.callParent([cfg]);

        var viewModel = me.getViewModel();
        viewModel.set('translateTo', 'de');
    }

});
