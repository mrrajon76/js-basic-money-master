// Function for getting the input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);

    // input value is inavlid error message
    if (isNaN(inputValue) == true || inputValue < 0) {
        document.getElementById(inputId + 'ErrorMsg').style.display = "block";
        return;
    }
    // input value is valid
    else {
        document.getElementById(inputId + 'ErrorMsg').style.display = "none";
        return inputValue;
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

    // make total expeneses and balance are zero as a default value
    updateValue('totalExpenses', 0);
    updateValue('balanceAmount', 0);

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

    // make saving amount and remaining balance are zero as a default value
    updateValue('savingAmount', 0);
    updateValue('remainingBalance', 0);

    // check balance amount is updated by calculating expenses or not
    if ((expeneses == 0 && balance == 0) || (incomeAmount == undefined)) {
        window.alert("Please enter your income and expenses first!");
    }
    // check saving amount is lowar than or equal to balance or not
    else if (calculateSaving > balance) {
        window.alert("You have no enough balance to save!");
    }
    // check income amount & saving percentag are defined or not and update the value of savings & remaining balance
    else if (incomeAmount != undefined && saveValue != undefined) {
        updateValue('savingAmount', calculateSaving);
        updateValue('remainingBalance', remainingAmount);
    }
});