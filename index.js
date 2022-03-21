const moreBtn = document.querySelector(".title__main__btn");
const title = document.querySelector(".title__main__text");

const handleMoreBtn = (event) => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
};

moreBtn.addEventListener("click", handleMoreBtn);
