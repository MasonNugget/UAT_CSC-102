window.addEventListener('DOMContentLoaded', function () {
    var numberBoxes = Array.from(document.getElementsByClassName('number-box'));
    var numbers = [];

    for (var i = 1; i <= numberBoxes.length; i++) {
        numbers.push(i);
    }

    shuffle(numbers); 

    for (var j = 0; j < numberBoxes.length; j++) {
        numberBoxes[j].textContent = numbers[j];
    }
});
// Line 16 function is meant to shuffle around the numbers at random.
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var currentNumber = 1;
// Line 34 function is meant to prompt the user on whether they are choosing the numbers in the correct order or not.
function checkNumber(number) {
    if (number === currentNumber) {
        document.getElementById('result').textContent = "Correct!";
        currentNumber++;
        if (currentNumber > 9) {
            document.getElementById('result').textContent = "Congratulations! You've matched all numbers!";
        }
    } else {
        document.getElementById('result').textContent = "Wrong number! You lose.";
        currentNumber = 1;
    }
}

