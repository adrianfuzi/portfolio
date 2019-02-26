//////////////////// Overlay Text Animation ////////////////////

const overlay = document.querySelectorAll('.projects__overlay');

for (let i = 0; i < overlay.length; i++) {
    const projectsHeading = document.querySelectorAll('.projects__heading');
    const projectsDescription = document.querySelectorAll('.projects__description');

    overlay[i].onmouseover = function() {
        updateClass(projectsHeading,'projects__heading-active','add');
        updateClass(projectsDescription, 'projects__description-active', 'add')
    }
    overlay[i].onmouseout = function() {
        updateClass(projectsHeading,'projects__heading-active','remove');
        updateClass(projectsDescription, 'projects__description-active', 'remove')
    }
}