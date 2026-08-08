document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

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

    alert(
        "Player Registered!\n\n" +
        "Player ID: " + playerId + "\n" +
        "Name: " + playerName + "\n" +
        "Age: " + age + "\n" +
        "Date of Birth: " + dateOfBirth + "\n" +
        "Location: " + location + "\n" +
        "Position: " + position + "\n" +
        "Preferred Foot: " + preferredFoot + "\n" +
        "Phone: " + phone
    );
});