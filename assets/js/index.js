//100vh 브라우저 환경 커버하기
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

//남은시간 표시하기
// const timeCalc = () => {
//     const time = document.querySelector('#time');

//     // 현재 시스템 시간을 UTC 시간으로 가져옴
//     const todayTimeUTC = new Date().getTime();
//     // UTC 시간을 한국 시간으로 변환
//     const koreaTimeOffset = 9 * 60 * 60 * 1000; // 한국은 UTC+9
//     const todayTimeKorea = new Date(todayTimeUTC + koreaTimeOffset);

//     const endTime = new Date("2023-09-10T00:00:00+09:00");
//     const endTimeKorea = new Date(endTime.getTime() + koreaTimeOffset);

//     const leftTime = endTimeKorea - todayTimeKorea;

//     const leftDay = String(Math.floor(leftTime / (1000 * 60 * 60 * 24))).padStart(2, "0");
//     const leftHour = String(Math.floor((leftTime / (1000 * 60 * 60)) % 24)).padStart(2, "0");
//     const leftMin = String(Math.floor((leftTime / (1000 * 60)) % 60)).padStart(2, "0");
//     const leftSec = String(Math.floor((leftTime / 1000) % 60)).padStart(2, "0");

//     if(leftDay <= 0){
//         if(leftHour <= 0 && leftMin <= 0){
//             time.innerHTML = `CLOSED`
//         }else{
//             time.innerHTML = `${leftHour}:${leftMin}:${leftSec}`
//         }
//     }else{
//         time.innerHTML = `${leftDay}:${leftHour}:${leftMin}`
//     }
// }

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

        // timeCalc();
        // setInterval(timeCalc, 1000);
    });

//상단으로 바로가기 버튼
const topBtns = document.querySelectorAll('.top_btn');
topBtns.forEach((topBtn) => {
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
})