
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");

openButton.addEventListener("click", () => {
  const modal = document.getElementById("modal-1");
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  const modal = document.getElementById("modal-1");
  modal.close();
});


const carrousel = document.querySelector(".carrousel"); 
const buttonLeft = document.querySelector("#slide-left")
const buttonRight = document.querySelector("#slide-right")

const imgWidth = 250 + 20; 

buttonLeft.addEventListener('click', () => {
  scrolSlideLeft();
});

buttonRight.addEventListener('click', () => {
  scrolSlideRigth();
});



function scrolSlideLeft () {
  if (carrousel.scrollLeft + carrousel.clientWidth >= carrousel.scrollWidth) {
    carrousel.scrollLeft = 0; 
  } else {
    carrousel.scrollLeft += imgWidth; 
  }
}

function scrolSlideRigth () {
  if (carrousel.scrolSlideLeft + carrousel.clientWidth >= carrousel.scrollWidth) {
    carrousel.scrollLeft = 0; 
  } else {
    carrousel.scrollLeft -= imgWidth; 
  }
}


setInterval(scrolSlideLeft, 3500)

