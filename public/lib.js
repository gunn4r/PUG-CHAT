$( document ).ready(function() {

   


    $( "button" ).click(function() {
      $( "#getstarted" ).fadeOut( "slow", function() {
              $( "#messages" ).fadeIn( "slow", function() {
                $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
        });
      });
    });


});

