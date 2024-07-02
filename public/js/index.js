// Existing code for event listeners
document.getElementById('home').addEventListener("click", function() {
    alert("Thank You For Messaging. We will reply soon.....");
});

document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function (event) {
        alert('Login button clicked!');
    });

    // Dark mode functionality
    const toggleButton = document.createElement('button');
    toggleButton.id = 'dark-mode-toggle';
    toggleButton.textContent = 'Toggle Dark Mode';
    document.body.prepend(toggleButton); // Prepend to place it at the top of the body

    // Define the dark mode styles
    const darkModeStyles = `
        body.dark-mode {
            background-color: #121212;
            color: #ffffff;
        }
        /* Add more styles as needed */
    `;

    // Create a style element and append the dark mode styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = darkModeStyles;
    document.head.appendChild(styleSheet);

    const body = document.body;

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Add event listener to toggle dark mode
    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Save dark mode preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
