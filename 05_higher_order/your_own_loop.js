function loop(val, test, update, body) {
    for (; test(val); val = update(val)) {
        body(val);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);