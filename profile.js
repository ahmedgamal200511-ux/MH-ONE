
const studentName = localStorage.getItem("studentName") || "Not registered";

const studentEmail = localStorage.getItem("studentEmail") || "Not registered";

const studentCollege = localStorage.getItem("studentCollege") || "Not registered";

const studentYear = localStorage.getItem("studentYear") || "Not registered";

document.getElementById("profileName").textContent = studentName;

document.getElementById("nameInfo").textContent = studentName;

document.getElementById("emailInfo").textContent = studentEmail;

document.getElementById("collegeInfo").textContent = studentCollege;

document.getElementById("yearInfo").textContent = studentYear;
