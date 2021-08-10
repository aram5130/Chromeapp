const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmint(event) {
    event.preventDefault();  //브라우저의 기본동작(페이지 새로고침) 막음. submit할때 원래의 동작은 멈추게 함
    loginForm.classList.add(HIDDEN_CLASSNAME);  // form에 class hidden을 추가해서 화면에서 보이지 않게 한다
    const username = loginInput.value;   // login input에 값을 username(변수)으로 저장,
    localStorage.setItem(USERNAME_KEY, username);   // localstorage에 값(username)을 저장.
    painGreetins(username)  // username을 인자로 받음.

}

function painGreetins(username) {     // 반복해서 나오기 때문에 함수로 만듦
    greeting.innerText = `Hello ${username}`; // ``의 내용을 입력. "Hello" + username 과 동일하게 사용할 수 있음.
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1에서 class hidden을 삭제해서 화면에서 보여지게 한다.
}


const saveUsername = localStorage.getItem(USERNAME_KEY);  //  localStorage 정보는 받아옴..

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);  // saveUsername 값이 null이라면 hidden class를 지워주고 form 보여줌.
    loginForm.addEventListener("submit", onLoginSubmint);  // submit evnet가 발생하면 function onLoginSubmint을 불러옴
} else {
    painGreetins(saveUsername);  // saveUsername을 인자로 받음.
}
