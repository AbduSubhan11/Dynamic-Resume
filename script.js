//Toggle Button Handling
var summary = document.querySelector(".summary");
var summaryBtn = document.querySelector(".summarybtn");
var skills = document.querySelector(".skills");
var skillsBtn = document.querySelector(".skillsbtn");
var experience = document.querySelector(".experience");
var experienceBtn = document.querySelector(".experiencebtn");
var education = document.querySelector(".education");
var educationBtn = document.querySelector(".educationbtn");
//ALL TOGGLE BUTTONS HANDLING
summaryBtn.addEventListener("click", function () {
    summary.classList.toggle("hidden");
});
skillsBtn.addEventListener("click", function () {
    skills.classList.toggle("hidden");
});
experienceBtn.addEventListener("click", function () {
    experience.classList.toggle("hidden");
});
educationBtn.addEventListener("click", function () {
    education.classList.toggle("hidden");
});
//Resume Data for Forms
var resumeName = document.getElementById("resumename");
var resumeEmail = document.getElementById("resumeemail");
var resumePhone = document.getElementById("resumephone");
var resumeSkills = document.getElementById("resumeskills");
var resumeExperience = document.getElementById("resumeexperience");
var resumeEducation = document.getElementById("resumeeducation");
var container = document.querySelector(".container");
//Forms Handling fields
var namesInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var skillsInput = document.getElementById("skills");
var experienceInput = document.getElementById("experience");
var educationInput = document.getElementById("education");
var form = document.getElementById("resumeForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    resumeName.innerText = namesInput.value;
    resumeEmail.innerText = emailInput.value;
    resumePhone.innerText = phoneInput.value;
    resumeSkills.textContent = skillsInput.value;
    resumeExperience.innerText = experienceInput.value;
    resumeEducation.innerText = educationInput.value;
    form.classList.add("hidden");
    container.classList.remove("hidden");
    // Update URL with the latest username
    var username = resumeName.innerText;
    var url = new URL(window.location.href);
    url.searchParams.set('user', username);
    window.history.pushState({ path: url }, "", url);
});
function download() {
    window.print();
}
