function calculate(meters) {
    let total = meters * 7.61;
    let discount = total * 0.18;
    let final = total - discount;
    console.log(`The final price is: ${final} USD.`);
    console.log(`The discount is: ${discount} USD.`);
}

calculate(99999)