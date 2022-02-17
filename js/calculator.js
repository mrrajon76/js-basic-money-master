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

// Function for updating values
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
    const totalExpenseAmount = foodExpense + rentExpense + clothesExpense;

    updateValue('totalExpenses', totalExpenseAmount);
    const balance = incomeAmount - totalExpenseAmount;
    updateValue('balanceAmount', balance);
    // console.log(totalExpense)
});

// Calculate savings and remaining balance
document.getElementById('saveCalculate').addEventListener('click', function () {
    const saveValue = getInputValue('saveValue');
    const balanceText = document.getElementById('balanceAmount').innerText;
    const balance = parseFloat(balanceText);
    const calculateSaving = balance / saveValue;
    updateValue('savingAmount', calculateSaving);
    const remainingAmount = balance - calculateSaving;
    updateValue('remainingBalance', remainingAmount);
});