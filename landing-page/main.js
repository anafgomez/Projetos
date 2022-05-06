const onScroll = () => {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
};

const showNavOnScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
};

const showBackToTopButtonOnScroll = () => {
  if (scrollY > 0) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};
const openMenu = () => {
  document.body.classList.add("menu-expanded");
};

const closeMenu = () => {
  document.body.classList.remove("menu-expanded");
};

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content`);
