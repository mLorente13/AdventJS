function calculatePrice(ornaments) {
    let values = new Map([
        ["*", 1],
        ["o", 5],
        ["^", 10],
        ["#", 50],
        ["@", 100],
    ]);
    let price = 0;
    for (let i = 0; i < ornaments.length; i++) {
        if (values.get(ornaments[i]) < values.get(ornaments[i + 1])) {
            price -= values.get(ornaments[i]);
        } else {
            price += values.get(ornaments[i]);
        }
    }
    return price || undefined
}

console.log(calculatePrice('***'));
console.log(calculatePrice('*o'));
console.log(calculatePrice('*o@'));