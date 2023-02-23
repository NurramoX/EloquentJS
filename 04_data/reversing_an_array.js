function reverseArray(arr) {
    let array = [];
    for (let a of arr) {
        array.unshift(a);
    }
    return array;
}

function reverseArrayInPlace(arr) {
    const length = arr.length;
    for (let i = 0; i < length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[length - i - 1];
        arr[length - i - 1] = temp;
    }
    return;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);