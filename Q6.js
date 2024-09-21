//console.log(`Enter the payment method`)
let method="credit";
switch (method){
    case "credit": console.log("2%"); 
                    break;
    case "debit": console.log("1.5%");
                    break;
    case "paypal": console.log("3%");
                    break;
    default:
        console.log("Wrong input");
}