function decode(message) {
    const open = message.indexOf('(')
    const close = message.indexOf(')')
    if (open === -1) {
        return message
    }
    const before = message.slice(0, open)
    const inside = message.slice(open + 1, close)
    const after = message.slice(close + 1)
    const decoded = before + inside.split('').reverse().join('') + after
    return decode(decoded)
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus