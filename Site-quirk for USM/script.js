
let FagRow = document.querySelectorAll('.FAQ__row');
console.log(FagRow);

document.querySelectorAll('.FAQ__row').forEach(function(row) {
    row.addEventListener('click', function() {
        document.querySelectorAll('.FAQ__guestion').forEach(function(question) {
            question.classList.remove('active');
        });
        var question = this.closest('.FAQ__guestion');
        if (question) {
            question.classList.add('active');
        }
    });
});


let headerElementList = document.querySelectorAll('.header__element-list');

headerElementList.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active-element');
    });
});

let headerButter = document.querySelector('.header__butter');
let headerList = document.querySelector('.header__list');


headerButter.addEventListener('click', () => {
    headerButter.classList.toggle('active');
    headerList.classList.toggle('active');
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 785) {
        swiperTeam.params.slidesPerView = 1;
    } else {
        swiperTeam.params.slidesPerView = 3;
    }
    swiperTeam.update();
});

function getPosition(element) {
    var rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    };
}

var navBar = document.querySelector('.header__bloc');

window.addEventListener('scroll', function() {
    var navBarPosition = getPosition(navBar);
    if (navBarPosition.top >= 200) {
        navBar.classList.add('active-background');
      } else {
        navBar.classList.remove('active-background');
    }
});

function initMap() {
    var myLatLng = {lat: 52.375889, lng: 4.891306};
  
    var map = new google.maps.Map(document.querySelector('.contact__map'), {
      zoom: 15,
      center: myLatLng
    });
}

const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
    function animOnscroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active-item');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active-item');
                }
            }
        }
    }
    
    window.addEventListener('scroll', animOnscroll);
    
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    animOnscroll();
}

var numberElements = document.querySelectorAll('.fitness-app__numbers-number');

var targetValues = [140, 50, 4.8];

var duration = 1500;

numberElements.forEach(function(element, index) {
    var currentValue = 0;

    var step = (targetValues[index] / duration) * 10;

    var interval = setInterval(function() {
        currentValue += step;
        if (currentValue >= targetValues[index]) {
            clearInterval(interval);
            currentValue = targetValues[index];
        }
        if (index === 2) {
            element.textContent = currentValue.toFixed(1) + '/5';
        } else {
            element.textContent = Math.round(currentValue) + '+';
        }
    }, 10);
});