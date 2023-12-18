const acordians=document.querySelectorAll(".acordian");

acordians.forEach(acordian => {
  const icon=acordian.querySelector(".icon");
  const answere=acordian.querySelector(".answere");
  
  acordian.addEventListener("click",() => {
    icon.classList.toggle("active");
    answere.classList.toggle("active");
  })
})