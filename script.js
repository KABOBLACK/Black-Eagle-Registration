const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const playerName = document.getElementById("playerName").value;

const dateOfBirth = document.getElementById("dateOfBirth").value;

const location = document.getElementById("location").value;

const position = document.getElementById("position").value;

const preferredFoot = document.getElementById("preferredFoot").value;

alert("Player name: " + playerName);

});