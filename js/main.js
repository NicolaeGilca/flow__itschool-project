
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



//comment section

let userData = {
  name: "Ilon Musk"
}

const getCommentInputBtn = document.getElementById("getComment");
const commentsSection = document.getElementById("commentsSection");

const commentInput = document.getElementById("commentInput");
const addCommentBtn = document.getElementById("addCommentBtn");

//comment bar
getCommentInputBtn.addEventListener("click", ()=> {
  document.querySelector(".feed__user-comment").classList.toggle("active");
});

//add comment func
function commentCreating() {
  let numOfComment = document.getElementById("comment-counter");
  console.log(numOfComment.value)


  if(commentInput === "" ){
    return undefined;
  }else {
    let comment = document.createElement("li");
    comment.innerHTML = userData.name + ": " + commentInput.value;
    commentsSection.appendChild(comment);
    let closeBtn = document.createElement("SPAN");
    closeBtn.innerHTML = 'Remove comment'
    comment.appendChild(closeBtn);

  }
  
  commentInput.value = "";
}
//add comment from keydown
commentInput.addEventListener("keydown", (event) => {
  if (event.key === 'Enter' && commentInput.value != "") {
  
    commentCreating();
    commentInput.blur()
}
});
//add comment btn
addCommentBtn.addEventListener("click", () => {
  if(commentInput.value != "") {
    commentCreating();
    commentInput.blur();
  }
});
//remove comment
commentsSection.addEventListener("click",(e)=>{
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
})


// Comment counter
