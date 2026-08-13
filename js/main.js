const $title = document.querySelector("h1");
$title.addEventListener("click", (e) => {
  alert("환영합니다");
});

//다크모드 적용하기
const toggleBtn = document.querySelector("#theme-toggle");
toggleBtn.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
});

const validation = function () {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("pass");
};

let count = localStorage.getItem("visit");
count = Number(count) + 1;
if (count != null) {
}
