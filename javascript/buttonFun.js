//////////////////// Button Functionality ////////////////////
// Projects:
document.getElementById('btnProjects').onclick = function() {
    const navProjects = document.getElementById('navProjects');
    const navHome = document.getElementById('navHome');
    navProjects.classList.add('side-nav__item--active');
    navHome.classList.remove('side-nav__item--active');

    loadPage('projects');
}
// Contact:
document.getElementById('btnGetInTouch').onclick = function() {
    const navContact = document.getElementById('navContact');
    const navProjects = document.getElementById('navProjects');
    navContact.classList.add('side-nav__item--active');
    navProjects.classList.remove('side-nav__item--active');

    loadPage('contact');
}