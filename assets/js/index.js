w3.includeHTML();

//100vh 브라우저 환경 커버하기
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

//남은시간 표시하기
const time = document.querySelector('#time');

const timeCalc = () => {
    const endTime = new Date("2023-09-01");
    const todayTime = new Date();
    const leftTime = endTime - todayTime;

    const leftDay = String(Math.floor(leftTime / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const leftHour = String(Math.floor((leftTime / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const leftMin = String(Math.floor((leftTime / (1000 * 60)) % 60)).padStart(2, "0");
    const leftSec = String(Math.floor(leftTime / 1000 % 60)).padStart(2, "0");

    time.innerHTML = `${leftDay}:${leftHour}:${leftMin}`
}

timeCalc();
setInterval(timeCalc, 1000);

//sub_heading btn 제어하기

const getIndexOfElementInParent = (element) => {
    const parent = element.parentNode;
    if (!parent) {
        return -1;
    }

    const children = parent.children;
    let index = -1;

    for (let i = 0; i < children.length; i++) {
        if (children[i] === element) {
            // 현재 요소를 찾으면 해당 인덱스를 반환합니다.
            index = i;
            break;
        }
    }

    return index;
}

const viewArticle = (num) => {
    const articleWraper = document.querySelector('.article_wrap');

    const articleWraps = Array.from(articleWraper.children);
    articleWraps.forEach((articleWrap) => {
        articleWrap.classList.remove('on');
    })

    articleWraps[num].classList.add('on');

    window.scrollTo({
        top: 0,
        left: 0
    })
}

const subHeadingBtns = document.querySelectorAll('.sub_heading');
subHeadingBtns.forEach((subHeadingBtn) => {
    subHeadingBtn.addEventListener('click', () => {
        subHeadingBtns.forEach((subHeadingBtn) => {
            subHeadingBtn.classList.remove('on');
        })
        subHeadingBtn.classList.add('on');
        const num = getIndexOfElementInParent(subHeadingBtn);
        viewArticle(num);
    })
})


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