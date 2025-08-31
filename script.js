let balance = document.getElementById("balance");
let income = document.getElementById("incomeInput");
let expense = document.getElementById("expenseInput");
let incomeDescription = document.getElementById("incomeDescription");
let expenseDescription = document.getElementById("expenseDescription");
let transactionList = document.getElementById("transactionList");

document.getElementById("addIncome").addEventListener("click", function () {
  let incomeValue = parseFloat(income.value);
  if (!isNaN(incomeValue) && incomeValue > 0) {
    // Only update balance as a number
    balance.textContent = parseFloat(balance.textContent) + incomeValue;

    // Add description to the transaction list
    let li = document.createElement("li");
    li.textContent = incomeDescription.value + ": +" + incomeValue;
    li.style.color = "green";
    transactionList.appendChild(li);

    // clear inputs
    income.value = "";
    incomeDescription.value = "";
  }
});

document.getElementById("addExpense").addEventListener("click", function () {
  let expenseValue = parseFloat(expense.value);
  if (!isNaN(expenseValue) && expenseValue > 0) {
    balance.textContent = parseFloat(balance.textContent) - expenseValue;

    let li = document.createElement("li");
    li.textContent = expenseDescription.value + ": -" + expenseValue;
    li.style.color = "red";
    transactionList.appendChild(li);

    expense.value = "";
    expenseDescription.value = "";
  }
});

transactionList.innerHTML += "<li>" + balance.textContent + "</li>";
