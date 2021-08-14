const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"
];

const backImage = images[Math.floor(Math.random() * images.length)];  //Math.floor 소수점을 제외한 정수, (Math.random() 랜덤 숫자, * quotes.length

const bgImage = document.createElement("img");   // html element 생성

bgImage.src = `img/${backImage}`;   // 

console.log(bgImage);   //src, 이미지 이름

document.body.appendChild(bgImage); //body에 append..