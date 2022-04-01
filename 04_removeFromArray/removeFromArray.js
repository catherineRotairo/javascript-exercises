const removeFromArray = function (anArray, ...args) {
    for (const arg of args) {
        const index = anArray.indexOf(arg);
        if (index === -1 && arg !== -1) {
            continue;
        }
        anArray.splice(index, 1);
    };
    return anArray;
};


// Do not edit below this line
module.exports = removeFromArray;
