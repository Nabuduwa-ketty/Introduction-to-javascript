/*This is the percentage that determines the transaction charge*/
const transactionCharge = 0.025;
var amountTendered = 100000;
BilledAmount = amountTendered-(amountTendered*transactionCharge);
console.log("This is what the billed amount is (less transaction charges)");
console.log(BilledAmount);