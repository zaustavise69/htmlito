


function solve(budget, season, fisherman) {
    
    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (fisherman <= 6) {
        price = price * 0.9;
    }
    else if (fisherman <=11) {
        price = price * 0.85;
    }
    else {
        price = price * 0.75;
    }

    if ((fisherman % 2 == 0) && (season != "Autumn")) {
        price = price * 0.95;
    }

    let diff = Math.abs(price - budget);

    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} USD left.`);
    }

    else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} USD.`);
    }
}

solve(3000, "Summer", 11)