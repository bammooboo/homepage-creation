let imageIndex = 1;
showImages(imageIndex);

function toggleImages(n) {
  showImages(imageIndex += n);
}

function thisImage(n) {
  showImages(imageIndex = n);
}

function showImages(n) {
  let i;
  let images = document.getElementsByClassName("slider__contents");
  let dots = document.getElementsByClassName("dot");
  if (n > images.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  images[imageIndex-1].style.display = "block";
  dots[imageIndex-1].className += " active";
}
