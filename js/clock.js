const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");   // String 으로 바꿔줌  .padStart(2, "0") string을 2번째까지 표기, 1자리일경우 앞에 0 추가
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;   //  시간:분:초 
}

getClock();  //바로 표시되도록 불러옴
setInterval(getClock, 1000);  //1초에 한번씩 불러오도록 함