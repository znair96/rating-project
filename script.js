const ratingSelectors = document.getElementsByClassName("rating");
const length = ratingSelectors.length;

let ratingValue;
for (let i = 0; i < length; i++) {
  ratingSelectors[i].addEventListener("click", function () {
    let selected = document.querySelector(".selected");
    if (selected) {
      selected.classList.remove("selected");
    }
    ratingSelectors[i].classList.add("selected");
    ratingValue = i + 1;
  });
}
document.querySelector(".btn").addEventListener("click", function () {
  document.getElementById("rating-container").classList.add("hidden");
  document.getElementById("thank-you-container").classList.remove("hidden");
  const ratingValueSelector = document.querySelector(".rating-value");
  if (ratingValueSelector) {
    ratingValueSelector.innerHTML = ratingValue;
  }
});
