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

// window.onscroll = function() {
//   const header = document.querySelector('header');
//   const fixedNav = header.offsetTop;

//   if(window.pageYOffset > fixedNav) {
//     header.classList.add('navbar-fixed');
//   } else {
//     header.classList.remove('navbar-fixed');
//   }
// }
// Navbar End


// Filter Start
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
// Filter End


// Modal Start
const modal = document.querySelector('.modal');
const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.close-modal');
showModal.addEventListener('click', function() {
  modal.classList.remove('hidden');
});
closeModal.addEventListener('click', function() {
  modal.classList.add('hidden');
});
// Modal End


// See More Start
const buttonProfile = document.querySelector('.button-profile');
const textProfile = document.querySelector('.text-profile');
const instructionProfile = document.querySelector('.instruction');
buttonProfile.addEventListener('click', function() {
  if(textProfile.classList.contains('hidden')) {
    textProfile.classList.remove('hidden');
    instructionProfile.innerHTML="less...";
  } else {
    textProfile.classList.add('hidden');
    instructionProfile.innerHTML="more...";
  }
});
// See More End


// Blog Medium
$(function () {
  var mediumPromise = new Promise(function (resolve) {
  var $content = $('#jsonContent');
  var data = {
      rss: 'https://medium.com/feed/@miftahul_janna'
  };
  $.get(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40miftahul_janna', data, function (response) {
      if (response.status == 'ok') {
          $("#logo").append(`<img src="${response.feed["image"]}" class="rounded mx-auto block">`)
          var display = '';
          $.each(response.items, function (k, item) {
              display += `<div class="card mb-3 mx-auto mr-5 " style="width: 20rem;">`;
              var src = item["thumbnail"]; // use thumbnail url
              display += `<img src="${src}" class="card-img-top" alt="Cover image">`;
              display += `<div class="card-body">`;
              display += `<h5 class="card-title"><a href="${item.link}">${item.title}</a></h5>`;
              var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
              yourString = yourString.replace('h4', 'p');
              yourString = yourString.replace('h3', 'p');
              var maxLength = 120; // maximum number of characters to extract
              //trim the string to the maximum length
              var trimmedString = yourString.substr(0, maxLength);
              //re-trim if we are in the middle of a word
              trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
              display += `<p class="card-text">${trimmedString}...</p>`;
              
              display += `<a href="${item.link}" target="_blank" class="btn btn-outline-success" >Read More</a>`;
              display += '</div></div>';
              return k < 10;
          });

          resolve($content.html(display));
      }
  });
  });
  mediumPromise.then(function()
  {
      //Pagination
      pageSize = 4;

      var pageCount = $(".card").length / pageSize;

      for (var i = 0; i < pageCount; i++) {
          $("#pagin").append(`<li class="page-item"><a class="page-link" href="#">${(i + 1)}</a></li> `);
      }
      $("#pagin li:nth-child(1)").addClass("active");
      showPage = function (page) {
          $(".card").hide();
          $(".card").each(function (n) {
              if (n >= pageSize * (page - 1) && n < pageSize * page)
                  $(this).show();
          });
      }

      showPage(1);

      $("#pagin li").click(function () {
          $("#pagin li").removeClass("active");
          $(this).addClass("active");
          showPage(parseInt($(this).text()))
          return false;
      });
  });
});