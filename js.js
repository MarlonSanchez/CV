$carousel = document.getElementById("carousel");
$suivant = document.getElementById("suivant");
$precedent = document.getElementById("precedent");
// Vous aurez besoin de ce genre de choses :
// $carousel.style.borderColor = "#f00";
var i = 0;

function suivant() {

  $carousel.children[i].classList.remove("active");
  if (i<3)
    i++;
  else
  i=0
  $carousel.children[i].classList.add("active");
}

$suivant.onclick = suivant;

function precedent() {

  $carousel.children[i].classList.remove("active");
  if (i>0)
    i--;
  else
  i=3
  $carousel.children[i].classList.add("active");
}

$precedent.onclick = precedent;
