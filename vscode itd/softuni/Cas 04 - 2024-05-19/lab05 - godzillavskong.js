function solve(budget, pepole, priceperclothes) {
    let scenery = budget / 10;
    let clothing = pepole * priceperclothes;

    if (pepole > 150) {
        clothing = clothing * 0.9;
    }

    let total = scenery + clothing;
    
    if (budget >= total) {
        let remains = budget - total;
        console.log("Action!");
        console.log(`Wingards starts filming with ${remains} USD left.`)
    }
    else {
        let needed = total - budget;
        console.log ("Not enough money!");
        console.log(`Wingard needs ${needed} USD more.`);
    }
}

solve(20000, 120, 55.5);