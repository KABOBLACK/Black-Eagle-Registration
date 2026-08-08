document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const player name =
document.queryselector('input[name="playName"]').value;

    alert("Player registration submitted successfully!");

});

const playerNumber = Math.floor(Math.random() * 9000) + 1000;
const playerId = "BEFC-" + playerNumber;

document.getElementById("playerId").textContent = playerId;