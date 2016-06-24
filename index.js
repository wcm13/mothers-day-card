/****************************************************************
 * This is the number of milliseconds between character writes. *
 * @type {Number}                                               *
 ****************************************************************/

var speed = 120;

/****************************************************************
 * This contains the message body that is written to the letter *
 * @type {String}                                               *
 ****************************************************************/

var message =
"\nHappy Mother's Day!\n" +
"        \n" +
"I'm glad to have you as a mother, and that's a fact\n" +
"No one but you could be ever so dear\n" +
"as you were the one who was there to steer\n" +
"my life upon the proper track.\n" +
"      \n" +
"And so I send you wishes upon this day\n" +
"Through thick and thin\n" +
"I will cherish you, so again\n" +
"I hope the best will come your way.\n" +
"      \n" +
"Though life meanders through it's time\n" +
"as we sip our bitter teas\n" +
"no matter what may come\n" +
"Along with time's relentless drum\n" +
"      \n" +
"You will always hear one bright chime\n" +
"Even in twilight's darkest hues\n" +
"   \n" +
"It may but a whisper be            \n" +
"\"I love you.\"\n     \n";

/*****************************************************
 * This adds the css classes that animate the letter *
 * @return {void} This function returns nothing      *
 *****************************************************/

var doAnimations = function() {
    $('#letter').addClass('moveDown');
    $('#letter-flap').addClass('flip');
    setTimeout(function() {
        $('#letter-content').addClass('moveUp');
        setTimeout(function() {
            writeMessage(speed, 0);
        }, 2000);
    }, 3000);

};

/***************************************************************************************
 * Writes the message body to the letter div                                           *
 * @param  {integer} interval Controls the interval on which each character is printed *
 * @param  {integer} index    This is the position of the message to read from         *
 * @return {void}             Nothing is returned                                      *
 ***************************************************************************************/

var writeMessage = function(interval, index) {
    if(index < message.length) {
        $('#letter-content').append(message.charAt(index));
        setTimeout(function() {
            writeMessage(interval, index + 1);
        }, interval);
    }
};
