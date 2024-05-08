// alert("hi");
// console.log(12345);

// let myName = "ys"; // let은 값 수정 가능
// myName = "sw"; // 'let'없이 값 변경 가능 (let은 선언할 때 필요)
// console.log(myName);


// const myAge = 20; // const는 값 수정 불가능
// myAge = 21; // Error
// console.log(myAge);

// const amIFat = false;
// console.log(amIFat);

// const dayArray = ["mon", "tue", "wed"];
// dayArray.push("thu");

// console.log(dayArray);

// Function
// function sayHello(C) {
//     console.log("Hello my name is " + C);
// }

// sayHello("yunseo");

// function minusFive(potato) {
//     console.log(potato - 5);
// }

// minusFive(6, 2, 1, 4);

// const calculator = {
//     add: function(a, b) {
//         alert(a + b);
//     },
//     sub: function(a, b) {
//         alert(a - b);
//     }
// };

// calculator.add(5, 1);
// calculator.sub(5, 1);

// const age = 96;
// function calculator(age) {
//     return age + 2;
// }

// const krAge = calculator(age);

// console.log(krAge);

// const age = parseInt(prompt("How old are you??"));

// if (isNaN(age)) {
//     console.log("Please write a number");
// }
// else {
//     console.log("Thank you for writing your age.");
// }

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);
// console.log(hellos.length);

const title = document.querySelector(".hello h1"); // page에서 element 찾아오기
// Step 1. find the element
const h1 = document.querySelector("div.hello:first-child h1");

// const title = document.querySelectorAll(".hello h1");

// const title1 = document.querySelector("#hello");
// const title2 = document.getElementById("hello");

// title.innerText = "Hello"; // Text 바꾸기

// console.log(title);
// console.log(title1);
// console.log(title2);

// console.dir(title);
// title.style.color = "blue";

// Step 3. react to the event
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor; // 변경될 수 있음
    if (currentColor === "blue") {
        newColor = "tomato";
    }   
    else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

function mouseenter() {
    console.log("mouse is here!");
    title.innerText = "Mouse is here!";
}

function mouseleave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS on WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOD");
}

// title.addEventListener("click", handleTitleClick); // event listen
// // title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", mouseenter); 
// title.addEventListener("mouseleave", mouseleave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// Step 2. listen the event
h1.addEventListener("click", handleTitleClick);

const h_1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const clickedClass = "clicked";
    // if (h_1.classList.contains(clickedClass)) {
    //     h_1.classList.remove(clickedClass);
    // }
    // else {
    //     h_1.classList.add(clickedClass);
    // }
    h_1.classList.toggle("clicked");
}

h_1.addEventListener("click", handleTitleClick);