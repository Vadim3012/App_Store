const tick = document.querySelector('.tick'),
    click = document.querySelector('#click'),
    noneMenu = document.querySelector('#noneMenu');


click.addEventListener('click' , () => {
    if(noneMenu.classList.contains('disp') == true) {noneMenu.classList.remove('disp');}
    else {noneMenu.classList.add('disp');}
});

noneMenu.addEventListener('mouseleave', () => {
    noneMenu.classList.add('disp');
});


let slideIndex = 1;

function nextSlide() {
    slideShow(slideIndex += 1);
}

function previousSlide() {
    slideShow(slideIndex -= 1);
}


function currentSlide(n) {
    slideShow(slideIndex = n);
}

function slideShow (n) {
    let slides = document.getElementsByClassName('item');
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

slideShow(slideIndex);

const point = document.querySelector('.btn-up'),
      pointNone = document.querySelector('.btn-up_hide');

function showingAdd () {
    point.classList.remove('btn-up_hide');
}

function showingRemove () {
    point.classList.add('btn-up_hide');
}


window.addEventListener('scroll' , () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 400 ? showingAdd() : showingRemove();
});


point.addEventListener('click' , () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})






















