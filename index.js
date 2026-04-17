let scoreHome = 0
let scoreGuest = 0
let scoreHomeEl = document.getElementById("scoreHome-el")
let scoreGuestEl = document.getElementById("scoreGuest-el")

function addOneToHome() {
    scoreHome += 1
    // console.log(num)
    scoreHomeEl.textContent = scoreHome
}
function addTwoToHome() {
    scoreHome += 2
    // console.log(num)
    scoreHomeEl.textContent = scoreHome
}
function addThreeToHome() {
    scoreHome +=3
    // console.log(num)
    scoreHomeEl.textContent = scoreHome
}


function addOneToGuest() {
    scoreGuest += 1
    // console.log(num)
    scoreGuestEl.textContent = scoreGuest
}

function addTwoToGuest() {
    scoreGuest += 2
    // console.log(num)
    scoreGuestEl.textContent = scoreGuest
}

function addThreeToGuest() {
    scoreGuest +=3
    // console.log(num)
    scoreGuestEl.textContent = scoreGuest
}

function newGame() {
    scoreHome = 0
    scoreHomeEl.textContent = 0
    scoreGuest = 0
    scoreGuestEl.textContent = 0
}