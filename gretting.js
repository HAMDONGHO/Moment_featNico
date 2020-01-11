const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const User_LS = "currentUser";
const Showing_Cn = "showing";

function saveName(text){
    localStorage.setItem(User_LS, text);
}

function handleSunmit(evnet){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForNam(){
    form.classList.add(Showing_Cn);
    form.addEventListener("submit", handleSunmit);
}

function paintGreeting(text){
    form.classList.remove(Showing_Cn);
    greeting.classList.add(Showing_Cn);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser ===null){
        askForNam();

    } else {
        paintGreeting(currentUser);

    }

}

function init(){
    loadName();
}

init();