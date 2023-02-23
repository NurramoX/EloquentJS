let ho = require('./utils/higher_order');

function dominantDirection(text) {
    return ho.countBy(text, (char => {
        let script = ho.characterScript(char.codePointAt(0));
        return script ? script.direction : 'none';
    }))
    .reduce((a, b) => a.count < b.count ? b : a, { name: 'none', count: 0 })
    .name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));