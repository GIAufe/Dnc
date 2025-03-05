document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("regName").value;
    let userEmail = document.getElementById("regEmail").value;
    let userPassword = document.getElementById("regPassword").value;
    let feedback = document.getElementById("registerFeedback");

    if (userName && userEmail && userPassword.length >= 6) {
        feedback.innerText = `Welcome, ${userName}! Your registration is successful.`;
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Error: Password must be at least 6 characters.";
        feedback.style.color = "red";
    }
});