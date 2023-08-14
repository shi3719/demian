//100vh 브라우저 환경 커버하기
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

//남은시간 표시하기
const timeCalc = () => {
    const time = document.querySelector('#time');

    const endTime = new Date("2023-08-15");
    const todayTime = new Date();
    const leftTime = endTime - todayTime;

    const leftDay = String(Math.floor(leftTime / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const leftHour = String(Math.floor((leftTime / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const leftMin = String(Math.floor((leftTime / (1000 * 60)) % 60)).padStart(2, "0");
    const leftSec = String(Math.floor(leftTime / 1000 % 60)).padStart(2, "0");

    time.innerHTML = `${leftDay}:${leftHour}:${leftMin}`
}

//html 넣어주기
function fetchHTML(url) {
    return fetch(url)
        .then((response) => response.text())
        .catch((error) => {
            console.error('Error fetching HTML:', error);
        });
}

const header = document.querySelector('header');
fetchHTML('/assets/includes/header.html')
    .then((html) => {
        header.innerHTML = html;

        timeCalc();
        setInterval(timeCalc, 1000);
    });
