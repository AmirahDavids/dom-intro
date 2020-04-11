var callGrandTotal = document.querySelector(".callTotalSettings");
var smsGrandTotal = document.querySelector(".smsTotalSettings");
var grandTotal = document.querySelector(".totalSettings");


var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsButton = document.querySelector(".updateSettings");
var settingsAddButton = document.querySelector(".add")

var callTotalSettings = 0.00;
var smsTotalSettings = 0.00;
var totalSettings = 0.00;


var callCostValue = 0.00;
var smsCostValue = 0.00;
var warningLevelValue = 0.00;
var criticalLevelValue = 0.00;


function settingsBillTotal() {
    console.log('updating settings');
    console.log(typeof (callCostSettingElement.value));

    callCostValue = Number(callCostSettingElement.value);
    smsCostValue = Number(smsCostSettingElement.value);
    warningLevelValue = Number(warningLevelSetting.value);
    criticalLevelValue = Number(criticalLevelSetting.value);
    console.log(typeof (callCostValue));
}

function calculateSettingsTotal() {
    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingsBtn) {
        var billItemType = checkedSettingsBtn.value
        var actualValueOfItem = 0;
        if (billItemType == "call") {
            actualValueOfItem = callCostValue
        } else {
            actualValueOfItem = smsCostValue
        }




        if (totalSettings + actualValueOfItem < criticalLevelValue) {



            switch (billItemType) {
                case "call":
                    totalSettings += callCostValue;
                    callTotalSettings += callCostValue;

                    break;
                case "sms":
                    totalSettings += smsCostValue;
                    smsTotalSettings += smsCostValue;
                    break;
            };

            if (totalSettings > warningLevelValue && totalSettings < criticalLevelValue) {
                grandTotal.classList.remove("danger");
                grandTotal.classList.add("warning");
            } else if (totalSettings >= criticalLevelValue) {
                grandTotal.classList.remove("warning");
                grandTotal.classList.add("danger");
            } else {
                grandTotal.classList.remove("warning");
                grandTotal.classList.remove("danger");
            }

            callGrandTotal.innerHTML = callTotalSettings.toFixed(2);
            smsGrandTotal.innerHTML = smsTotalSettings.toFixed(2);
            grandTotal.innerHTML = totalSettings.toFixed(2);
        }
    }

}

updateSettingsButton.addEventListener("click", settingsBillTotal);
settingsAddButton.addEventListener("click", calculateSettingsTotal);