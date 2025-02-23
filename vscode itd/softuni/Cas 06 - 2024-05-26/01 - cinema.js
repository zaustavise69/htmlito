function calculate(screeningType, rows, cols) {
    let ticketprice = 0;
    switch (screeningType) {
        case "Premiere":
            ticketprice = 12;
            break;
        case "Normal":
            ticketprice = 7.5;
            break;
        case "Discount":
            ticketprice = 5;
            break;
        
    }
    let total = ticketprice * rows * cols;
    console.log(`${total.toFixed(2)} USD`)
}  

calculate("Premiere", 10, 12)