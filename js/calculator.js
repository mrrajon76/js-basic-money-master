// Function for getting the input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    // input value validation
    if (validInput(inputValue)) {
        document.getElementById(inputId + 'ErrorMsg').style.display = "none";
        return inputValue;
    }
    // input value is inavlid error message
    else {
        document.getElementById(inputId + 'ErrorMsg').style.display = "block";
    }
}

// Function for checking the input value is valid or not
function validInput(value) {
    // not a number
    if (isNaN(value)) {
        return false;
    }
    // negative value
    else if (value < 0) {
        return false;
    }
    // valid value
    else {
        return true;
    }
}

// Function for getting text value{
function getValue(fieldId) {
    const getField = document.getElementById(fieldId);
    const fieldValue = getField.innerText;
    return parseFloat(fieldValue);
}

// Function for updating text value
function updateValue(fieldId, amount) {
    const getField = document.getElementById(fieldId);
    getField.innerText = amount;
    return;
}

// Calculate income and expenese
document.getElementById('calculate').addEventListener('click', function () {
    const incomeAmount = getInputValue('incomeValue');
    const foodExpense = getInputValue('foodExpense');
    const rentExpense = getInputValue('rentExpense');
    const clothesExpense = getInputValue('clothesExpense');

    // calculte total expeneses
    const totalExpenseAmount = foodExpense + rentExpense + clothesExpense;
    // calculate balace after total expeneses
    const balance = incomeAmount - totalExpenseAmount;

    // check the expenses are lower than or equal to balance or not
    if (totalExpenseAmount > incomeAmount) {
        window.alert("Expenses must be lower or equal to income!")
    }
    // check all the inputs are valid or not and update total expeneses & balance
    else if (incomeAmount != undefined && foodExpense != undefined && rentExpense != undefined && clothesExpense != undefined) {
        updateValue('totalExpenses', totalExpenseAmount);
        updateValue('balanceAmount', balance);
    }
});

// Calculate savings and remaining balance
document.getElementById('saveCalculate').addEventListener('click', function () {
    const saveValue = getInputValue('saveValue');
    const balance = getValue('balanceAmount');
    const expeneses = getValue('totalExpenses');
    const incomeAmount = getInputValue('incomeValue');

    // calculate saving amount
    const calculateSaving = incomeAmount * (saveValue / 100);
    const remainingAmount = balance - calculateSaving;

    // check balance amount is updated by calculating expenses or not
    if (expeneses == 0 && balance == 0) {
        window.alert("Please enter your income and expenses first!");
    }
    // check saving amount is lowar than or equal to balance or not
    else if (calculateSaving > balance) {
        window.alert("You have not enough balance to save!");
    }
    // check income amount & saving percentag are defined or not and updating the value of savings & remaining balance
    else if (incomeAmount != undefined && saveValue != undefined) {
        updateValue('savingAmount', calculateSaving);
        updateValue('remainingBalance', remainingAmount);
    }
});