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

// ------------------------------------------------------------------------

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('ID')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ------------------------------------------------------------------


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {

  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

  document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// --------------------------------------------------------------------------

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
}) 

sr.reveal('.home-data')
sr.reveal('.home-handel' , {delay: 400})
sr.reveal('.home-social, .home-scroll', {delay: 700, origin:'bottom'})