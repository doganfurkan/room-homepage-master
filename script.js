const sldr = document.getElementById("slider");

function slider(a) {
  let sliderPosition = sldr.scrollLeft;
  let sliderWidth = sldr.offsetWidth;
  if (a) {
    sldr.scrollTo(sliderPosition + sliderWidth, 0);
  } else if (!a) {
    sldr.scrollTo(sliderPosition - sliderWidth, 0);
  }
}

function openMenu(){
    document.getElementsByTagName("nav")[0].classList.add("active");
    document.getElementById("darkBg").style.display = "block"
}

function closeMenu(){
    document.getElementsByTagName("nav")[0].classList.remove("active");
    document.getElementById("darkBg").style.display = "none"
}