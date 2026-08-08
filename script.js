document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const players = JSON.parse(localStorage.getItem("players")) || [];

const playerNumber = Math.floor(Math.random() * 9000) + 1000;
const playerId = "BEFC-" + playerNumber;

    const playerNumber = Math.floor(Math.random() * 9000) + 1000;
const playerId = "BEFC-" + playerNumber;

document.getElementById("playerId").textContent = playerId;

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const playerName = document.querySelector('input[name="playerName"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const dateOfBirth = document.querySelector('input[name="dateOfBirth"]').value;
    const location = document.querySelector('input[name="location"]').value;
    const position = document.querySelector('select[name="position"]').value;
    const preferredFoot = document.querySelector('select[name="preferredFoot"]').value;
    const phone = document.querySelector('input[name="phone"]').value;

players.push({
    playerId: playerId,
    playerName: playerName,
    age: age,
    dateOfBirth: dateOfBirth,
    location: location,
    position: position,
    preferredFoot: preferredFoot,
    phone: phone
});

const photoInput = document.querySelector('input[name="playerPhoto"]');
const photoFile = photoInput.files[0];

    document.getElementById("playerProfile").innerHTML = `
        <h2>Black Eagle FC Player Profile</h2>

        <p><strong>Player ID:</strong> ${playerId}</p>
        <p><strong>Name:</strong> ${playerName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Preferred Foot:</strong> ${preferredFoot}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;
});

document.getElementById("searchButton").addEventListener("click", function() {

    const searchId = document.getElementById("searchPlayer").value;

    if (searchId === playerId) {
        document.getElementById("playerProfile").style.display = "block";
    } else {
        document.getElementById("playerProfile").innerHTML =
            "<p>Player not found.</p>";
    }

});

function displayPlayers() {
    const playerList = document.getElementById("playerList");

    playerList.innerHTML = "<h2>Registered Players</h2>";

    players.forEach(function(player) {
        const playerCard = document.createElement("div");

        playerCard.innerHTML = `
            <p><strong>Player ID:</strong> ${player.playerId}</p>
            <p><strong>Name:</strong> ${player.playerName}</p>
            <p><strong>Position:</strong> ${player.position}</p>
            <hr>
        `;

        playerList.appendChild(playerCard);
    });
}

players.push({
    playerId: playerId,
    playerName: playerName,
    age: age,
    dateOfBirth: dateOfBirth,
    location: location,
    position: position,
    preferredFoot: preferredFoot,
    phone: phone
});

displayPlayers();