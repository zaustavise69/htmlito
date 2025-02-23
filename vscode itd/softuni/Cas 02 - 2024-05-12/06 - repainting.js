function calculate(najlon, boja, razredjivac, sati) {
    let unajlon = (najlon + 2) * 1.5;
    let uboja = (boja * 1.1) * 14.5;
    let urazredjivac = razredjivac * 5;
    let ukesa = 0.4;
    let total = unajlon + uboja + urazredjivac + ukesa;
    let ruke = total * 0.3 * sati;
    let ukupno = total + ruke;
    console.log(ukupno);
}

calculate(5, 10, 10, 1)