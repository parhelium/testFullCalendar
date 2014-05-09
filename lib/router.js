Router.map(function(){
  this.route('home', {
    path: '/',
  	template: 'packLayout',
  	waitOn: function() {
  		return Meteor.subscribe('allReqs');
  	}
  });
});


Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});

Router.onBeforeAction(function() { Errors.clearSeen(); });