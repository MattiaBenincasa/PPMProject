window.addEventListener('resize', function (){
    let width = window.innerWidth;

    if(width < 900){
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
})

window.addEventListener('load', function () {
    window.dispatchEvent(new Event('resize'));
});