var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

// instance
var textBillFactoryTwo = TextFactory();


// event
function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        // input
        var action = checkedRadioBtn.value;

        // process
        textBillFactoryTwo.textAddBill(action);
        var tt = textBillFactoryTwo.textBillTotals();
        var colorTextTotalTwo = textBillFactoryTwo.colorString(tt.totalTextBill);
        
        //output
        callTotalTwoElement.innerHTML = tt.callTextBill.toFixed(2)
        smsTotalTwoElement.innerHTML = tt.smsTextBill.toFixed(2);
        totalTwoElement.innerHTML = tt.totalTextBill.toFixed(2);
        
        totalTwoElement.classList.remove("warning")
        totalTwoElement.classList.remove("danger")
        if (colorTextTotalTwo != "") {
            totalTwoElement.classList.add(colorTextTotalTwo)
        }
    }
};

radioBillAddBtnElement.addEventListener('click', radioBillTotal);