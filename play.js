//get player name
const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

//add and remove player buttons
const addPlayerBtn = document.getElementById("add-player-btn");
const removePlayerBtn = document.getElementById("remove-player-btn");
const parentElement = document.getElementById("player-cards-wrapper");

addPlayerBtn.addEventListener("click", function() {
    if (parentElement.children.length < 6) {
        const div1 = document.createElement("div");
        div1.className = "col-sm-6";

        const div2 = document.createElement("div");
        div2.className = "card w-50";

        const h5 = document.createElement("h5");
        h5.className = "card-header";
        h5.textContent = "Player " + (parentElement.children.length + 1);

        const ul = document.createElement("ul");
        ul.className = "list-group list-group-flush";

        const li1 = document.createElement("li");
        li1.className = "list-group-item";

        const bidText = document.createTextNode("Bid:");

        const div3 = document.createElement("div");
        div3.className = "btn-group me-2";
        div3.setAttribute("role", "group");
        div3.setAttribute("aria-label", "Second group");

        for (let i = 0; i <= 3; i++) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-secondary";
        button.textContent = i;
        div3.appendChild(button);
        }

        const li2 = document.createElement("li");
        li2.className = "list-group-item";
        li2.textContent = "Total Score: 0";

        li1.appendChild(bidText);
        li1.appendChild(div3);

        ul.appendChild(li1);
        ul.appendChild(li2);

        div2.appendChild(h5);
        div2.appendChild(ul);

        div1.appendChild(div2);

        parentElement.appendChild(div1);
    } else {
        // Display pop-up message
        alert("You can only add up to 6 players!");
    }
});

removePlayerBtn.addEventListener("click", function() {
  if (parentElement.children.length > 1) {
    const lastChild = parentElement.lastChild;
    if (lastChild) {
      parentElement.removeChild(lastChild);
    }
  } else {
    // Display pop-up message
    alert("You must have at least 2 players!");
  }
});

//next round button
const roundNumberElement = document.getElementById('round-number');
const progressElement = document.getElementById('progress');
const nextRoundButton = document.getElementById('next-round-button');
let currentRound = 0;

nextRoundButton.addEventListener('click', () => {
    addPlayerBtn.style.display = "none";
    removePlayerBtn.style.display = "none";

    if (currentRound < 10) {
        if (currentRound < 10 && currentRound >= 0) {
            nextRoundButton.textContent = 'Next Round';
    }
        currentRound++;
        roundNumberElement.textContent = currentRound;
        progressElement.style.width = `${(currentRound / 10) * 100}%`;
        if (currentRound === 10) {
            nextRoundButton.textContent = 'End Game';
    }
    } else {
        alert('Game Over!');
        currentRound = 0;
        progressElement.style.width = `${(currentRound / 10) * 100}%`;
        currentRound = 0;
    }
});

function newPerson() {
    $('#player-cards-wrapper').append('<div class="col-sm-6"><div class="card w-50"><h5 class="card-header"><span class="player-name"></span></h5><ul class="list-group list-group-flush"><li class="list-group-item">Bid:<div class="btn-group me-2 bid-counter" role="group" aria-label="Second group"><button type="button" class="btn btn-secondary">0</button><button type="button" class="btn btn-secondary">1</button><button type="button" class="btn btn-secondary">2</button><button type="button" class="btn btn-secondary">3</button></div></li><li class="list-group-item">Total Score: 0</li></ul></div></div>')
}

function scoreCalc(playerBid, roundNumber, tricksTaken, bonusPoints, playerScore) {
    let roundScore = 0;

    if(playerBid === tricksTaken) {
        if(playerBid === 0) {
            roundScore = playerBid * roundNumber * 10;
        } else {
            roundScore = playerBid * 20 + bonusPoints;
        }
    } else {
        if(playerBid === 0) {
            roundScore = roundNumber * -10;
        } else {
            roundScore = Math.abs(playerBid - tricksTaken) * -10;
        }
    }
    return playerScore + roundScore;
}

//save scores
function saveScore(playerScore) {
    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, playerScore, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
}