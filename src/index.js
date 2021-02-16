
exports.min = function min (array) {
    if(typeof array === 'undefined' || array.length === 0) {return 0}
    else {array.sort((a, b) => b - a);
        array.reverse();
    return array[0];}
}

exports.max = function max (array) {
    if(typeof array === 'undefined' || array.length === 0) {return 0}
    else {array.sort((a, b) => b - a);
    return array[0];}
}

exports.avg = function avg (array) {
    if(typeof array === 'undefined' || array.length === 0) {return 0}
    else {let value = array.reduce((sum, current) => sum + current, 0);
    value = value / array.length;
    return value;}
}
