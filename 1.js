function wrapping(gifts) {
    let wrappedGifts = []
    gifts.forEach(element => {
        wrappedGifts.push(`${"*".repeat(element.length + 2)}\n*${element}*\n${"*".repeat(element.length + 2)}`)
    });
    return wrappedGifts;
}