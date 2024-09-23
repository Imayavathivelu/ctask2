document.addEventListener("DOMContentLoaded", loadExpenses);

const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

expenseForm.addEventListener("submit", addExpense);

function loadExpenses() {
    expenses.forEach(expense => displayExpense(expense));
}

function addExpense(e) {
    e.preventDefault();
    
    const name = document.getElementById("expense-name").value;
    const amount = document.getElementById("expense-amount").value;

    const expense = { id: Date.now(), name, amount };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    
    displayExpense(expense);
    expenseForm.reset();
}

function displayExpense(expense) {
    const li = document.createElement("li");
    li.setAttribute("data-id", expense.id);
    li.innerHTML = `
        ${expense.name} - $${expense.amount}
        <button class="edit-btn" onclick="editExpense(${expense.id})">Edit</button>
        <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
    `;
    expenseList.appendChild(li);
}

function editExpense(id) {
    const expense = expenses.find(exp => exp.id === id);
    document.getElementById("expense-name").value = expense.name;
    document.getElementById("expense-amount").value = expense.amount;

    deleteExpense(id);
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    document.querySelector(`[data-id='${id}']`).remove();
}
