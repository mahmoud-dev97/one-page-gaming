let btn = document.querySelector("#hii");
let body = document.body;
// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     // behavior: "smooth",
//   });
// };
window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    // behavior: "smooth",
  });
});
