function solve(seconds1, seconds2, seconds3) {
    let totalseconds = seconds1 + seconds2 + seconds3;
    let minutes = Math.floor(totalseconds / 60);
    let seconds = totalseconds % 60;
    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`)
    }
}

solve(35, 45, 44)