var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringElement = document.querySelector(".billString");

function calculateBtnClicked() {
    var total = 0.00;
    var billString = billStringElement.value;
    var list = billString.split(',');
    for (var i = 0; i < list.length; i = i + 1) {
        var action = list[i].trim();
        switch (action) {
            case "call":
                total += 2.75;
                break;
            case "sms":
                total += 0.75;
                break;
        };
    };
    if (total > 20 && total < 30) {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.add("warning");
    } else if (total >= 30) {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");
    } else {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");
    }
    billTotalElement.innerHTML = total.toFixed(2);
}
calculateBtnElement.addEventListener('click', calculateBtnClicked);