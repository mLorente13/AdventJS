function distributeGifts(packOfGifts, reindeers) {
    let giftsWeight = 0,
        reindeersWeight = 0,
        gifts = 0;
    reindeers.forEach(element => {
        reindeersWeight += element.length * 2
    })
    packOfGifts.forEach(element => {
        giftsWeight += element.length
    })
    while (reindeersWeight >= giftsWeight) {
        reindeersWeight -= giftsWeight
        gifts++
    }
    return gifts
  }