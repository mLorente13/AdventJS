function organizeInventory(inventory) {
    const organizedInventory = {};
    for (const item of inventory) {
        const { category, name, quantity } = item;

        if (!(category in organizedInventory)) {
            organizedInventory[category] = {};
        }

        organizedInventory[category][name] = 
            (organizedInventory[category][name] || 0) + quantity;
    }
    return organizedInventory;
}


const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]
  
console.log(organizeInventory(inventary))
  
  // Resultado esperado:
  // {
  //   toys: {
  //     doll: 5,
  //     car: 5
  //   },
  //   sports: {
  //     ball: 2,
  //     racket: 4
  //   }
  
const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]
  
console.log(organizeInventory(inventary2))
  
  // Resultado esperado:
  // {
  //   education: {
  //     book: 15
  //   },
  //   art: {
  //     paint: 3
  //   }
  // }

const inventary3 = [
    {}
]

console.log(organizeInventory(inventary3))