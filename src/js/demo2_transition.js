import '../scss/demo2_transition.scss';

const likeButtons = document.querySelectorAll(".likeButton");
likeButtons.forEach(likeButton => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("clicked");
  });
});
