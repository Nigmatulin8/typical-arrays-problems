exports.min = function min(arr) {
    if (!arr || arr.length == 0) {
        return 0;
    }

    let min = Number.POSITIVE_INFINITY;

    arr.forEach(item => {
        if(item < min) {
            min = item;
        }
    });

    return min;
}

exports.max = function max(arr) {
    if (!arr || arr.length == 0) {
        return 0;
    }

    let max = Number.NEGATIVE_INFINITY;

    arr.forEach(item => {
        if(item > max) {
            max = item;
        }
    });

    return max;
}

exports.avg = function avg(arr) {
    if (!arr || arr.length == 0) {
        return 0;
    }

    return arr.reduce((sum, item) => sum + item) / arr.length;
}
