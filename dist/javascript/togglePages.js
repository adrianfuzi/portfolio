//////////////////// Toggle Pages & Load Home ////////////////////

const home = document.getElementById('home');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

function loadPage(id) { 
    home.style.display = "none";
    about.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    document.getElementById(id).style.display = 'flex';
}

window.onload = loadPage('home');