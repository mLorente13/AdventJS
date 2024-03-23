function maxDistance(movements) {
    let advanceDistance = 0;
    let backDistance = 0;
    let distance = 0;
    for (let i = 0; i < movements.length; i++) {
        let char = movements.charAt(i)
        if (char === '>' || char === '*') {
            advanceDistance++;
        } else if (char === '<') {
            backDistance++;
        } else {
            distance++;
        }
    }
    return Math.max(advanceDistance, backDistance) + distance;
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5