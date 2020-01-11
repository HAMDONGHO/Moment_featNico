/*
const a=221; //const는 바꾸고 싶지 않고 싶을때!! 일반적으로 이것을 쓰자!
let b = a-5; //선언하는것, 바뀌어도 상관없으면 let을 쓰면됨
var c=3; // var(variable=상수)도 let처럼 바뀌지만 호이스팅됨
const name = "Dongho"; //""안에 넣으면 String(텍스트)
const wat = true; // boolean (텍스트가 아냐)
const wat2 = 6; // number
const wat3 = 3.24; //float
const monday = "Mon";
const tue = "Tue";
const thu = "Thu";
const fri = "Fri";
const dayofweek = ["mon","tue","wed","thu","fir","sat"]
const my = {
    name: "dongho",
    age: "28",
    gender: "Male",
    inHandsome:true,
    favmovies: ["Along the gods", "Loard of king"],
    favfood: [
        {
            name: "kimchi",
            fatty: false
        },
        {
            name: "Cheese burger",
            fatty: true
        }
    ]
}


console.log(monday, thu, tue, fri);
console.log(dayofweek);
console.log(dayofweek[0]);
console.log(my);
my.age = "27"
console.log(my.age);
console.log(my.favfood);
console.log(my.favmovies);
console.log(b, a, c, name, wat, wat2, wat3);
console.log(console) //console이란 object에 log라는 내장함수인거

function sayHello(x, y){ //2개의 argument
    console.log(x,'Hello'); //""든 ''든 같은 String인데 하나썻으면 동일하게
    console.log("you are",y,"years of age");
    console.log(`Hello ${x} you are ${y} years old`); //`은 아주 좋아!
    return console.log(`Hello ${x} you are ${y} years old`);
}   

sayHello("Dongho", 27); //dongho는 argument, parameter(인자)이고 받아서 함수가 받아 사용

const greetdongho = sayHello("Dongho", 28)

console.log(greetdongho) //undefined찍힘! greetdongho의 값은 sayHello 함수의 리턴값이라 그럼


const calculater = {
    plus: function(a, b) {
        return a+b;
    },

    min: function(a, b) {
        return a-b;
    },

    mul: function(a, b) {
        return a*b;
    },

    div: function(a,b){
        return a/b;
    }

}
const plus = calculater.plus(5,5);
console.log(plus);
console.log(calculater.min(5,3));
console.log(calculater.mul(6,3));
console.log(calculater.div(6,3));

console.log(document);
const title = document.querySelector("#pract");
title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = "I own you";


const title = document.querySelector("#pract");
function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);



if(10 > 5) { // ===은 체크하는것
    console.log("Hi");
} else {
    console.log("ho");
}


const age = prompt("How old are you"); //팝업되어서 물어봄 alert같은거
console.log(age);

if(age >= 18 && age <= 21){
    console.log('you can drink but you should not');
} else if(age > 21){
    console.log('go ahed');
} else {
    console.log('you cant');
}


//왓다갓다하면서 title색 바꾸기
const title = document.querySelector("#pract");
const Base_color="rgb(52, 73, 94)";
const Other_color = "#ff7979";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === Base_color){
        title.style.color = Other_color;
    }
    else {
        title.style.color = Base_color;
    }
}

function init(){
    title.style.color = Base_color;
    title.addEventListener("mouseenter", handleClick);
}
init();

function handleOffline(){
    console.log("bye");
}
function handleOnline(){
    console.log("welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);



const title = document.querySelector("#pract");

const Click_class = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== Click_class){
        title.className = Click_class;
    } else {
        title.className == "";
    }

}

function init(){
    title.addEventListener("click", handleClick);
}
init();



const title = document.querySelector("#pract");

const Click_class = "clicked";

function handleClick(){
    const hasclass = title.classList.contains(Click_class);
    if(hasclass){
        title.classList.remove(Click_class);
    } else {
        title.classList.add(Click_class);
    }

}

function init(){
    title.addEventListener("click", handleClick);
}
init();

*/

//toggle사용하기! 요약하는 역할임 함수 역할을 해줌

const title = document.querySelector("#pract");

const Click_class = "clicked";

function handleClick(){
    title.classList.toggle(Click_class);    
}

function init(){
    title.addEventListener("click", handleClick);
}
init();