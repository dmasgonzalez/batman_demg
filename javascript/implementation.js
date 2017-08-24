/*
    @function moveBgLeft
    @param {number} x
    @returns {number}
    @desc return the input param minus 10 (or some other value that you like)
*/
function moveBgLeft(x) {
    return x - 15;
}

/*
    @function keyUpHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to false
*/
function keyUpHandler( keyCode = 0, 
    upArrowPressed = false, 
    rightArrowPressed = false, 
    downArrowPressed = false, 
    leftArrowPressed = false, 
    shiftKeyPressed = false ) {
    // you need a bunch of if statements here...
    if (keyCode === 38) {
        upArrowPressed = false; 
    }
    else if (keyCode === 39) {
        rightArrowPressed = false;
    }
    else if (keyCode === 40) {
        downArrowPressed = false;
    }
    else if (keyCode === 37) {
        leftArrowPressed = false;
    }
    else if (keyCode === 16) {
        shiftKeyPressed = false;
    }
    
    return {
        upArrowPressed,
        rightArrowPressed,
        downArrowPressed,
        leftArrowPressed,
        shiftKeyPressed
    };
}

/*
    @function keyDownHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to true 
*/
function keyDownHandler( keyCode = 0, 
    upArrowPressed = false, 
    rightArrowPressed = false, 
    downArrowPressed = false, 
    leftArrowPressed = false, 
    shiftKeyPressed = false ) {
    // you need a bunch of if statements here...
    if (keyCode === 38) {
        upArrowPressed = true; 
    }
    else if (keyCode === 39) {
        rightArrowPressed = true;
    }
    else if (keyCode === 40) {
        downArrowPressed = true;
    }
    else if (keyCode === 37) {
        leftArrowPressed = true;
    }
    else if (keyCode === 16) {
        shiftKeyPressed = true;
    }

    return {
        upArrowPressed,
        rightArrowPressed,
        downArrowPressed,
        leftArrowPressed,
        shiftKeyPressed
    };
}

/*
    @function shouldJumpNow
    @param {number} y
    @returns {number}
    @desc subtracts a value from y to simulate jump
*/
function shouldJumpNow(y) {
    return y - 100;
}
