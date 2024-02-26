const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isMonkey = confirm("Are you a monkey?");

if(isMonkey === true){
    console.log("Welcome to Monkeylandia!");
} 
else {
    profileImage.src = "images/image2.jpg"; 
    firstNameSpan.innerHTML = "Cheetah";
    ageSpan.innerHTML = 80;
    statusSpan.innerHTML = "Monkeyman";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image4.jpg"; 
    firstNameSpan.innerHTML = "King Kong";
    ageSpan.innerHTML = 91;
    statusSpan.innerHTML = "Ape";
});
