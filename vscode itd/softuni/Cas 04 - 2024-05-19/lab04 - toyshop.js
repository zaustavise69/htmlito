function solve(price, puzzles, dolls, bears, minions, trucks) {
    let sum = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
    let numberoftoys = puzzles + dolls + bears + minions + trucks;
    
    if (numberoftoys >= 50) {
        sum = sum * 0.75;
    }

    let totalafterrent = sum * 0.9;

    if (totalafterrent >= price) {
        let remains = totalafterrent - price;
        console.log(`Yes! ${remains.toFixed(2)} USD left.`);
    }
    else {
        let needed = price - totalafterrent;
        console.log(`Not enough money! ${needed.toFixed(2)} USD needed.`);
    }
}

solve(320, 8, 2, 5, 5, 1)