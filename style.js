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