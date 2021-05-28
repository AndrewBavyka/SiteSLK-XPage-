//---------------------------------- БУРГЕР МЕНЮ-------------------------------//


$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//---------------------------------- Play/Stop кнопка-------------------------------//
const buttonVideo = document.querySelector(`.video__btn`);
const videoContent = document.querySelector(`.header__video__content`);

let i = 1;

buttonVideo.addEventListener(`click`, () => {
    if (i % 2 == 1) {
        videoContent.pause();
    } else {
        videoContent.play();
    }
    i++;

});







// const tab = document.querySelectorAll(".tabs__item");
// const tabContent = document.querySelectorAll(".tabs-content__advantages");
// const backTabActive = document.querySelectorAll(".tabs__icon");

// tab[0].classList.add("btn__active-tab");

// tab.forEach((item, i) => {
//     item.addEventListener("click", (event) => {
//         event.preventDefault();

//         tab.forEach(item => {
//             item.classList.remove("btn__active-tab");
//         });
//         tab[i].classList.toggle("btn__active-tab");

//         tabContent.forEach(item => {
//             item.classList.remove("active-tab");
//         });
//         tabContent[i].classList.toggle("active-tab");

//     });
// })