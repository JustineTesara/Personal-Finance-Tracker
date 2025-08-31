let balance = document.getElementById("balance");
let income = document.getElementById("incomeInput");
let expense = document.getElementById("expenseInput");
let incomeDescription = document.getElementById("incomeDescription");
let expenseDescription = document.getElementById("expenseDescription");
let transactionList = document.getElementById("transactionList");
let currentBalance = 0;

// Track totals
let totalIncome = 0;
let totalExpense = 0;

// Formatter for Philippine Peso
const peso = new Intl.NumberFormat("fil-PH", {
  style: "currency",
  currency: "PHP",
  minimumFractionDigits: 2,
});

// Chart.js setup
const ctx = document.getElementById("financeChart").getContext("2d");
const financeChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Finance Overview",
        data: [totalIncome, totalExpense],
        backgroundColor: ["#4caf50", "#f44336"], // green, red
      },
    ],
  },
});

function updateChart() {
  financeChart.data.datasets[0].data = [totalIncome, totalExpense];
  financeChart.update();
}

document.getElementById("addIncome").addEventListener("click", function () {
  let incomeValue = parseFloat(income.value);
  if (!isNaN(incomeValue) && incomeValue > 0) {
    currentBalance += incomeValue; // update balance
    balance.textContent = peso.format(currentBalance); // show formatted

    totalIncome += incomeValue;
    updateChart();

    let li = document.createElement("li");
    li.textContent = incomeDescription.value + ": +" + incomeValue;
    li.style.color = "green";
    transactionList.appendChild(li);

    income.value = "";
    incomeDescription.value = "";
  }
});

document.getElementById("addExpense").addEventListener("click", function () {
  let expenseValue = parseFloat(expense.value);
  if (!isNaN(expenseValue) && expenseValue > 0) {
    currentBalance -= expenseValue; // update balance
    balance.textContent = peso.format(currentBalance);

    totalExpense += expenseValue;
    updateChart();

    let li = document.createElement("li");
    li.textContent = expenseDescription.value + ": -" + expenseValue;
    li.style.color = "red";
    transactionList.appendChild(li);

    expense.value = "";
    expenseDescription.value = "";
  }
});
