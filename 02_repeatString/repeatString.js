const repeatString = function(message, repeats) {
    let returnMessage  = '';
    if (repeats < 0) {return 'ERROR'};
    for (let i = 0; i < repeats; i++){

        returnMessage += message;
    }
    return returnMessage
};

// Do not edit below this line
module.exports = repeatString;
