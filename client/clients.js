if(Meteor.isClient) {
	Template.body.rendered=function() {
		// showing multiple
		$('.ui.sidebar')
		  .sidebar('setting', 'transition', 'scale down')
		  .sidebar('attach events', '.menu .item')		  
		;

		Session.set('homeSession', 'home');
		Session.set('searchSession', '');
	}





	Template.leftTemplate.events({
		'click .homeX': function() {
			Session.set('homeSession', 'home');

			Session.set('searchSession', '');
		},
		'click .searchX': function() {
			Session.set('searchSession', 'home');

			Session.set('homeSession', '');
		}
	});


	Template.contentTemplate.helpers({
		'homeSession': function() {
			return Session.get('homeSession');
		},
		'searchSession': function() {
			return Session.get('searchSession');
		},
	});



	

}