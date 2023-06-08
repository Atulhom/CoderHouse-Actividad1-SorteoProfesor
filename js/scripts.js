

function init(){
    const overlay = document.getElementById("prompt-overlay");
    const button = document.getElementById("prompt-button");
    const input = document.getElementById("prompt-input");
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
}

init();


// Variables del sorteo
function realizarSorteo() {
  let premio = ["JavaScript", "HTML", "CSS", "React", "GitHub"];
  let ganadores = [];

  let participanteInput = document.getElementById("participante");
  let participante = participanteInput.value;
  let paisInput = document.getElementById("pais");
  let pais = paisInput.value;

  let paisesReales = ["argentina", "brasil", "canadá", "colombia", "españa", "estados unidos", "francia", "italia", "mexico", "peru"];

  // Ejecuta una array aleatoria.
  for (let i = 0; i < 1; i++) {
    let indiceGanador = Math.floor(Math.random() * premio.length);
    let ganador = premio[indiceGanador];
    ganadores.push(ganador);
    premio.splice(indiceGanador, 1);
  }

  // Muestra el resultado de persona en curso.
  let resultado = document.getElementById("resultado");
  if (paisesReales.includes(pais.toLowerCase()) && participante) {
    resultado.textContent = "¡El curso ganado es: " + ganadores.join(", ") + "! " + "para " + participante + " que es de " + pais;
    resultado.style.color = "green";
  } else if (participante && !paisesReales.includes(pais)) {
    resultado.textContent = "Escribe bien el nombre de tu país.";
    resultado.style.color = "red";
  } else {
    resultado.textContent = "Escribe los campos correctamente.";
    resultado.style.color = "red";
  }
}



