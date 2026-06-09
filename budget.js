let totalBudget = 0;
let totalExpense = 0;

function calculateBudget(){

const hotel =
Number(
document.getElementById("hotelCost").value
);

const food =
Number(
document.getElementById("foodCost").value
);

const travel =
Number(
document.getElementById("travelCost").value
);

const shopping =
Number(
document.getElementById("shoppingCost").value
);

totalBudget =
hotel + food + travel + shopping;

document.getElementById(
"totalBudget"
).innerText =
"₹" + totalBudget;

updateRemaining();

updateChart(
hotel,
food,
travel,
shopping
);

}

function addExpense(){

const name =
document.getElementById(
"expenseName"
).value;

const amount =
Number(
document.getElementById(
"expenseAmount"
).value
);

if(name==="" || amount===0){

alert("Enter expense");

return;

}

const row =
document.createElement("tr");

row.innerHTML =

`<td>${name}</td>
<td>₹${amount}</td>`;

document
.getElementById(
"expenseTable"
)
.appendChild(row);

totalExpense += amount;

document.getElementById(
"totalExpense"
).innerText =
"₹" + totalExpense;

updateRemaining();

}

function updateRemaining(){

document.getElementById(
"remainingAmount"
).innerText =
"₹" +
(totalBudget-totalExpense);

}

function convertCurrency(){

const amount =
Number(
document.getElementById(
"inrAmount"
).value
);

const rate =
Number(
document.getElementById(
"currency"
).value
);

document.getElementById(
"convertedAmount"
).innerText =

"Result: " +
(amount*rate).toFixed(2);

}

let chart;

function updateChart(
hotel,
food,
travel,
shopping
){

const ctx =
document
.getElementById(
"expenseChart"
);

if(chart){

chart.destroy();

}

chart = new Chart(ctx,{

type:"doughnut",

data:{

labels:[
"Hotel",
"Food",
"Travel",
"Shopping"
],

datasets:[{

data:[
hotel,
food,
travel,
shopping
]

}]

}

});

}

document
.getElementById(
"darkModeBtn"
)
.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-mode"
);

});