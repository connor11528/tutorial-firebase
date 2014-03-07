'use strict';

// where the magic happens
app.controller('MainCtrl', function($scope, Message){
	$scope.messages = Message.getMessages();	
	$scope.message = {
		name: '',
		text: ''
	};
	
	$scope.sendMessage = function(){
		Message.addMessage($scope.message);		// use service to add to firebase
		
		console.log('Message sent: ' + $scope.message)
		// reset fields
		$scope.message.name = '';
		$scope.message.text = '';
	};
});


