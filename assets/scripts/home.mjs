function reusable() {
  return Promise.all([
    fetch('/components/nav.html')
      .then(res => res.text())
      .then(data => {
        const navbar = document.getElementById('navbar');
        if (navbar) navbar.innerHTML = data;
      }),

    fetch('/components/card.html')
      .then(res => res.text())
      .then(data => {
        const cardComp = document.getElementById('card-component');
        if (cardComp) cardComp.innerHTML = data;
      })
  ]);
}

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

    function closeMenu() {
        menu.classList.remove('bx-x');
        navList.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    const navLink = document.querySelectorAll('.nav-list a');

    navLink[0].addEventListener('click', closeMenu);
    navLink[1].addEventListener('click', closeMenu);
    navLink[2].addEventListener('click', closeMenu);
    navLink[3].addEventListener('click', closeMenu);
    navLink[4].addEventListener('click', closeMenu);
}


function card() {
    const products = [
        {
            title: "Keyboard Hall Effect",
            desc: "Switch magnetik ultra responsif",
            img: "/assets/img/keyboard.png"
        },
        {
            title: "Mechanical Keyboard",
            desc: "Tactile feel untuk kerja & gaming",
            img: "/assets/img/keyboard.png"
        },
        {
            title: "Low Profile Keyboard",
            desc: "Tipis, ringan, modern",
            img: "/assets/img/keyboard.png"
        },
        {
            title: "Low Profile Keyboard",
            desc: "Tipis, ringan, modern",
            img: "/assets/img/keyboard.png"
        },
        {
            title: "Low Profile Keyboard",
            desc: "Tipis, ringan, modern",
            img: "/assets/img/keyboard.png"
        },
        {
            title: "Low Profile Keyboard",
            desc: "Tipis, ringan, modern",
            img: "/assets/img/keyboard.png"
        },
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

function slider() {
    
    const slider = document.querySelector('.card-slider');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    // Scroll behavior
    nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
    });



}


export {reusable, toggleMenu, card, slider};
