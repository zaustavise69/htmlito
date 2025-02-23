function solve(budget, season) {
    let destination = "";
    let type = "";
    let amount = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            type = "Camp";
            amount = budget * 0.3;
        }
        else {
            type = "Hotel";
            amount = budget * 0.7;
        }
    }

    else if (budget <=1000) {  
        destination = "Balkans";
        if (season == "summer") {
            type = "Camp";
            amount = budget * 0.4;
        }
        else {
            type = "Hotel";
            amount = budget * 0.8;
        }
    }

    else {
        destination = "Europe";
        type = "Hotel";
        amount = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${amount.toFixed(2)}`);
}

solve(50, "summer")