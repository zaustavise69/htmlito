function bonus(points) {
    let bonus = 0;

    if (points <= 100) {
        bonus = 5;
    }
    else if (points <= 1000) {
        bonus = points * 20 / 100;
    }
    else {
        bonus = points * 10 / 100;
    }

    if (points % 2 == 0) {
        bonus = bonus + 1;
    }
    else if (points % 10 == 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(points + bonus);
}

bonus(20)