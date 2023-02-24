const Group = require('./groups').Group; 

Object.defineProperty(Group.prototype, "elements", {
    get: function elements() {
        return this.set.keys();
    }
});

class GroupIterator {

    constructor(group) {
        this.keys = group.elements
    }

    next() {
        return this.keys.next();
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c