
const courses = {
    accounting: {
        title: "Cost Accounting",
        description: "Learn cost concepts and accounting methods."
    },

    marketing: {
        title: "Marketing Management",
        description: "Explore marketing strategies and consumer behavior."
    },

    production: {
        title: "Production Management",
        description: "Understand production systems and operations."
    },

    law: {
        title: "Commercial Law",
        description: "Learn the basics of commercial law."
    },

    economics: {
        title: "Economics",
        description: "Study economic principles and theories."
    }
};

const params = new URLSearchParams(window.location.search);

const courseId = params.get("course");

const selectedCourse = courses[courseId];

if (selectedCourse) {
    document.getElementById("courseTitle").textContent =
        selectedCourse.title;

    document.getElementById("courseDescription").textContent =
        selectedCourse.description;
} else {
    document.getElementById("courseTitle").textContent =
        "Course Not Found";

    document.getElementById("courseDescription").textContent =
        "Please select a course from the courses page.";
}
