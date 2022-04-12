// -------------------------------------------
 function scrollHeader(){
     const header = document.getElementById('header')

     if(this.scrollY >= 50)header.classList.add('scroll-header'); 
     else 
     header.classList.remove('scroll-header')
 }

 window.addEventListener('scroll', scrollHeader)

// ------------------------------------------------------------

const modalViews= document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalClose = document.querySelectorAll('.services-modal-close')

      let modal = function(modalClick){
          modalViews[modalClick].classList.add('active-modal')
      }

      modalBtns.forEach((mb, i) => {
          mb.addEventListener('click' , () => {
              modal(i)
          })
      })

      modalClose.forEach((mc) => {
          mc.addEventListener('click' , () => {
              modalViews.forEach((mv) => {
                  mv.classList.remove('active-modal')
              })
          })
      })


      const linkWork = document.querySelectorAll('.work-item')

      function activeWork(){
          linkWork.forEach(l=> l.classList.remove('active-work'))
          this.classList.add('active-work')
      }

      linkWork.forEach(l=> l.addEventListener('click', activeWork));


    //   --------------------------------------------------------------

    
let pagination = $('.pagination');

function setPagination(){
   pagination.jPages({
     containerID: 'container',
     perPage: 4,
     startPage: 1,
     startRange: 1,
     midRange: 3,
     endRange: 1,
     first: false,
     last: false
   });
}

function destroyPagination() {
  pagination.jPages('destroy');
};

setPagination();

$('#container').mixItUp({
  callbacks: {
    onMixLoad: function(state,futureState ){
      console.log('mix Loaded');
      //setPagination();
    },
    onMixStart: function(state,futureState ){
      destroyPagination();
    },
    onMixEnd: function(state, futureState){
      console.log('mix End');
      setPagination();
    }
  }
});

// ------------------------------------------------------------------

let swiperTestimonial = new Swiper(" .testimonial-container",{
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
    slidesPerView: 2,
    spaceBetween: 48,
    },

  },

});