// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
  // Modal
  const modal = document.getElementById('modalForm')
  const modalOpen = document.getElementById('modalOpen')
  const input = modal.querySelectorAll('input')
  if(modal){
    modal.addEventListener('click', eventFu)
    modalOpen.addEventListener('click', (e)=> modal.hidden = false)
    input.forEach((el)=>{
      el.addEventListener('focus', focusFu)
      el.addEventListener('blur', blurFu)
    })
  }
  function eventFu(event){
    if(event.target.classList.contains('modal-close')) modal.hidden = true
  }
  function focusFu(event){
    if(event.target.value.length){
      return
    }
    event.target.labels[0].classList.add('label-focus')
  }
  function blurFu(event){
    if(event.target.value.length){
      return
    }
    event.target.labels[0].classList.remove('label-focus')
    if(event.target.value.length){
      event.target.labels[0].hidden = true
    }
  }
})
