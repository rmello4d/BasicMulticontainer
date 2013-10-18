(function() {
	
var widget = WAF.require('waf-core/widget');

//creating the widget 
var BasicMulticontainer = widget.create('BasicMulticontainer');

//inheriting from multicontainer behavior
BasicMulticontainer.inherit(WAF.require('waf-behavior/layout/multicontainer')); 

//defining actions when init	
BasicMulticontainer.prototype.init = function() {
	
	//Adding 2 pages (and making sure that we do not create more pages unecessarily, so we count them first)
	for(var i = this.countPages(); i < 2 ; i++) {
		this.addPage({});
	}
	 
	//setting the class for the last page 
	this.lastPage().addClass('waf-active-state');
	
	//setting current page 
	this.currentPageIndex(0);
		        
	//when a click happens in the widget, we switch from one Page to the other	        
	$(this.getNode()).on('click', function() {
			this.currentPageIndex(this.currentPageIndex() ? 0 : 1);
	}.bind(this))	
  	        
}


})();

