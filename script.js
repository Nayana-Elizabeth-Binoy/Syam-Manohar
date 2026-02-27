const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".portfolio-item img").forEach(img => {

  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;

    document.body.style.overflow = "hidden"; // prevent scroll
  }

});

document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const liquid = document.querySelector(".liquid-bg");
const hero = document.querySelector(".hero");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

function animate() {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  liquid.style.left = currentX + "px";
  liquid.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();

closeBtn.onclick = function(){
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

modal.onclick = function(e){
  if(e.target === modal){
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}