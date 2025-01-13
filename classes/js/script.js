// Example of simple alert functionality when a button is clicked
function showAlert(message) {
    alert(message);
}


// Function to toggle chapter visibility
function toggleChapterDetails(chapterId) {
    var chapterContent = document.getElementById(chapterId);
    if (chapterContent.style.display === "none" || chapterContent.style.display === "") {
        chapterContent.style.display = "block";
    } else {
        chapterContent.style.display = "none";
    }
}

// Function to show a sign-up confirmation
function showSignUpMessage(chapter) {
    alert("Thank you for your interest in ${chapter} tutoring! We will contact you shortly.");
}

// Function to handle form validation and alert submission
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    } else {
        alert("Your message has been sent. We will get back to you soon!");
        return true;
    }
}

// Function to initialize the page by hiding all chapter contents initially
function initializePage() {
    var chapters = [
        "wholeNumbers", "integers", "commonFractions", "decimalFractions", 
        "exponents", "patterns", "functions", "algebraicExpressions", 
        "algebraicEquations", "geometryLines", "geometry2DShapes", 
        "graphs", "pythagoras", "areaPerimeter"
    ];

    // Initially hide all chapter details
    chapters.forEach(function(chapter) {
        var chapterElement = document.getElementById(chapter);
        if (chapterElement) {
            chapterElement.style.display = "none";
        }
    });
}

// Call the initializePage function once the window loads
window.onload = initializePage;

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}