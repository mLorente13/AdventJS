function getGiftsToRefill(a1, a2, a3) {
  let restock = [];

  a1.forEach((element) => {
    if (!a2.includes(element) && !a3.includes(element) && !restock.includes(element)) {
      restock.push(element);
    }
  });

  a2.forEach((element2) => {
    if (!a1.includes(element2) && !a3.includes(element2) && !restock.includes(element2)) {
      restock.push(element2);
    }
  });

  a3.forEach((element3) => {
    if (!a1.includes(element3) && !a2.includes(element3) && !restock.includes(element3)) {
      restock.push(element3);
    }
  });

  return restock;
}