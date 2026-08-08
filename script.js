document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const playerNumber = Math.floor(Math.random() * 9000) + 1000;
const playerId = "BEFC-" + playerNumber;

document.getElementById("playerId").textContent = playerId;

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const playerName =
        document.querySelector('input[name="playerName"]').value;

    alert("Welcome to Black Eagle FC, " + playerName + "!");
});