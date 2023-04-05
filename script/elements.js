function navRunning() {
    const navBtn = document.querySelector('.nav-button');
    const nav = document.querySelector('.nav');

    navBtn.addEventListener('click', () => {
        const currentState = navBtn.getAttribute("data-state");
        if (!currentState || currentState === "closed") {
            navBtn.setAttribute("data-state", "opened");
            navBtn.setAttribute("aria-expanded", "true");
            nav.setAttribute("aria-expanded", "true");
        } else {
            navBtn.setAttribute("data-state", "closed");
            navBtn.setAttribute("aria-expanded", "false");
            nav.setAttribute("aria-expanded", "false");
        }
    })
    function navMobile(nav) {
        nav.classList.remove('nav_flex_row');
        nav.classList.add('nav_flex_column');
        nav.classList.add('nav_mobile');
        navBtn.classList.remove('display_none');
    }
    function navDesctop(nav, navBtn) {
        nav.classList.add('nav_flex_row');
        nav.classList.remove('nav_flex_column');
        nav.classList.remove('nav_mobile');
        navBtn.classList.add('display_none');
    }

    function elementResize(menu, menuBtn, block, blockDesc) {
        const currentState = navBtn.getAttribute("data-state");
        if (!currentState || currentState === "closed") {
            nav.setAttribute("aria-expanded", "false");
        } else {
            nav.setAttribute("aria-expanded", "true");
        }
        if (document.documentElement.clientWidth < 950) {
            navMobile(nav, navBtn);
        } else {
            navDesctop(nav, navBtn);
        }
    }
    elementResize(nav, navBtn);


    window.addEventListener('resize', () => {
        elementResize(nav, navBtn)
        navBtn.setAttribute("data-state", "closed");
        navBtn.setAttribute("aria-expanded", "false");

    })
    window.addEventListener("orientationchange", function () {
        elementResize(nav, navBtn);
        navBtn.setAttribute("data-state", "closed");
        navBtn.setAttribute("aria-expanded", "false");
    })
}

export { navRunning }