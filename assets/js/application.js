$(document).ready(function() {
    
    var fart = 15;
    var wee = 180;
    var shite = 600;
    
    var timingToiletBreak = false;
    var now;
    var startTime;
    var endTime;
    var difference = 0;
    
    var button = $('button');
    var buttonDefaultText = button.text();
    var result = $('<p id="result" />').insertAfter(button);
    
    var responses = {
        falseAlarm: 'That was quick. Must have been a fart or a false alarm.',
        numberOne: 'Just a wee.',
        numberTwo: 'Get the air freshener, someone had a shite.',
        longGone: 'They have been a while, time to send the cavalry?'
    };
    
    button.on('click', function() {
        timingToiletBreak = !timingToiletBreak;
        
        if (timingToiletBreak) {
            button.text('Timing...');
            result.text('');
            startTime = new Date();
            
            var timeout = setInterval(function() {
                now = new Date();
                difference = ((now.getTime() - startTime.getTime()) / 1000);
                if (difference > shite) {
                    timingToiletBreak = false;
                    startTime = endTime = null;
                    button.text(buttonDefaultText);
                    result.text(responses.longGone);
                    clearInterval(timeout);
                }
            }, 1000);
        }
        else {
            button.html(buttonDefaultText);
            
            clearInterval(timeout);
            endTime = new Date();
            difference = ((endTime.getTime() - startTime.getTime()) / 1000);
            timingToiletBreak = false;
            startTime = endTime = null;
            
            if (difference <= fart) {
                result.text(responses.falseAlarm);
            }
            else if (difference <= wee) {
                result.text(responses.numberOne);
            }
            else if (difference <= shite) {
                result.text(responses.numberTwo);
            }
        }
    });
});