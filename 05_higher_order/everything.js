// TODO: implement with loop
// TODO: implement with some(...)

function everyLoop(arr, test) {
    for (let i = 0; i < arr.length; i++) {
        if (!test(arr[i])) return false;
    }
    return true;
}

function everySome(arr, test) {
    return !arr.some((a) => !test(a));
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));