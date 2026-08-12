const $title = document.querySelector("h1");
$title.addEventListener("click", (e) => {
  alert("환영합니다");
});

const toggleBtn = document.querySelector("#theme-toggle");
toggleBtn.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
});
