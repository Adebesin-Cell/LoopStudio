
const $open_Button = document.querySelector("#open");
const $close_Button = document.querySelector("#close");

const $menu_bar = document.querySelector("#menu");


function $open () {
      // e.preventDefault();

      $menu_bar.style.height ="100%";

      $menu_bar.classList.add("show");

      $menu_bar.classList.remove("hide");
}

function $close () {
      $menu_bar.style.height ="0%";
      $menu_bar.classList.add("hide");

      $menu_bar.classList.remove("show");
}


$open_Button.addEventListener("click", $open);
$close_Button.addEventListener("click", $close);