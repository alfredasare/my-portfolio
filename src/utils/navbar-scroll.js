let previousScrollPosition = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPosition = window.pageYOffset;
  const navbar = document.querySelector("nav");

  if (navbar !== undefined && navbar){
    if (currentScrollPosition === 0) {
      navbar.style.padding = "50px 0";
    }

    if (previousScrollPosition > currentScrollPosition || currentScrollPosition < "200") {
      navbar.style.top = "0";
    }else {
      navbar.style.top = "-125px";
      navbar.style.padding = "15px 0";
    }
    previousScrollPosition = currentScrollPosition;
  }
};