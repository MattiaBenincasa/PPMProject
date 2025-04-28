
function openNav() {
    const sidebar = document.getElementById('sidenav');
    document.getElementById('overlay').style.display = "block";
    sidebar.style.padding = '16px';

    if (window.innerWidth < 900) {
        sidebar.style.width = "100%";
    } else {
        sidebar.style.width = "560px";
    }

}

function closeNav() {
    document.getElementById('sidenav').style.width = "0";
    document.getElementById('sidenav').style.padding = "0";
    document.getElementById('overlay').style.display = "none";

}

document.getElementById('overlay').addEventListener("click", closeNav)

window.addEventListener('resize', function () {
    const widthWindow = window.innerWidth;
    const sidenav = document.getElementById('sidenav');

    if (sidenav.offsetWidth > 0 && widthWindow < 900) {
        sidenav.style.width = '100%';
    } else if (sidenav.offsetWidth > 0 && widthWindow > 899) {
        sidenav.style.width = '560px';
    }
})