function toggleMenu() {
    const menu = document.querySelector('#menu-icon');
    const navList = document.querySelector('.nav-list');
    const body =  document.body;

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navList.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    console.log(`this is test`)
}

export {toggleMenu};