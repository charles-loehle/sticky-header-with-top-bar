const topBar = document.querySelector('.top-bar')
const bottomHeader = document.querySelector('.cl-web-header')

document.addEventListener('scroll', e => {
  // console.log(window.scrollY) 
  if (window.scrollY >= 60) {
    // console.log('60!!');
    topBar.classList.add('slide-up')
    bottomHeader.classList.add('she-header')
  } else {
    topBar.classList.remove('slide-up')
    bottomHeader.classList.remove('she-header')
  }
})

