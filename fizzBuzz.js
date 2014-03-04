var fizzBuzz = function (num) {
    var res = '';
    if (num % 3 === 0) {
        res += 'Fizz';
    }
    if (num % 5 === 0) {
        res += 'Buzz';
    }
    return res || num;
};

for(var i = 1; i <= 20; i++) {
    console.log(fizzBuzz(i));
}