class Group {
    
    constructor() {
        this.set = new Map();
    }

    static from(arr) {
        let group = new Group();
        for (let a of arr) {
            group.add(a);
        }
        return group;
    }

    add(item) {
        this.set.set(item, true);
    }

    delete(item) {
        this.set.delete(item);
    }

    has(item) {
        return this.set.has(item);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

module.exports = {
    Group
};