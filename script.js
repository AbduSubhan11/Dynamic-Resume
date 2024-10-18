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
const resumeEducation = document.getElementById("resumeeducation");
const container = document.querySelector(".container");
//Forms Handling fields
const namesInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const skillsInput = document.getElementById("skills");
const experienceInput = document.getElementById("experience");
const educationInput = document.getElementById("education");
const form = document.getElementById("resumeForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    resumeName.innerText = namesInput.value;
    resumeEmail.innerText = emailInput.value;
    resumePhone.innerText = phoneInput.value;
    resumeSkills.textContent = skillsInput.value;
    resumeExperience.innerText = experienceInput.value;
    resumeEducation.innerText = educationInput.value;
    form.classList.add("hidden");
    container.classList.remove("hidden");
    const username = encodeURIComponent(resumeName.innerText.trim());
    const url = new URL(window.location.href);
    url.searchParams.set('user', username);
    window.history.pushState({ path: url.href }, "", url.href);
});
function download() {
    window.print();
}
const copyButton = document.getElementById('copyButton');
const resumeUrl = window.location.href;
copyButton.addEventListener('click', () => {
    copyToClipboard(resumeUrl);
    alert('Resume URL copied to clipboard!');
});
function copyToClipboard(text) {
    const Input = document.createElement('input');
    Input.value = text;
    document.body.appendChild(Input);
    Input.select();
    document.execCommand('copy');
    document.body.removeChild(Input);
}
