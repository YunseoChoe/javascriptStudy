const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

// js를 먼저 작성하고 Html에 추가
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`; // 이미지 경로 저장
console.log(bgImage);
document.body.appendChild(bgImage); // 이미지 표시