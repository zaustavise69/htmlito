function calculate(pencils, markers, tecnost, popust) {
    /* let upencils = pencils * 5.8;
    let umarkers = markers * 7.2;
    let utecnost = tecnost * 1.2;
    let total = upencils + umarkers + utecnost;
    let discount = total * popust / 100;
    let totaltopay = total - discount;
    console.log(totaltopay); */
    let totaltopay = (pencils * 5.8 + markers * 7.2 + tecnost * 1.2) * (100 - popust) / 100;
    console.log(totaltopay);
}

calculate(2, 3, 4, 25)