function calculate(pagesleft, pagesperhour, daysleft) {
    let final = pagesleft / daysleft / pagesperhour;
    console.log(`He has to read ${final} pages per hour.`)
}

calculate(432, 15, 4)