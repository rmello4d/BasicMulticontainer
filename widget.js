WAF.define('BasicMulticontainer', function() {
    var Widget = WAF.require('waf-core/widget');
    var BasicMulticontainer = Widget.create('BasicMulticontainer');

    BasicMulticontainer.inherit(WAF.require('waf-behavior/layout/multicontainer')); 

    BasicMulticontainer.defaultContainer(Widget.BasicContainer);

    BasicMulticontainer.prototype.init = function() {
        //Adding 2 pages (and making sure that we do not create more pages unecessarily, so we count them first)
        for(var i = this.countPages(); i < 2 ; i++) {
            this.addPage({});
        }
        this.currentPageIndex(0);

        $(this.getNode()).on('click', function() {
            this.currentPageIndex(this.currentPageIndex() ? 0 : 1);
        }.bind(this));
    };
    
    return BasicMulticontainer;

});
