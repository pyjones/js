var choices = [ 'rock', 'paper', 'scissors', 'lizard', 'spock' ];
var beats = {
    'rock': [ 'scissors', 'lizard' ],
    'paper': [ 'rock', 'spock' ],
    'scissors': [ 'paper', 'lizard' ],
    'spock': [ 'rock', 'scissors' ],
    'lizard': [ 'spock', 'paper' ]
};

var makeComputerChoice = function() {
    return choices[Math.floor(Math.random() * choices.length)];
}

var compare = function(a, b) {
    if (! a || choices.indexOf(a) === -1) return 'Provide one of: ' + choices.join(', ');
    if (a === b) {
        return a + ' and ' + b + ' is a tie';
    } else if (beats[a].indexOf(b) !== -1) {
        return a + ' beats ' + b;
    } else {
        return a + ' does not beats ' + b;
    }
};

var play = function(choice) {
    return compare(choice, makeComputerChoice());
};

var result = play(process.argv.slice(2)[0]);
console.log(result);