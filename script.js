
// ======================================
// VIBEWAVE - NESTED FUNCTIONS
// ======================================

// EXAMPLE 1: BASIC NESTED FUNCTION

function runNestedDemo() {

    let outerMessage = "Welcome to VibeWave!";

    function innerFunction() {
        let innerMessage = "Nested functions are working perfectly!";
        return outerMessage + " " + innerMessage;
    }

    let result = innerFunction();

    document.getElementById("result").innerHTML =
        "🎧 " + result;
}


// ======================================
// EXAMPLE 2: NESTED FUNCTION WITH CALCULATION
// ======================================

function calculateMusicScore() {

    let musicPoints = 50;

    function addBonus() {
        let bonus = 25;
        return musicPoints + bonus;
    }

    return addBonus();
}


// ======================================
// EXAMPLE 3: NESTED FUNCTION WITH PARAMETERS
// ======================================

function greetListener(name) {

    function createMessage() {
        return "Hello, " + name + "! Enjoy your music journey! 🎵";
    }

    return createMessage();
}


// ======================================
// DISPLAY ALL EXAMPLES
// ======================================

function showAllExamples() {

    let score = calculateMusicScore();
    let greeting = greetListener("Music Lover");

    document.getElementById("result").innerHTML =
        "🎧 Basic Nested Function: Working Successfully!<br><br>" +
        "🎵 Music Score Calculation: " + score + "<br><br>" +
        "💜 Greeting Example: " + greeting;
}


// ======================================
// CONSOLE OUTPUT
// ======================================

console.log("VibeWave Nested Functions Project");
console.log("Music Score:", calculateMusicScore());
console.log(greetListener("Music Lover"));
