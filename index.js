function addIncome() {
    window.location.replace("income.html");
}

function addExpense() {
    window.location.replace("expense.html");
}

function back() {
    window.location.replace("index.html")
}

function saveExpense() {
    let cost = document.getElementById("cost").value;
    let costFor = document.getElementById("costFor").value;
    let date = document.getElementById("date").value;
    let note = document.getElementById("note").value;

    let allDetail = {
        cost: cost,
        costFor: costFor,
        date: date,
        note: note,
    }

    if (!cost.trim() || !costFor.trim() || !date.trim() || !note.trim()) {
        document.getElementById("error").classList.add("d-flex");
        setTimeout(() => {
            document.getElementById("error").classList.remove("d-flex");
        }, 1000);
    }
    else {
        let data = JSON.parse(localStorage.getItem("expenses")) || [];
        data.push(allDetail);
        localStorage.setItem("expenses", JSON.stringify(data));
        window.location.replace("index.html");
        document.getElementById("success").classList.add("d-flex");
        setTimeout(() => {
            document.getElementById("success").classList.remove("d-flex");
        }, 1000);
    }
}

function formatMoney(a) {
    return new Intl.NumberFormat("en-In").format(a)
}

let data = JSON.parse(localStorage.getItem("expenses"));
let allCost = 0;
data.forEach(e => {
    allCost += Number(e.cost);
});


document.getElementById("costDone").textContent += formatMoney(allCost);

data.forEach(e => {
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");

    tr.innerHTML = `<td>${formatDate(e.date)}</td>
    <td>${e.cost}</td>
    <td>${e.costFor}</td>
    <td>${e.note}</td>`;

    tbody.appendChild(tr);

})

function formatDate(a) {
    let today = new Date(a);
    let date = today.getHours();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return `${date}/${month}/${year}`
}

function saveIncome() {
    let income = document.getElementById("income").value;
    let date = document.getElementById("dateOfIncome").value;

    let allDetail = {
        income: income,
        date: date,
    }
    if (!income.trim() || !date.trim()) {
        document.getElementById("error").classList.add("d-flex");
        setTimeout(() => {
            document.getElementById("error").classList.remove("d-flex");
        }, 1000);
    }
    else {
        let income = JSON.parse(localStorage.getItem("income")) || [];
        income.push(allDetail);
        localStorage.setItem("income", JSON.stringify(income));
        window.location.replace("index.html");
        document.getElementById("success").classList.add("d-flex");
        setTimeout(() => {
            document.getElementById("success").classList.remove("d-flex");
        }, 1000);
    }
}

let income = JSON.parse(localStorage.getItem("income"));
let allIncome = 0;

income.forEach(e => {
    allIncome += Number(e.income);
})

console.log(allIncome);

document.getElementById("revenue").innerHTML += allIncome;

document.getElementById("netIncome").innerHTML += allIncome - allCost;


function toConfirm() {
    document.getElementById("confirmDiv").style.display = "block";
    document.getElementById("mainOfAll").style.filter = "blur(15px)"
}

function confirmYes() {
    localStorage.removeItem("income");
    localStorage.removeItem("expenses");
    window.location.reload();
}

function confirmNo() {
    document.getElementById("confirmDiv").style.display = "none";
    document.getElementById("mainOfAll").style.filter = "blur(0px)"
}