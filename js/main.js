
//swirpwe section 
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 10,
  // If we need pagination
  pagination: {},

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

//menu-elements
let menuBar = document.querySelector(".user__item-profile");
let profilePanel = document.querySelector(".profile-element");
let closeMenuBtn = document.querySelector(".profile-element__close-btn")

menuBar.addEventListener("click", ()=> {
menuBar.classList.toggle("active")
profilePanel.classList.add("active");

})

closeMenuBtn.addEventListener("click", ()=>{
  profilePanel.classList.remove("active");

    
  })

