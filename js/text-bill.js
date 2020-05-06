var billTypeTextElement = document.querySelector(".billTypeText");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");
var textTotalAddBtn = document.querySelector(".addToBillBtn");

// instance
var textBillFactory = TextFactory();

// event
function textBillTotal() {
    // input
    var action = billTypeTextElement.value;
    // process
    textBillFactory.textAddBill(action);
    var totalsTexty = textBillFactory.textBillTotals();
    var colorTextTotal = textBillFactory.colorString();
    //output
    callTotalOneElement.innerHTML = totalsTexty.callTextBill.toFixed(2)
    smsTotalOneElement.innerHTML = totalsTexty.smsTextBill.toFixed(2);
    totalOneElement.innerHTML = totalsTexty.totalTextBill.toFixed(2);
    
    totalOneElement.classList.remove("warning")
    totalOneElement.classList.remove("danger")
    if (colorTextTotal != "") {
        totalOneElement.classList.add(colorTextTotal) 
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);