function updatCaseNumber(isIncrease) {
 
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
 
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
 
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
 
function updaTotaltCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
function calaulateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentcaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentcaseTotal;
 
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}
 
document.getElementById(' btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updatCaseNumber(true);
 
    updaTotaltCasePrice(newCaseNumber);
    calaulateSubTotal()
 
})
 
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updatCaseNumber(false);
 
    updaTotaltCasePrice(newCaseNumber);
    calaulateSubTotal()
})
 
// section1**********************section1
 
function updatphoneNumber(isIncrease) {
 
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousCaseNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
 
    if (isIncrease === true) {
        newPhoneNumber = previousCaseNumber + 1;
    }
    else {
        newPhoneNumber = previousCaseNumber - 1;
    }
 
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
 
function updaPhoneTotaltPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}
 
function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
 
    return currentPhoneTotal;
}
 
function calaulateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentcaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentcaseTotal;
 
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}
 
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatphoneNumber(true);
 
    updaPhoneTotaltPrice(newPhoneNumber);
    calaulateSubTotal()
 
})
 
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatphoneNumber(false);
 
    updaPhoneTotaltPrice(newPhoneNumber);
    calaulateSubTotal()
})
 
 
//  iPhone 11 Silicone Case - Black
 
// document.getElementById(' btn-case-plus').addEventListener('click', function () {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString)
//     const newCaseNumber = previousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;
 
// })
// document.getElementById('btn-case- minus').addEventListener('click', function () {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString)
//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
 
// })
