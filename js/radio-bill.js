// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

var totalRadio = 0.00;
var callRadio = 0.00;
var smsRadio = 0.00;
//get a reference to the add button
function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        switch (billItemType) {
            case "call":
                totalRadio += 2.75;
                callRadio += 2.75;

                break;
            case "sms":
                totalRadio += 0.75;
                smsRadio += 0.75;
                break;
        };

        if (totalRadio > 30 && totalRadio < 50) {
            totalTwoElement.classList.remove("danger");
            totalTwoElement.classList.add("warning");
        } else if (totalRadio >= 50) {
            totalTwoElement.classList.remove("warning");
            totalTwoElement.classList.add("danger");
        } else {
            totalTwoElement.classList.remove("warning");
            totalTwoElement.classList.remove("danger");
        }

        callTotalTwoElement.innerHTML = callRadio.toFixed(2);
        smsTotalTwoElement.innerHTML = smsRadio.toFixed(2);
        totalTwoElement.innerHTML = totalRadio.toFixed(2);

    }
};




// billItemType will be 'call' or 'sms'
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

radioBillAddBtnElement.addEventListener('click', radioBillTotal);