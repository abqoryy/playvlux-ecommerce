function toggleMenu() {
    const menu = document.querySelector('#menu-icon');
    const navList = document.querySelector('.nav-list');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navList.classList.toggle('open');
        document.documentElement.classList.toggle('no-scroll');

    }

}

export {toggleMenu}
