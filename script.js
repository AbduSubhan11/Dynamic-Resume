"use strict";
const summary = document.querySelector(".summary");
const summaryBtn = document.querySelector(".summarybtn");
const skills = document.querySelector(".skills");
const skillsBtn = document.querySelector(".skillsbtn");
const experience = document.querySelector(".experience");
const experienceBtn = document.querySelector(".experiencebtn");
const education = document.querySelector(".education");
const educationBtn = document.querySelector(".educationbtn");
summaryBtn.addEventListener("click", () => {
    summary.classList.toggle("hidden");
});
skillsBtn.addEventListener("click", () => {
    skills.classList.toggle("hidden");
});
experienceBtn.addEventListener("click", () => {
    experience.classList.toggle("hidden");
});
educationBtn.addEventListener("click", () => {
    education.classList.toggle("hidden");
});
const resumeName = document.getElementById("resumename");
const resumeEmail = document.getElementById("resumeemail");
const resumePhone = document.getElementById("resumephone");
const resumeSkills = document.getElementById("resumeskills");
const resumeExperience = document.getElementById("resumeexperience");
const resumeSummary = document.getElementById("resumesummary");
const resumeEducation = document.getElementById("resumeeducation");
const container = document.querySelector(".container");
//Forms Handling fields
const namesInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const skillsInput = document.getElementById("skills");
const experienceInput = document.getElementById("experience");
const summaryInput = document.getElementById("summary");
const educationInput = document.getElementById("education");
const form = document.getElementById("resumeForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    resumeName.innerText = namesInput.value;
    resumeEmail.innerText = emailInput.value;
    resumePhone.innerText = phoneInput.value;
    resumeSkills.textContent = skillsInput.value;
    resumeExperience.innerText = experienceInput.value;
    resumeSummary.innerText = summaryInput.value;
    resumeEducation.innerText = educationInput.value;
    form.classList.add("hidden");
    container.classList.remove("hidden");
    const username = encodeURIComponent(resumeName.innerText.trim());
    const url = new URL(window.location.href);
    url.searchParams.set("user", username);
    window.history.pushState({ path: url.href }, "", url.href);
});
function download() {
    window.print();
}
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("user");
    if (username) {
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            resumeName.innerText = resumeData.name;
            resumeEmail.innerText = resumeData.email;
            resumePhone.innerText = resumeData.phone;
            resumeSkills.textContent = resumeData.skills;
            resumeExperience.innerText = resumeData.experience;
            resumeSummary.innerText = resumeData.summary;
            resumeEducation.innerText = resumeData.education;
            form.classList.add("hidden");
            container.classList.remove("hidden");
        }
        else {
            alert("Resume data not found for this user.");
        }
    }
    else {
        form.classList.remove("hidden");
        container.classList.add("hidden");
    }
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    resumeName.innerText = namesInput.value;
    resumeEmail.innerText = emailInput.value;
    resumePhone.innerText = phoneInput.value;
    resumeSkills.textContent = skillsInput.value;
    resumeExperience.innerText = experienceInput.value;
    resumeSummary.innerText = summaryInput.value;
    resumeEducation.innerText = educationInput.value;
    form.classList.add("hidden");
    container.classList.remove("hidden");
    const resumeData = {
        name: namesInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        skills: skillsInput.value,
        experience: experienceInput.value,
        summary: summaryInput.value,
        education: educationInput.value,
    };
    localStorage.setItem(namesInput.value.trim(), JSON.stringify(resumeData));
    const username = encodeURIComponent(namesInput.value.trim());
    const url = new URL(window.location.href);
    url.searchParams.set("user", username);
    window.history.pushState({ path: url.href }, "", url.href);
});
function copyToClipboard(text) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}
const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
    const currentUrl = `${window.location.origin}?user=${encodeURIComponent(namesInput.value.trim())}`;
    copyToClipboard(currentUrl);
    alert("Resume URL copied to clipboard!");
});
