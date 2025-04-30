import '../scss/demo2_transition_slow.scss';

const likeButtons = document.querySelectorAll(".likeButton");
likeButtons.forEach(likeButton => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("clicked");
  });
});