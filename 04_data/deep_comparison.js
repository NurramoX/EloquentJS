function deepEqual(a, b) {
    if (a === null && b === null) {
        return true;
    }
    if (typeof a == 'object' && typeof b == 'object') {
        for (var key in a) {
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
