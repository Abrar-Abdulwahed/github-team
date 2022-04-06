const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".mobile-nav");

/* Toggle mobile menu */
function toggleMenu() {
	if (menu.classList.contains("d-none")) {
	  menu.classList.remove("d-none");
	  toggle.innerHTML = `<img src="imgs/close.svg" alt="icon" width="20">`;
	} else {
	  menu.classList.add("d-none");
	  toggle.innerHTML = `<img src="imgs/menubar.svg" alt="icon" width="20">`;
	}
  }
toggle.addEventListener("click", toggleMenu, false);


window.onscroll = function() {shadowOnScroll()};
var topHeaderHeight = document.getElementById('top-header').offsetHeight;
function shadowOnScroll() {
	//(document.documentElement.scrollTop) or we can use (window.scrollY)
    if (document.documentElement.scrollTop > topHeaderHeight) {
        document.getElementById("top-header").classList.add("shadow-on-scroll");
    } else {
        document.getElementById("top-header").classList.remove("shadow-on-scroll");
    }
}


  
