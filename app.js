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
// const title = document.querySelectorAll(".hello h1");

// const title1 = document.querySelector("#hello");
// const title2 = document.getElementById("hello");

// title.innerText = "Hello"; // Text 바꾸기

// console.log(title);
// console.log(title1);
// console.log(title2);

console.dir(title);
title.style.color = "blue";

function handleTitleClick() {
    console.log("title was clicked");
    title.style.color = "red";
}

function mouseenter() {
    console.log("mouse is here!");
    title.innerText = "Mouse is here!";
}

function mouseleave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick); // event listen
// title.onclick = handleTitleClick;
title.addEventListener("mouseenter", mouseenter); 
title.addEventListener("mouseleave", mouseleave);