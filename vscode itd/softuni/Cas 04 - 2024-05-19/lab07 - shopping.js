

function calculate(budget, videocards, processors, rams) {
    let totalvideocards = videocards * 250;
    let totalprocessors = totalvideocards * 0.35 * processors;
    let totalrams = totalvideocards * 0.1 * rams;

    let total = totalvideocards + totalprocessors + totalrams;

    if (videocards > processors) {
        total = total * 0.85;
    }

    let diff = Math.abs(total - budget);

    if (budget >= total) {
        console.log(`You have ${diff.toFixed(2)} USD left!`);
    }
    else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} USD more!`)
    }
}

calculate(900, 2, 1, 3);