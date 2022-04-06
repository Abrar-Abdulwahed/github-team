var imgArr = [
    "imgs/sliders/slider1.jpg",
    "imgs/sliders/slider2.jpg",
    "imgs/sliders/slider3.jpg",
    "imgs/sliders/slider4.jpg",
    "imgs/sliders/slider5.png",
    "imgs/sliders/slider6.jpg",
    "imgs/sliders/slider7.jpg",
    "imgs/sliders/slider9.jpg",
    "imgs/sliders/slider10.jpg",
  ];
  var usedImg = [];
  var count = document.getElementsByClassName('advert').length;
  var size = imgArr.length;
  var x;
  for(var i = 1; i <= count; i++){
      x = Math.floor(size*Math.random());
      while(usedImg.indexOf(x) !== -1){
        x = Math.floor(size*Math.random());
      }
      usedImg.push(x);
      document.getElementById(`advert${i}`).src=imgArr[x];
  }
  
  