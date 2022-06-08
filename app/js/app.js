// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
  // Modal
  const modal = document.getElementById('modalForm')
  const modalOpen = document.getElementById('modalOpen')
  const input = modal.querySelectorAll('input')
  if (modal) {
    modal.addEventListener('click', eventFu)
    modalOpen.addEventListener('click', (e) => modal.hidden = false)
    input.forEach((el) => {
      el.addEventListener('focus', focusFu)
      el.addEventListener('blur', blurFu)
    })
  }

  function eventFu(event) {
    console.log(event.target)
    if (event.target.classList.contains('modal-close')) modal.hidden = true
  }

  function focusFu(event) {
    if (event.target.value.length) {
      return
    }
    event.target.labels[0].classList.add('label-focus')
  }

  function blurFu(event) {
    if (event.target.value.length) {
      return
    }
    event.target.labels[0].classList.remove('label-focus')
    if (event.target.value.length) {
      event.target.labels[0].hidden = true
    }
  }

  // Slider
  const slider = document.getElementById('slider')
  let counter = 0
  if (slider) {
    const slides = slider.querySelectorAll('.slides')
    const paginationBlock = slider.querySelector('.slider-pagination')
    pagination(paginationBlock, slides)
    const prev = slider.querySelector('.prev')
    const next = slider.querySelector('.next')
    prev.addEventListener('click', () => {
      prevFu(slides)
      paginationActive()
    })
    next.addEventListener('click', () => {
      nextFu(slides)
      paginationActive()
    })
    setInterval(() => {
      if(counter === (slides.length - 1)) counter = -1
      nextFu(slides)
      paginationActive()
    }, 2500);
  }

  function prevFu(slides) {
    if (counter > 0) {
      counter--
      listenSlides(slides)
    }
  }

  function nextFu(slides) {
    if (counter < (slides.length - 1)) {
      counter++
      listenSlides(slides)
    }
  }

  function listenSlides(arr) {
    arr.forEach((el) => {
      if (el.classList.contains('slide-active')) {
        el.classList.remove('slide-active')
      }
    })
    arr[counter].classList.add('slide-active')
  }

  function pagination(el, arr) {
    for (let i = 0; i < arr.length; i++) {
      let span = document.createElement('span')
      span.className = 'pagination'
      el.appendChild(span)
    }
    paginationActive()
  }

  function paginationActive() {
    const paginationEl = document.querySelectorAll('.pagination')
    paginationEl.forEach((el) => {
      el.classList.remove('pagination-active')
    })
    paginationEl[counter].classList.add('pagination-active')
  }

  // Scroll nav

  const contactsBlk = document.getElementById('contacts')
  const collectedShipments = document.getElementById('collectedShipments')
  const aboutUs = document.getElementById('aboutUs')
  const completeShipments = document.getElementById('completeShipments')
  const otherShipments = document.getElementById('otherShipments')
  const elNavLink = document.querySelectorAll('.navbar-link')
  function navScrollRemoveActive(){
    // navbar-link__active
    elNavLink.forEach((el)=>{
      el.classList.remove('navbar-link__active')
    })
  }

  window.addEventListener('scroll', function() {
    // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    let page = pageYOffset  + (window.innerHeight / 2)
    if(page > aboutUs.offsetTop){
      navScrollRemoveActive()
      elNavLink[0].classList.add('navbar-link__active')
    } else{
      navScrollRemoveActive()
    }
    if(page > collectedShipments.offsetTop){
      navScrollRemoveActive()
      elNavLink[1].classList.add('navbar-link__active')
    }
    if(page > completeShipments.offsetTop){
      navScrollRemoveActive()
      elNavLink[2].classList.add('navbar-link__active')
    }
    if(page > otherShipments.offsetTop){
      navScrollRemoveActive()
      elNavLink[3].classList.add('navbar-link__active')
    }
    if(page > contactsBlk.offsetTop){
      navScrollRemoveActive()
      elNavLink[4].classList.add('navbar-link__active')
    }
  });

  // mobile-menu
  //
  //
  //
  const mobilMenu = document.querySelector('.mobile-menu')
  const mobileMenuBtn = document.querySelector('.mobile-menu__btn')
  const mobileMenuList = document.querySelector('.mobile-menu__list')
  const mobileMenuClose = document.querySelector('.mobile-menu__close')
  if(mobileMenuBtn){
    mobileMenuBtn.addEventListener('click', openMobileMenu)
  }
  if(mobileMenuClose){
    mobileMenuClose.addEventListener('click', closeMobileMenu)
  }
  if(mobilMenu){
    mobilMenu.addEventListener('click', (e)=>{
      if(e.target.classList.contains('mobile-menu__link')){
        setTimeout( function timer(){
          mobileMenuList.style.display = 'none'
        }, 500);
        mobileMenuList.style.opacity = '0'
      }
    })
  }

  function openMobileMenu(){
    mobileMenuList.style.display = 'block'
    setTimeout( ()=>{
      mobileMenuList.style.opacity = '1'
    }, 100);
  }
  function closeMobileMenu(){
    setTimeout( ()=>{
      mobileMenuList.style.display = 'none'
    }, 500);
    mobileMenuList.style.opacity = '0'
  }
})
