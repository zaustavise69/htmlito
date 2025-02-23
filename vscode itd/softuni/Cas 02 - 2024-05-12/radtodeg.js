function radtodeg(radians) {
    let deg = (radians * 180) / Math.PI ;
    console.log(`${radians} radians is equal to ${deg} degrees.`);
}
radtodeg(Math.PI)