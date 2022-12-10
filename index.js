

let pointTeamOneEl = document.getElementById("point-team-one-el")
let pointTeamTwoEl = document.getElementById("point-team-two-el")

let firstServerTeamOne = document.getElementById("first-server-team-one")
let secondServerTeamOne = document.getElementById("second-server-team-one")
let firstServerTeamTwo = document.getElementById("first-server-team-two")
let secondServerTeamTwo = document.getElementById("second-server-team-two")

let pointsTeamOne = 0
let pointsTeamTwo = 0

//Add or remove points team 1 on click

function addPointTeamOne(addPoint) {
  if (pointsTeamOne >= 0) {
        pointsTeamOne += addPoint
        pointTeamOneEl.textContent = pointsTeamOne
    }
    if (pointsTeamOne < 0) {
        pointsTeamOne = 0
        pointTeamOneEl.textContent = pointsTeamOne
    }
}

//Add or remove points team 2 on click

function addPointTeamTwo(addPoint) {
    if (pointsTeamTwo >= 0) {
        pointsTeamTwo += addPoint
        pointTeamTwoEl.textContent = pointsTeamTwo
    }
    if (pointsTeamTwo < 0) {
        pointsTeamTwo = 0
        pointTeamTwoEl.textContent = pointsTeamTwo
    }   
}

//Reset score and serve order on click

function newGame() {
    pointsTeamOne = 0
    pointsTeamTwo = 0
    pointTeamOneEl.textContent = pointsTeamOne
    pointTeamTwoEl.textContent = pointsTeamTwo
    serveOrderTeamOne("first")
    serveOrderTeamTwo("first")
    
}

//Change background and text color to highlight the active server in team one

function serveOrderTeamOne(serveOrder) {
    
    if (serveOrder == "first") {
            firstServerTeamOne.style.backgroundColor = "#2B8494"
            firstServerTeamOne.style.color = "white"
            secondServerTeamOne.style.backgroundColor = "#A8CEE7"
            secondServerTeamOne.style.color = "black"
        }
    else if (serveOrder == "second") {
            firstServerTeamOne.style.backgroundColor = "#A8CEE7"
            firstServerTeamOne.style.color = "black"
            secondServerTeamOne.style.backgroundColor = "#2B8494"
            secondServerTeamOne.style.color = "white"  
        }
        
}

//Change background and text color to highlight the active server in team two

function serveOrderTeamTwo(serveOrder) {
    
    if (serveOrder == "first") {
            firstServerTeamTwo.style.backgroundColor = "#2B8494"
            firstServerTeamTwo.style.color = "white"
            secondServerTeamTwo.style.backgroundColor = "#A8CEE7"
            secondServerTeamTwo.style.color = "black"
        }
    else if (serveOrder == "second") {
            firstServerTeamTwo.style.backgroundColor = "#A8CEE7"
            firstServerTeamTwo.style.color = "black"
            secondServerTeamTwo.style.backgroundColor = "#2B8494"
            secondServerTeamTwo.style.color = "white"  
        }
        
}