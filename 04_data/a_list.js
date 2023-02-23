function arrayToList(arr) {
    let list = null;
    for (let i = arr.length-1; i >= 0; i--) {
        list = prepend(arr[i], list);
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node !== null; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    }
}

function nth(list, index) {
    if (index == 0) {
        return list.value;
    }
    return nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));

