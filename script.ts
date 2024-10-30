const summary = document.querySelector(".summary") as HTMLDivElement
const summaryBtn = document.querySelector(".summarybtn") as HTMLButtonElement
const skills = document.querySelector(".skills") as HTMLDivElement
const skillsBtn = document.querySelector(".skillsbtn") as HTMLButtonElement
const experience = document.querySelector(".experience") as HTMLDivElement
const experienceBtn = document.querySelector(".experiencebtn") as HTMLButtonElement
const education = document.querySelector(".education") as HTMLDivElement
const educationBtn = document.querySelector(".educationbtn") as HTMLButtonElement

summaryBtn.addEventListener("click",()=>{
    summary.classList.toggle("hidden")
    
})
skillsBtn.addEventListener("click",()=>{
    skills.classList.toggle("hidden")
    
})
experienceBtn.addEventListener("click",()=>{
    experience.classList.toggle("hidden")
    
})
educationBtn.addEventListener("click",()=>{
    education.classList.toggle("hidden")
})
    

const resumeName = document.getElementById("resumename") as HTMLParagraphElement
const resumeEmail = document.getElementById("resumeemail") as HTMLParagraphElement
const resumePhone = document.getElementById("resumephone") as HTMLParagraphElement
const resumeSkills = document.getElementById("resumeskills") as HTMLSpanElement
const resumeExperience = document.getElementById("resumeexperience") as HTMLParagraphElement
const resumeSummary = document.getElementById("resumesummary") as HTMLParagraphElement
const resumeEducation = document.getElementById("resumeeducation") as HTMLParagraphElement
const container = document.querySelector(".container") as HTMLDivElement

    
//Forms Handling fields
const namesInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLInputElement;
const summaryInput = document.getElementById("summary") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const form = document.getElementById("resumeForm") as HTMLFormElement;


form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    resumeName.innerText = namesInput.value;
    resumeEmail.innerText = emailInput.value;
    resumePhone.innerText = phoneInput.value;
    resumeSkills.textContent = skillsInput.value;
    resumeExperience.innerText = experienceInput.value
    resumeSummary.innerText = summaryInput.value
    resumeEducation.innerText = educationInput.value
    
    form.classList.add("hidden")
    container.classList.remove("hidden");

    const username = encodeURIComponent(resumeName.innerText.trim())
    const url = new URL(window.location.href)
    url.searchParams.set('user', username)
    window.history.pushState({ path: url.href }, "", url.href)
});

function download() {
    window.print()
}

const copyButton = document.getElementById('copyButton') as HTMLButtonElement;
const resumeUrl = window.location.href
copyButton.addEventListener('click', () => {
    copyToClipboard(resumeUrl)
    alert('Resume URL copied to clipboard!')
});

function copyToClipboard(text:string) {
    const Input = document.createElement('input')
    Input.value = text; 
    document.body.appendChild(Input)
    Input.select(); 
    document.execCommand('copy')
    document.body.removeChild(Input)
}