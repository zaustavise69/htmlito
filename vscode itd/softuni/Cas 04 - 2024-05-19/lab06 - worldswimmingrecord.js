function solve(seconds, meters, secondpermeter) {
    let totalsecondstoswim = meters * secondpermeter;
    let countslowdown = Math.floor(meters / 15);
    let secondslowdown = countslowdown * 12.5;
    let andrewtime = totalsecondstoswim + secondslowdown;
    
    if (andrewtime < seconds) {
        console.log(`Yes, he succeeded! The nwe world record is ${andrewtime.toFixed(2)} seconds.`)
    }
    else {
        let fail = andrewtime - seconds;
        console.log(`No, he failed! He was ${fail.toFixed(2)} seconds slower.`);
    }
}   

solve(10464, 1500, 20);