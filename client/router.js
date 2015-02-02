Router.map( function () {

	this.route('/', {
	  path: '/',
	  layoutTemplate: 'mainLayout',
	  yieldTemplates: {
	    'topTemplate': {to: 'top'},
	    'leftTemplate': {to: 'left'},
	    'contentTemplate': {to: 'content'},
	    'footerTemplate': {to: 'footer'}
	  }
	});


});