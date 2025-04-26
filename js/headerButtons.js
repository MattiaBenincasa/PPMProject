window.addEventListener('resize', function (){
    let width = window.innerWidth;

    if(width < 900){
        const subButton = document.getElementById('sub-button');
        const menuButton = document.getElementById('menu-button');
        const socialBar = document.getElementById('social-bar')
        const logoBar = document.getElementById('logo-bar');
        socialBar.appendChild(subButton)
        logoBar.insertBefore(menuButton, logoBar.firstChild);
    }else{
        const subButton = document.getElementById('sub-button');
        const menuButton = document.getElementById('menu-button');
        const accountBar = document.getElementById('account-bar');
        const primaryNavList = document.getElementById('primary-nav-list');
        accountBar.appendChild(subButton);
        primaryNavList.insertBefore(menuButton, primaryNavList.firstChild);
    }
})

window.addEventListener('load', function () {
    window.dispatchEvent(new Event('resize'));
});