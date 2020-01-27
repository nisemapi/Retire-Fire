let btn = document.getElementById("btn")
let inc = document.getElementById("inc")
let exp = document.getElementById("exp")
let res = document.getElementById("res")
let cont = document.querySelector(".container")

let resultText

let incv, expv, percentage, years, ysave, target
btn.addEventListener("click", (event)=> {
    incv = inc.value
    expv = exp.value
    percentage = parseInt(incv/expv * 100)
    years = yearsToRetire(incv, expv)

    resultText = `If you earn ${incv} a year and spend ${expv} a year you are saving ${percentage}%. \nYou'd need to save ${ysave} for ${years} to qeefasd`
    
    cont.innerHTML = "<p>" + resultText + "</p>"

})

function yearsToRetire(income, expenses, int = 0.07) {
    target = expenses * 25
    let count = 0
    let savings = 0
    ysave = income - expenses
    while (savings < target) {
        count++
        savings += ysave
        savings += savings*int
    }

    return count
}