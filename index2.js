// function saveIncome() {
//     let income = document.getElementById("income").value;
//     let date = document.getElementById("dateOfIncome").value;

//     let allDetail = {
//         income: income,
//         date: date,
//     }
//     if (!income.trim() || !date.trim()) {
//         alert("⚠️ Please fill all required fields before submitting!");
//     }
//     else {
//         let income = JSON.parse(localStorage.getItem("income")) || [];
//         income.push(allDetail);
//         localStorage.setItem("income", JSON.stringify(income));
//         window.location.replace("index.html");
//     }
// }

// let income = JSON.parse(localStorage.getItem("income"));
// let allIncome = 0;

// income.forEach(e=>{
//     allIncome += Number(e.income);
// })

// console.log(allIncome);

// document.getElementById("revenue").innerHTML += allIncome;

// document.getElementById("netIncome").innerHTML += allIncome;