
const studentName = localStorage.getItem("studentName");

const welcomeMessage = document.getElementById("welcomeMessage");

if (studentName) {
    welcomeMessage.textContent = "Welcome to MH ONE, " + studentName + "!";
} else {
    welcomeMessage.textContent = "Welcome to MH ONE!";
}
