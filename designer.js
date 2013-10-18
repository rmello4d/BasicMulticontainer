(function() {
    var BasicMulticontainer = Widget.BasicMulticontainer.inherit(WAF.require('waf-behavior/studio'));

    /*Display name of the widget*/
	BasicMulticontainer.setDescription('BasicMulticontainer');

	// adding attributes
    BasicMulticontainer.addAttributes([{
    	'name':'data-width',
    	'description':'Width',
    	'defaultValue': '250px'
    },{
    	'name':'data-height',
    	'description':'Height',
    	'defaultValue': '250px'
    }]);  
      
    // Defining actions when user tries to resize the widget   
    BasicMulticontainer.on('Resize', function(event) {
    	this.studioCss('height', event.size.height);
    	this.studioCss('width', event.size.width); 
    	this.studioVal('data-width', event.size.width + 'px');
    	this.studioVal('data-height', event.size.height + 'px');	 	
	 	this.studioPanelRefresh();
    });
    

    // Defining actions when widget is displayed/updated in the Studio
	BasicMulticontainer.on('Display', function (attributes) {
		//display width and height
	 	this.studioCss('width', attributes['data-width']); 	
	 	this.studioCss('height', attributes['data-height']); 		  
	 });

})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html