function manufacture(gifts, materials) {
    let giftsList = [],
        containsMaterials = false;

    for (let i = 0; i < gifts.length; i++) {
        let giftChars = gifts[i].split("");
        for (let x = 0; x < giftChars.length; x++) {
            if (materials.includes(giftChars[x])) {
                containsMaterials = true;
            } else {
                containsMaterials = false;
                break;
            }
        }
        if (containsMaterials) {
            giftsList.push(gifts[i]);
        }
    }
    return giftsList;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

manufacture(gifts, materials); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ["juego", "puzzle"];
materials = "jlepuz";

manufacture(gifts, materials); // ["puzzle"]

gifts = ["libro", "ps5"];
materials = "psli";

manufacture(gifts, materials); // []
