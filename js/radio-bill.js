// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

var total = 0.00;
var call = 0.00;
var sms = 0.00;
//get a reference to the add button
function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        switch (billItemType) {
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
            totalTwoElement.classList.remove("danger");
            totalTwoElement.classList.add("warning");
        } else if (total >= 50) {
            totalTwoElement.classList.remove("warning");
            totalTwoElement.classList.add("danger");
        } else {
            totalTwoElement.classList.remove("warning");
            totalTwoElement.classList.remove("danger");
        }

        callTotalTwoElement.innerHTML = call.toFixed(2);
        smsTotalTwoElement.innerHTML = sms.toFixed(2);
        totalTwoElement.innerHTML = total.toFixed(2);

    }
};




// billItemType will be 'call' or 'sms'
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

radioBillAddBtnElement.addEventListener('click', radioBillTotal);