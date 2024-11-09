const summary = document.querySelector(".summary") as HTMLDivElement;
const summaryBtn = document.querySelector(".summarybtn") as HTMLButtonElement;
const skills = document.querySelector(".skills") as HTMLDivElement;
const skillsBtn = document.querySelector(".skillsbtn") as HTMLButtonElement;
const experience = document.querySelector(".experience") as HTMLDivElement;
const experienceBtn = document.querySelector(
  ".experiencebtn"
) as HTMLButtonElement;
const education = document.querySelector(".education") as HTMLDivElement;
const educationBtn = document.querySelector(
  ".educationbtn"
) as HTMLButtonElement;

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

const resumeName = document.getElementById(
  "resumename"
) as HTMLParagraphElement;
const resumeEmail = document.getElementById(
  "resumeemail"
) as HTMLParagraphElement;
const resumePhone = document.getElementById(
  "resumephone"
) as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeskills") as HTMLSpanElement;
const resumeExperience = document.getElementById(
  "resumeexperience"
) as HTMLParagraphElement;
const resumeSummary = document.getElementById(
  "resumesummary"
) as HTMLParagraphElement;
const resumeEducation = document.getElementById(
  "resumeeducation"
) as HTMLParagraphElement;
const container = document.querySelector(".container") as HTMLDivElement;

//Forms Handling fields
const namesInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const experienceInput = document.getElementById(
  "experience"
) as HTMLInputElement;
const summaryInput = document.getElementById("summary") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const form = document.getElementById("resumeForm") as HTMLFormElement;


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
    } else {
      alert("Resume data not found for this user.");
    }
  } else {
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

function copyToClipboard(text: string) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

const copyButton = document.getElementById("copyButton") as HTMLButtonElement;
copyButton.addEventListener("click", () => {
  const currentUrl = `${window.location.origin}?user=${encodeURIComponent(
    namesInput.value.trim()
  )}`;
  copyToClipboard(currentUrl);
  alert("Resume URL copied to clipboard!");
});
