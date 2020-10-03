exports.min = function min(arr) {
    if (!arr || arr.length == 0) {
        return 0;
    }
    return Math.min(...arr);
}


exports.max = function max(arr) {
    if (!arr || arr.length == 0) {
        return 0;
    }
    return Math.max(...arr);
}

exports.avg = function avg(arr) {
    if (!arr || arr.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum / arr.length;
}
