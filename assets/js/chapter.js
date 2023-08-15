const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const chapterNum = urlParams.get('chapter');

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

const articleWrap = document.querySelector('.article_wrap');
fetchHTML(`/assets/includes/data${chapterNum}.html`)
    .then((html) => {
        articleWrap.innerHTML = html;
        changeText();
        goTop();

        const articleTitles = document.querySelectorAll('.article_title');
        articleTitles.forEach((articleTitle) => {
            const titleData = articleTitle.innerHTML;
            if(titleData === ''){
                articleTitle.innerHTML = '무제';
            }
        })
    });

const headingWrap = document.querySelector('.heading_wrap');
fetchHTML(`/assets/includes/heading${chapterNum}.html`)
    .then((html) => {
        headingWrap.innerHTML = html;
        subHeadingSet();
    });


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

const subHeadingSet = () => {
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