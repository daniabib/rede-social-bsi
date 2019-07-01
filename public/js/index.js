// Muda form login/registrar
console.log('Oie')

let loginForm= document.querySelector("#loginForm");
let registrarForm= document.querySelector('#registrarForm');


document.getElementById("toggleLogin").addEventListener("click", function () {
  registrarForm.style.display = "block";
  loginForm.style.display = "none";
  
});

document.getElementById("toggleRegistrar").addEventListener("click", function () {
  registrarForm.style.display = "none";
  loginForm.style.display = "block";
  
});