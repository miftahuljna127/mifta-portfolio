// Navbar 
const menu = document.querySelector('.menu');
const menuItem = document.querySelector('.menuItem');
const hamburger = document.querySelector('.hamburger');
const openMenu = document.querySelector('.nav-toggle__open');
const closeMenu = document.querySelector('.nav-toggle__close');
const logo = document.querySelector('.logo');

function toggleMenu() {
  if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    logo.style.visibility = 'hidden';
    
  } else {
    menu.classList.add('hidden');
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    logo.style.visibility = 'visible';
  }
}

hamburger.addEventListener("click", toggleMenu);

// const menuItems = document.querySelectorAll(".menuItem");
// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )



window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// Filter

let button = document.querySelectorAll('.btnFilter');
let itemProject = document.querySelectorAll('.projectItem');
let textColor = document.querySelector('text-gray-600');

for (let i = 0; i<button.length; i++) {
  button[i].addEventListener('click', function(){
    for(let j = 0; j < button.length; j++){
      button[j].classList.remove('border-solid', 'border-b-2', 'border-orange-200', 'text-orange-600');
      button[j].classList.replace('active:text-orange-600', 'text-gray-600');
    }
    this.classList.add('border-solid', 'border-b-2', 'border-orange-200', 'text-orange-600');

    let dataFilter = this.getAttribute('data-filter');

    for (let k = 0; k < itemProject.length; k++){
      itemProject[k].classList.remove('active');
      itemProject[k].classList.add('hidden');

      if(itemProject[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){

        itemProject[k].classList.remove('hidden');
        itemProject[k].classList.add('active');
      }
    }
  })
}