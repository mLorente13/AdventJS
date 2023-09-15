function sortToys(toys, positions) {
    let sortedToys = [];
    toys.forEach((element, index) => {
      sortedToys[positions[index]] = element;
    });
    sortedToys = sortedToys.filter(element => element !== null);
    return sortedToys
  }