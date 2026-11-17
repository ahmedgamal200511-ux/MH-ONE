
// MH ONE Language System

const translations = {

    ar: {
        home: "الرئيسية",
        dashboard: "لوحة التحكم",
        profile: "ملفي الشخصي",
        courses: "موادي الدراسية",
        logout: "تسجيل الخروج",
        welcome: "مرحباً بك في MH ONE",
        subtitle: "نظم حياتك الجامعية في مكان واحد",
        myCourses: "موادي الدراسية",
        studyLibrary: "مكتبة المذاكرة",
        schedule: "جدولي الدراسي",
        examCenter: "مركز الاختبارات",
        aiAssistant: "المساعد الدراسي الذكي",
        chapter: "الفصل الدراسي",
        explanation: "شرح الدرس",
        summary: "ملخص الدرس",
        questions: "أسئلة التدريب",
        back: "رجوع"
    },

    en: {
        home: "Home",
        dashboard: "Dashboard",
        profile: "My Profile",
        courses: "My Courses",
        logout: "Logout",
        welcome: "Welcome to MH ONE",
        subtitle: "Your University Life, All in One Place",
        myCourses: "My Courses",
        studyLibrary: "Study Library",
        schedule: "My Schedule",
        examCenter: "Exam Center",
        aiAssistant: "AI Study Assistant",
        chapter: "Chapter",
        explanation: "Chapter Explanation",
        summary: "Chapter Summary",
        questions: "Practice Questions",
        back: "Back"
    }

};

// Get saved language
let currentLanguage = localStorage.getItem("mhLanguage") || "en";

// Apply language
function applyLanguage() {

    document.documentElement.lang = currentLanguage;

    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    document.querySelectorAll("[data-translate]").forEach(element => {

        const key = element.getAttribute("data-translate");

        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }

    });

    const languageButton = document.getElementById("languageButton");

    if (languageButton) {
        languageButton.textContent =
            currentLanguage === "ar" ? "English" : "العربية";
    }

}

// Change language
function toggleLanguage() {

    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    localStorage.setItem("mhLanguage", currentLanguage);

    applyLanguage();

}

// Apply when page loads
document.addEventListener("DOMContentLoaded", function() {

    applyLanguage();

    const languageButton = document.getElementById("languageButton");

    if (languageButton) {
        languageButton.addEventListener("click", toggleLanguage);
    }

});
