const overlay = document.getElementById("prompt-overlay");
const input = document.getElementById("prompt-input");
const button = document.getElementById("prompt-button");

button.addEventListener("click", function() {
  const value = input.value;

  // Si el usuario no escribe Si, lo expulsa
  if (value.toLowerCase() === "si"){
    alert("Bienvenido a javascript");
  } else if (value === "no" ||  "*") {
    window.location.href = "https://www.google.com";
  } 


  // Ocultar el prompt
  overlay.style.display = "none";
});

// Mostrar el prompt en el centro de la pantalla
overlay.style.display = "flex";


// Variables del sorteo
function realizarSorteo(){
var premio = ["JavaScript", "HTML", "CSS", "React", "GitHub"]
var ganadores = [];

var participante = document.getElementById("participante");
var participante = participante.value;
var pais = document.getElementById("pais");
var pais = pais.value;

var paisesReales = ["Argentina", "Brasil", "Canadá", "Colombia", "España", "Estados Unidos", "Francia", "Italia", "México", "Peru"];

// Ejecuta una array aleatoria.
for (var i = 0; i < 1; i++) {
  var indiceGanador = Math.floor(Math.random() * premio.length);
  var ganador = premio[indiceGanador];
  ganadores.push(ganador);
  premio.splice(indiceGanador, 1);
}


// Muestra el resultado de persona en curso.
var resultado = document.getElementById("resultado");

if (paisesReales.includes(pais) && participante) {
  resultado.textContent = "¡El curso ganado es: " + ganadores.join(", ") + "! " + "para " + participante + " que es de " + pais;
} else if (participante && !paisesReales.includes(pais)) {
  resultado.textContent = "Escribe bien el nombre de tu país.";
} else {
  resultado.textContent = "Escribe los campos correctamente.";
}


}


