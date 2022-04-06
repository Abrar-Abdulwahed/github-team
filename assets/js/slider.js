  var slideIndex = 1;
  var myTimer;
  myTimer = setInterval(()=>{plusSlides(1)}, 2000);
const plusSlides = (n) =>{
    // important for dont remember current path of slideshow
    clearInterval(myTimer);
    if (n < 0){ // if start from end
      showSlides(slideIndex -= 1);
    } else {
     showSlides(slideIndex += 1); 
    }
    // important(with clearInterval(myTimer)) for resume
    myTimer = setInterval(()=>{plusSlides(n + 1)}, 2000);
}

const  slideByDots = (n)=>{
    clearInterval(myTimer);
    myTimer = setInterval(()=>{plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
  }
  
const showSlides = (n)=>{
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("indicator");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

const oneStepSlider = (parentName, dir, other)=>{
    const categoryRow = [[...document.querySelectorAll(`.${parentName}`)][other]];
    categoryRow.forEach((item, i)=>{
      let itemWidth = item.offsetWidth-150;   
      if(dir == "next")
          item.scrollLeft += itemWidth;
      else
          item.scrollLeft -= itemWidth;
    })
}

