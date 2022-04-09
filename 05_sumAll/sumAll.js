const sumAll = function() {
    let args = [...arguments];
    for (const arg of args){
        if (typeof(arg) === `number` && arg < 0){
            return `ERROR`;
        }
        else if (typeof(arg) !== `number`){
            return `ERROR`;
        }
        else {
            continue;
        }
    };
    let total = 0;
    for (let i = Math.min(...arguments); i <= Math.max(...arguments); i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
