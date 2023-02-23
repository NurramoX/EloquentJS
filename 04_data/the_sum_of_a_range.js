function range(start, end, step=1) {
    let arr = [];
    
    function checkEnd(i) {
        if (step > 0) {
            return i <= end;
        };
        return i >= end;
    }

    for (let i = start; checkEnd(i); i += step) {
        arr.push(i);
    }

    return arr;
}

function sum(arr) {
    let sum = 0;
    for (let a of arr) {
        sum += a;
    }
    return sum;
}

console.log(range(1, 10));
console.log(range(5 , 2, -1))
console.log(sum(range(1, 10)));