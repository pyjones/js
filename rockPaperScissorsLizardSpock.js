var choices = [ 'rock', 'paper', 'scissors', 'lizard', 'spock' ];
var beats = {
    'rock': [ 'scissors', 'lizard' ],
    'paper': [ 'rock', 'spock' ],
    'scissors': [ 'paper', 'lizard' ],
    'spock': [ 'rock', 'scissors' ],
    'lizard': [ 'spock', 'paper' ]
};


var checkUserChoice = function() {
    var choice = prompt("Do you choose rock, paper, scissors, lizard or spock?");
    if (choices.indexOf(choice) == -1) {
        choice = checkUserChoice();
    }
    return choice;
};

var makeComputerChoice = function() {
    return choices[Math.floor(Math.random() * choices.length)];
}

var compare = function(a, b) {
    if (a === b) {
        return a + ' and ' + b + ' is a tie';
    } else if (beats[a].indexOf(b) !== -1) {
        return a + ' beats ' + b;
    } else {
        return a + ' does not beat ' + b;
    }
};

var play = function(choice) {
    return compare(choice || checkUserChoice(), makeComputerChoice());
};
