$(".accordion").accordion( {

  heightStyle: "content",
  active: true,
  collapsible: true,

});






let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');


burger.addEventListener('click',


    function () {


        burger.classList.toggle('burger--active');


        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');



    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll')

    })



})






let search = document.querySelector('.search-block__svg');
let input = document.querySelector('.header__input');
let form = document.querySelector('.header__form');
let svg = document.querySelector('.search__block__svg-2')
search.addEventListener('click',

  function () {
      search.classList.add('search-block__svg--active');

      input.classList.add('header__input--active');

      form.classList.add('header__form--active');

      svg.classList.add('header__svg--active');


  })


  svg.addEventListener('click',

  function () {

    input.classList.remove('header__input--active');
    form.classList.remove('header__form--active');
    svg.classList.remove('header__svg--active');


  }

    )



    document.querySelectorAll('.nav__link--how').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.nav__link--how').forEach(function(btn){
      btn.classList.remove('nav__link--how--active')});
      e.currentTarget.classList.add('nav__link--how--active')


      document.querySelectorAll('.parent--how').forEach(function(tabsBtn){
        tabsBtn.classList.remove('parent--how--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add(`parent--how--active`);
});
        });





        const swiper = new Swiper('.swiper', {
          // Optional parameters
          direction: 'vertical',
          loop: true,

          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',


          },

          direction: 'horizontal',

          a11y: {
            prevSlideMessage: 'Предыдущиый слайд',
            nextSlideMessage: 'Следующий слайд',
            lastSlideMessage: 'Это последний слайд',
            firstSlideMessage: 'Это первый слайд',
            paginationBulletMessage: 'Перейти к слайду {{index}}'
         },
        });
