function minMovesToStables(reindeer, stables) {
    let moves = 0;
    stables = stables.sort((a, b) => a - b);
    reindeer = reindeer.sort((a, b) => a - b);
    for (let i = 0; i < reindeer.length; i++) {
        moves += Math.abs(reindeer[i] - stables[i]);
    }
    return moves;
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])); // 3