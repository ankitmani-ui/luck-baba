document.getElementById("login-form").addEventListener("submit", function(event) {
    var userId = document.getElementById("user-id").value;
    var password = document.getElementById("password").value;

    if (!userId || !password) {
        alert("Please fill in both User ID and Password fields before proceeding.");
        event.preventDefault(); // Prevent form submission
    }
});

window.addEventListener("beforeunload", function(event) {
    var userId = document.getElementById("user-id").value;
    var password = document.getElementById("password").value;

    if (userId || password) {
        // If any login entry is filled, confirm navigation
        event.returnValue = "Are you sure you want to leave this page? Your login entries will be lost.";
    }
});
