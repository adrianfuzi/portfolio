//////////////////// Navbar Set Active Class ////////////////////

const navItem = document.querySelectorAll('.side-nav__item');

for (let i = 0; i < navItem.length; i++) {
    navItem[i].onclick = function() {
        updateClass(navItem,'side-nav__item--active','remove')
        if (!this.classList.contains('side-nav')) {
            this.classList.add('side-nav__item--active');
        }
    }
}

function updateClass(element,className,action) {
    for (let i = 0; i < element.length; i++) {
        element[i].classList[action](className);
    }
}