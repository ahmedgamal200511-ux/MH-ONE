
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const college = document.getElementById("college").value;
    const academicYear = document.getElementById("academicYear").value;

    if (!fullName || !email || !college || !academicYear) {
        alert("Please complete all fields.");
        return;
    }

    localStorage.setItem("studentName", fullName);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentCollege", college);
    localStorage.setItem("studentYear", academicYear);

    window.location.href = "dashboard.html";

});
