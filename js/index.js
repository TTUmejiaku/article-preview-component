const shareIcon = document.querySelector(".user__share-icon");
const shareDiv = document.querySelector(".share");
const shareBtn = document.querySelector(".share__icon");

shareBtn.addEventListener("click", () => {
  shareDiv.classList.toggle("share--show");
});

shareIcon.addEventListener("click", () => {
  shareDiv.classList.toggle("share--show");
});
