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

window.addEventListener('resize', function (){
    const widthWindow = window.innerWidth;

    if(widthWindow < 900){
        const subButton = document.getElementById('sub-button');
        const menuButton = document.getElementById('menu-button');
        const socialBar = document.getElementById('social-bar')
        const logoBar = document.getElementById('logo-bar');
        const videoSection = document.getElementById('video-container');
        const body = document.getElementById("main-container");
        const inEvidenza = document.getElementById("in-evidenza");
        socialBar.appendChild(subButton)
        logoBar.insertBefore(menuButton, logoBar.firstChild);
        body.insertBefore(videoSection, inEvidenza);
    }else{
        const subButton = document.getElementById('sub-button');
        const menuButton = document.getElementById('menu-button');
        const accountBar = document.getElementById('account-bar');
        const primaryNavList = document.getElementById('primary-nav-list');
        const videoSection = document.getElementById('video-container');
        const body = document.getElementById("main-container");
        const primoPiano = document.getElementById("primo-piano");
        accountBar.appendChild(subButton);
        primaryNavList.insertBefore(menuButton, primaryNavList.firstChild);
        body.insertBefore(videoSection, primoPiano);
    }

    const sidenav = document.getElementById('sidenav');

    if (sidenav.offsetWidth > 0 && widthWindow < 900) {
        sidenav.style.width = '100%';
    } else if (sidenav.offsetWidth > 0 && widthWindow > 899) {
        sidenav.style.width = '560px';
    }

})

window.addEventListener('load', function () {
    window.dispatchEvent(new Event('resize'));
});

//Slick slider

$(document).ready(function(){

    let $slider = $('.video-slider');

    $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false,
        accessibility: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

$(document).ready(function(){

    let $slider = $('.news-slider');

    $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false,
        accessibility: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});