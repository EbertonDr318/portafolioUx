document.addEventListener("DOMContentLoaded", () => {

let index = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", ()=>{
    index = i;
    showSlide(index);
  });
});

});




function mostrarProyecto(index){
  const proyectos = document.querySelectorAll(".proyecto");
  const infos = document.querySelectorAll(".info");

  proyectos.forEach(p => p.classList.remove("active"));
  infos.forEach(i => i.classList.remove("active"));

  proyectos[index].classList.add("active");
  infos[index].classList.add("active");

  const contenedor = document.querySelector(".contenedor-proyectos");
  const proyectoActivo = proyectos[index];

  const offset = proyectoActivo.offsetLeft - contenedor.clientWidth / 2 + proyectoActivo.clientWidth / 2;

  contenedor.scrollTo({
    left: offset,
    behavior: "smooth"
  });
}
