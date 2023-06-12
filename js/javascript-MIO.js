// Valor de ticket sin descuentos
const valorTicket = 200;
//descuentos
let desEstudiante = 80;
let descTrainee = 50;
let descJunior = 15;

// Elementos en variables
let nombre            = document.getElementById("Nombreclie");
let apellido          = document.getElementById("ApelClie");
let mail              = document.getElementById("Emailclie");
let cantiTickets   = document.getElementById("Cantidad1");
let categoria         = document.getElementById("Categoria1");

let Ticketsprecio = (cantiTickets.value) * valorTicket;



// Cálculo total a pagar
const resupago = () => {

  switch (categoria.value) {
    case "":
      Ticketsprecio = 0;
    case "0":
      Ticketsprecio = Ticketsprecio - (desEstudiante / 100 * Ticketsprecio);
      break;
    case "1":
      Ticketsprecio = Ticketsprecio - (descTrainee / 100 * Ticketsprecio);
      break;
    case "2":
      Ticketsprecio = Ticketsprecio - (descJunior / 100 * Ticketsprecio);
      break;
    case "3":
      Ticketsprecio = Ticketsprecio;
      break;
    case "4":
      Ticketsprecio = 0;
      break;
  }

  pagacta.innerHTML = Ticketsprecio; 

}

botresu.addEventListener('click', resupago);

const resetresupago = () => {       
   pagacta.innerHTML = "";
  }

btnBorrar.addEventListener('click', resetresupago);
