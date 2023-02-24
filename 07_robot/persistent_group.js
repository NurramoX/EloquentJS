class PGroup {
    
    constructor(map) {
        this.set = map;
    }

    

    add(item) {
        const group = this.clone();
        group.set(item, true);
        return new PGroup(group);
    }

    delete(item) {
        const group = this.clone();
        group.delete(item);
        return new PGroup(group);
    }

    has(item) {
        return this.set.has(item);
    }

    clone() {
        const group = new Map();
        for(let key of this.set.keys()) {
            group.set(key, true);
        };
        return group;
    }

}

PGroup.empty = new PGroup(new Map());

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false