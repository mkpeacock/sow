$(document).ready(function() {
            
    var fart = 15;
    var wee = 180;
    var shite = 600;
    
    var checking = false;
    var time = 0;
    $('#sow').click(function(){
        if( checking ) {
            checking = false;
            $('#sow').text("Shite, or wee?");
            window.clearInterval(window);
            if( time <= fart ) {
                $('#well').text('That was quick. Must have been a fart or a false alarm');
            } else if( time <= wee ) {
                $('#well').text('Just a wee.');
            } else if (time <= shite ) {
                $('#well').text('Get the air freshener, someone had a shite.');
            }
        } else {
            $('#well').html('&nbsp;');
            checking = true;
            $('#sow').text("They're back!");
            window.setInterval(function() {
                time = time+1;
                if(time > shite ) {
                    $('#well').text("They have been a while, time to send the cavalry?");
                }
            }, 1000);
        }
    });
});