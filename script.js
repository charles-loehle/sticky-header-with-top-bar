const topBar = document.querySelector('.top-bar');
const bottomHeader = document.querySelector('.cl-web-header');

document.addEventListener('scroll', e => {
	// Change number to match Sticky Header Effects scroll distance value
	if (window.scrollY >= 60) {
		topBar.classList.add('slide-up');
		bottomHeader.classList.add('she-header');
		bottomHeader.style.transform = `translateY(-${topBar.offsetHeight}px)`;
	} else {
		topBar.classList.remove('slide-up');
		bottomHeader.classList.remove('she-header');
		bottomHeader.style.transform = `translateY(0px)`;
	}
});
