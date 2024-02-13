const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const chapterNum = urlParams.get('piece');

//페이지 이동하기

//enter 치환하기
function changeText() {
    const entertexts = document.querySelectorAll('.enter');

    entertexts.forEach((entertext) => {
        let textContent = entertext.innerHTML;

        textContent = textContent.replace(/\r\n/ig, '<br>');
        textContent = textContent.replace(/\\n/ig, '<br>');
        textContent = textContent.replace(/\n/ig, '<br>');

        entertext.innerHTML = textContent;
    });
}

const pieceWrap = document.querySelector('.piece_wrap');
fetchHTML(`/assets/includes/piece${chapterNum}.html`)
    .then((html) => {
        pieceWrap.innerHTML = html;
        changeText();
        goTop();
        headingOn();
        thirdListScroll();
    });

const thirdHeadingWrap = document.querySelector('.third_heading_wrap');
const headingOn = () => {
    thirdHeadingWrap.children[`${Number(chapterNum) - 1}`].classList.add('on');
}

const third = document.querySelector('.third');
const thirdListScroll = () => {
    if(Number(chapterNum) < 5){
        third.scrollLeft = 0;
    }else if(Number(chapterNum) >= 5 && Number(chapterNum) < 8){
        third.scrollLeft = 210;
    }else if(Number(chapterNum) >= 8 && Number(chapterNum) < 10){
        third.scrollLeft = 300;
    }
}

const goTop = () => {
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
}