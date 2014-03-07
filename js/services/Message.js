'use strict';

// Message service to get messages form firebase and add messages
app.factory('Message', function(){
	var ref = new Firebase('http://tutorialfirebase.firebaseIO.com/messages');
	
	var Message = {
      getMessages: function() {
        var messages = [];
        ref.on("child_added", function(snapshot) {
          messages.push(snapshot.val());
        });
        return messages;
      },
      addMessage: function(message) {
        ref.push(message);
      }
    }
    
    return Message;
});
