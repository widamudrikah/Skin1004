const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenClass= 'left-0';
const navCloseClass= '-left-[300px]';
const arrowLeftClass= 'ri-arrow-left-s-line';
const arrowRightClass= 'ri-arrow-right-s-line';


closeBtn.addEventListener('click', ()=> {
     mobileNav.classList.toggle(navOpenClass);
     mobileNav.classList.toggle(navCloseClass);

     closeBtnIcon.classList.toggle(arrowLeftClass);
     closeBtnIcon.classList.toggle(arrowRightClass);
});

// SLIDER 
const swiper = new Swiper('.swiper', {
     // If we need pagination
     pagination: {
       el: '.swiper-pagination',
       clickabell: true
     },
   
});

// var faq

const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.className = `${iconClass} text-2xl`; // Menggunakan className untuk mengubah kelas CSS dari ikon
    });
});