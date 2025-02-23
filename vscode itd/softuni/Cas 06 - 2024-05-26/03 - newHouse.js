function calculate(flowersType, flowersCount, budget) {
    let total = 0;

    switch (flowersType) {
        case "Roses":
            total = 5 * flowersCount;
            if (flowersCount > 80) {
                total = total * 0.9;
            }
            break;
        case "Dahlias":
            total = 3.8 * flowersCount;
            if (flowersCount > 90) {
                total = total * 0.85;
            }
            break;
        case "Tulips":
            total = 2.8 * flowersCount;
            if (flowersCount > 80) {
                total = total * 0.85;
            }
            break;
        case "Narcissus":
            total = 3 * flowersCount;
            if (flowersCount < 120) {
                total = total * 1.15;
            }
            break;
        case "Gladiolus":
            total = 2.5 * flowersCount;
            if (flowersCount < 80) {
                total = total * 1.2;
            }
            break;
    }
    
    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${diff.toFixed(2)} USD left.`)
    }
    else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} USD more.`)
    }
}

calculate("Roses", 55, 250);