// 1. element 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // string들은 대문자 변수로 저장해놓는 것이 JS에서는 오류 검출에 좋음

function onLoginSubmit(event) {
    event.preventDefault(); // 폼을 눌렀을 때 페이지를 새로고침하는 기본 동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value;

    // localStorage에 저장
    localStorage.setItem(USERNAME_KEY, username); // key: username, value: username
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // "Hello " + username과 같음
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// localStorage에 유저정보 유무 체크
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener
}
else {
    // show the greetings
    paintGreetings(savedUsername);
}