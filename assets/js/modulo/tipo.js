import Animal from "./animal.js";
const player = document.getElementById("player");

class Leon extends Animal {
    constructor(name, age, images, comments, sound) {
        super(name, age, images, comments, sound);
    }
    rugir() {
      player.src = `${this._sound}`;
      player.play();
    }
}

class Lobo extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  aullar() {
    player.src = `${this._sound}`;
      player.play();
    
  }
}

class Oso extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  gruñir() {
     player.src = `${this._sound}`;
     player.play();
  }
}

class Serpiente extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  sisear() {
     player.src = `${this._sound}`;
     player.play();
  }
}

class Aguila extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  chillar() {
     player.src = `${this._sound}`;
     player.play();
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };