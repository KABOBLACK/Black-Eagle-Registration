const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const playerName = document.getElementById("playerName").value;

alert("Player name: " + playerName);

});