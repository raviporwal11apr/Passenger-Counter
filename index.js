let count = document.getElementById("count")
let increment = document.getElementById("increment")
let save = document.getElementById("save")
let data = document.getElementById("data")
let total = document.getElementById("total")
let reset = document.getElementById("reset")
let nos = 0;
let tNos = 0
increment.addEventListener("click", () => {
    ++nos
    ++tNos
    count.textContent = nos
})
save.addEventListener("click", () => {
    data.innerHTML += " " + nos + " - "
    count.textContent = 0
    total.innerHTML = "TOTAL: " + tNos
    return nos = 0 
})
reset.addEventListener("click", () => {
    count.textContent = 0
    data.innerHTML = "Previous Data: "
    total.innerHTML = "TOTAL: "
    nos = 0
    return tNos = 0
})
