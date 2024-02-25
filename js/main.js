
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

const getCommentInputBtn = document.querySelector(".getComment");
const commentsSection = document.querySelector(".commentsSection");

const commentInput = document.querySelector(".commentInput");
const addCommentBtn = document.querySelector(".addCommentBtn");

//comment bar
getCommentInputBtn.addEventListener("click", ()=> {
  document.querySelector(".feed__user-comment").classList.toggle("active");
});
//comment counter
let numOfComments = document.querySelector(".comment-counter");

function addCommentCounter() {
  numOfComments.innerText = Number(numOfComments.innerText) + 1
}
function removeCommentCounter() {
 
  numOfComments.innerText = Number(numOfComments.innerText) - 1;
}

//add comment func
function commentCreating() {
  let numOfComment = document.querySelector(".comment-counter");
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
addCommentCounter();

}
});
//add comment btn
addCommentBtn.addEventListener("click", () => {
  if(commentInput.value != "") {
    commentCreating();
    commentInput.blur();
addCommentCounter();

  }
});
//remove comment
commentsSection.addEventListener("click",(e)=>{
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    removeCommentCounter()
  }
})

// like func
const numOfLikes = document.querySelector(".likeCounter");
const getLikeBtn = document.querySelector(".likeBtn");
let isLiked = false;

getLikeBtn.addEventListener("click", ()=> {
  getLikeBtn.classList.toggle("liked");
  isLiked = !isLiked


  numOfLikes.innerText = isLiked
  ? numOfLikes.innerText = Number(numOfLikes.innerText) + 1
  : numOfLikes.innerText = Number(numOfLikes.innerText) - 1

})





