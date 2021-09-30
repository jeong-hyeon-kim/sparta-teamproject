// 화면 너비//
var windowWidth = $( window ).width();


let slideNext = document.querySelector(".slide-next");
let slidePrev = document.querySelector(".slide-prev");

let qnaBox = document.querySelector(".qna-showlist");
let card = document.querySelectorAll(".qna-showlist li");
let currentIndex = 0;
let cardCount = card.length;
let cardWidth = 330;
let cardMargin = 20;

makeClone();

function makeClone() {
    for (var i = 0; i < cardCount; i++) {
        var cloneCard = card[i].cloneNode(true);
        cloneCard.classList.add('clone');
        qnaBox.appendChild(cloneCard);
    }
    for (var i =cardCount -1; i>=0; i--) {
        var cloneCard = card[i].cloneNode(true);
        cloneCard.classList.add('clone');
        qnaBox.prepend(cloneCard);
    }
    updateWidth();
}

function updateWidth() {
    var currentCards = document.querySelectorAll(".qna-showlist li");
    var newCardCount = currentCards.length;

    var newWidth = (cardWidth + cardMargin) * newCardCount - cardMargin + 'px';
    qnaBox.style.width = newWidth;
}



//이전 버전
// qnaBox.style.width = (cardWidth + cardMargin) * cardCount - cardMargin + 'px';

// function moveSlide1(num) {
//     qnaBox.style.left = (-num * 740 + 'px');
//     currentIndex = num;
// };


// slideNext.addEventListener('click', function() {
//     if (currentIndex < 2){
//         moveSlide1(currentIndex + 1);
//         console.log(currentIndex);
//     } else {
//         moveSlide1(0);
//     }
// })

// slidePrev.addEventListener('click', function() {
//     if (currentIndex > 0){
//         moveSlide1(currentIndex - 1);
//         console.log(currentIndex);
//     } else {
//         moveSlide1(2);
//     }
// })