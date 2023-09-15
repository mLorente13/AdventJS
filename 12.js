function selectSleigh(distance, sleighs) {
    let bestSleigh = null;
    for (let i = 0; i < sleighs.length; i++) {
      if (distance * sleighs[i].consumption <= 20) {
        sleighs[i].name
        bestSleigh = sleighs[i].name
      }
    }
    return bestSleigh
  }