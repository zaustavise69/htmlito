function solve(hours, minutes) {
    let totalminutes = hours * 60 + minutes + 15;
    let newhours = Math.floor(totalminutes / 60);
    let newminutes = totalminutes % 60;

    if (newhours >= 24) {
        newhours = 0;
    }

    if (newminutes < 10) {
        console.log(`${newhours}:0${newminutes}`);
    }
    else {
        console.log(`${newhours}:${newminutes}`);
    }
}

solve(1, 46)