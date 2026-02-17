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


function card() {
    const products = [
        {
            title: "Keyboard Hall Effect",
            desc: "Switch magnetik ultra responsif",
            img: "assets/img/keyboard.png"
        },
        {
            title: "Mechanical Keyboard",
            desc: "Tactile feel untuk kerja & gaming",
            img: "assets/img/keyboard.png"
        },
        {
            title: "Low Profile Keyboard",
            desc: "Tipis, ringan, modern",
            img: "assets/img/keyboard.png"
        }
    ];


    const container = document.querySelector(".card-container");

    products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-img">
        <img src="${product.img}" alt="${product.title}">
        </div>
        <div class="card-desc">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-desc">${product.desc}</p>
        </div>
    `;

    container.appendChild(card);
    });

}


export {toggleMenu, card};
