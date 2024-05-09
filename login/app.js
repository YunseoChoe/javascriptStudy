// 1. element 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault(); // 폼을 눌렀을 때 페이지를 새로고침하는 기본 동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value;
    // localStorage에 저장
    localStorage.setItem("username", username); // key: username, value: username
    greeting.innerText = `Hello ${username}`; // "Hello " + username과 같음
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);