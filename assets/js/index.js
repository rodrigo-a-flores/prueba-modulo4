import { Leon, Lobo, Oso, Serpiente, Aguila } from "./modulo/tipo.js";
import animalesData from "./modulo/Animales.js";

const animalSelect = document.getElementById("animal");
const edadSelect = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const preview = document.getElementById("preview");
const btnRegistrar = document.getElementById("btnRegistrar");
const animalesCard = document.getElementById("Animales");


function card() {
  animalesCard.innerHTML = "";
  animales.forEach((a, i) => {
    animalesCard.innerHTML += `
      <div class="px-3 pb-2">

      <div class="bg-dark text-white">
        <img
          height="200"
          width="200"
          src="${a.images}"
          data-toggle="modal" data-target="#exampleModal"
          onclick="modalDetails('${i}')"
        />
        <div>
          <button onclick="playSound('${a.name}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
        </div>
      </div>
      </div>
        `;
  });
}








let imageSrc;
let sonido;
let animales = [];

//agregar el evento para cambiar la imagen del preview

animalSelect.addEventListener("change", async () => {
  const animal = animalSelect.value;
  const animales = await animalesData.getData();
  const animalData = animales.find((a) => a.name === animal);
  
  imageSrc = `./assets/imgs/${animalData.imagen}`;
  sonido = `./assets/sounds/${animalData.sonido}`;

  preview.style.backgroundImage = `url(${imageSrc})` 
  
});

//agergar el evento que me permita agregar los animales

btnRegistrar.addEventListener("click", () => {
  const name = animalSelect.value;
  const age = edadSelect.value;
  const comments = comentarios.value;
  const images = imageSrc;
  const sound = sonido;

  if (name && age && comments) {
    let animal;

    if (name == 'Leon') {
      animal = new Leon(name, age, images, comments, sound);
      
    }else if(name == 'Lobo'){
      animal = new Lobo(name, age, images, comments, sound);
    }
    else if(name == 'Oso'){
      animal = new Oso(name, age, images, comments, sound);
    }else if(name == 'Serpiente'){
      animal = new Serpiente(name, age, images, comments, sound);
    } else {
      animal = new Aguila(name, age, images, comments, sound);
    }


    animales.push(animal);
    card()
  } else {
    alert("Por favor rellene todos los campos");
  }
})


window.playSound = (name)=>{
  let animal = animales.find((a) => a.name === name)
  if (name == 'Leon') {
    animal.rugir()
  }else if(name == 'Lobo'){
    animal.aullar()
  }else if(name == 'Oso'){
    animal.gruñir()
  }else if(name == 'Serpiente'){
    animal.sisear()
  } else {
    animal.chillar()
  }
}

window.modalDetails = (i) => {
  const modalBody = document.getElementsByClassName("modal-body")[0];
const animal = animales[i];
modalBody.innerHTML = `
    <div class="px-3 pb-2">
    <div class="card w-50 m-auto bg-dark text-white border-0">
      <img
        src="${animal._images}"
        class="d-block m-auto w-100"
      />
      <div class="card-body text-center">
        <h6 class="card-text ">${animal._age}</h6>
        <h6 class="card-text m-0">Comentarios</h6>
        <hr/>
        <p>${animal._comments}</p>
      </div>
    </div>
    </div>
    `;
} 

    