const swiper_column = document.querySelectorAll('.swiper-slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 0;

next.addEventListener('click', () => {
    swiper_column[counter].classList.remove('active-item');
    counter++;
    if (counter === swiper_column.length) {
        counter = 0;
    }
    swiper_column[counter].classList.add('active-item');
});
prev.addEventListener('click', () => {
    swiper_column[counter].classList.remove('active-item');
    if (counter === 0) {
        counter = swiper_column.length;
    }
    counter--;
    swiper_column[counter].classList.add('active-item');
});
