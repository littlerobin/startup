//Update player name
const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}


// Calculate and update the total scores for each round
function calculateTotals() {
    // Loop through each row in the table body and calculate the total for that row
    for (let i = 0; i < document.getElementsByTagName('tbody')[0].rows.length; i++) {
        const row = document.getElementsByTagName('tbody')[0].rows[i];
        let total = 0;
        // Loop through each input in the row and add up the values
        for (let j = 1; j <= 10; j++) {
            total += (Number(row.cells[j].getElementsByTagName('input')[0].value)*20);
        }
        // Set the total for the row
        row.cells[11].innerHTML = total;
    }
}

// Calculate and return the total for a specific round
function getRoundTotal(roundNumber) {
    let total = 0;
    // Loop through each row in the table body and add up the values for the specified round
    for (let i = 0; i < document.getElementsByTagName('tbody')[0].rows.length; i++) {
        const row = document.getElementsByTagName('tbody')[0].rows[i];
        if (Number(row.cells[roundNumber].getElementsByTagName('input')[0].value) === 0) {
            total += (Number(row.cells[roundNumber].getElementsByTagName('input')[0].value)*(row.cells[roundNumber]*10));
        } else {
        total += (Number(row.cells[roundNumber].getElementsByTagName('input')[0].value)*20);
        }
    }
    return total;
}

// Attach event listeners to the input elements to recalculate the totals when they are changed
const inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', calculateTotals);
}

// Get the add player button and scorecard body
const addPlayerBtn = document.getElementById("add-player-btn");
const scorecardBody = document.getElementById("scorecard-body");

// Add an event listener to the add player button
addPlayerBtn.addEventListener("click", () => {
    // Get the number of players already added
    const numPlayers = scorecardBody.children.length;

    // Check if there are already 4 players added
    if (numPlayers >= 4) {
        return;
    }

    // Create a new player row
    const newPlayer = document.createElement("tr");
    newPlayer.innerHTML = `
        <td>Player ${numPlayers + 1}</td>
        <td><input type="number" min="0" max="1" value="0"></td>
        <td><input type="number" min="0" max="2" value="0"></td>
        <td><input type="number" min="0" max="3" value="0"></td>
        <td><input type="number" min="0" max="4" value="0"></td>
        <td><input type="number" min="0" max="5" value="0"></td>
        <td><input type="number" min="0" max="6" value="0"></td>
        <td><input type="number" min="0" max="7" value="0"></td>
        <td><input type="number" min="0" max="8" value="0"></td>
        <td><input type="number" min="0" max="9" value="0"></td>
        <td><input type="number" min="0" max="10" value="0"></td>
        <td id="total-${numPlayers + 1}">0</td>
    `;

    // Add the new player row to the scorecard body
    scorecardBody.appendChild(newPlayer);

    // If there are now 4 players, hide the add player button
    if (numPlayers + 1 === 4) {
        addPlayerBtn.classList.add("hide");
    }
});

// Add event listener to the next round button
const nextRoundButton = document.getElementById('next-round-button');
const roundNumberElement = document.getElementById('round-number');
const progressElement = document.getElementById('progress');
let currentRound = 0;

nextRoundButton.addEventListener('click', () => {

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
        for (let i = 0; i < scorecardBody.children.length; i++) {
            const row = scorecardBody.children[i];
            const inputFields = row.querySelectorAll("input[type=number]");
            inputFields.forEach(input => {
              input.value = 0;
            });
            row.lastElementChild.textContent = ""
        }
    }
});