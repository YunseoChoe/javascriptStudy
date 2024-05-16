const clock = document.querySelector("h2#clock");

// 매 초마다 새로운 Date object를 만듦 (= 시계)
function getClock() {
    const data = new Date(); // 현재 시간
    // console.log(data);
    const hours = String(data.getHours()).padStart(2, "0");
    const minutes = String(data.getMinutes()).padStart(2, "0");
    const seconds = String(data.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 즉시 호출 (00:00으로 안 뜨게 하기 위함)
setInterval(getClock, 1000); // 1초마다 호출
