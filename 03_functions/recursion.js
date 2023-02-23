function isEven(a) {
    if (a < 0) return isEven(-a);
    if (a == 0) return true;
    if (a == 1) return false;
    return isEven(a - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));