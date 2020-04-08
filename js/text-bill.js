var billTypeTextElement = document.querySelector(".billTypeText");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");
var textTotalAddBtn = document.querySelector(".addToBillBtn");

var total = 0.00;
var call = 0.00;
var sms = 0.00;


function textBillTotal() {
    





    var action = billTypeTextElement.value.trim();

    switch (action) {
        case "call":
            total += 2.75;
            call += 2.75;

            break;
        case "sms":
            total += 0.75;
            sms += 0.75;
            break;
    };
    if (total > 30 && total < 50) {
        totalOneElement.classList.remove("danger");
        totalOneElement.classList.add("warning");
    } else if (total >= 50) {
        totalOneElement.classList.remove("warning");
        totalOneElement.classList.add("danger");
    } else {
        totalOneElement.classList.remove("warning");
        totalOneElement.classList.remove("danger");
    }

    callTotalOneElement.innerHTML = call.toFixed(2);
    smsTotalOneElement.innerHTML = sms.toFixed(2);
    totalOneElement.innerHTML = total.toFixed(2);
}





textTotalAddBtn.addEventListener('click', textBillTotal);