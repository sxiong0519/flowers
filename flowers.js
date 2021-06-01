const flowers = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: .90
    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const newFlowerId = maxId + 1

    flowerObject.id = newFlowerId
    flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
for (const flower of flowers) {
    if (flower.price >= 1.00) {
        expensiveFlowers.push(flowers)
    }
}

    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */




    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

