function solve(name, episodeduration, breakduration) {
    let lunchtime = breakduration * 1 / 8;
    let relaxation = breakduration * 1 / 4;
    let timeleft = breakduration - lunchtime - relaxation;

    let diff = Math.abs(episodeduration - timeleft);
    let diffmin = Math.ceil(diff);

    if (timeleft >= episodeduration) {
        console.log(`You have enough time to watch ${name} and left with ${diffmin}
        minutes free time.`)
    }
    else {
        console.log(`You dont have enough time to watch ${name}, you need ${diffmin} more minutes.`)
    }
}

solve("GoT", 60, 90);