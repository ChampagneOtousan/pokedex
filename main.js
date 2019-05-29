pokemons = []

requestAPI = (name, container) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
            poke = new Pokemon(
            nameof = data.name,
            id = data.id,
            attack = data.stats[4].base_stat,
            speed = data.stats[0].base_stat,
            hp = data.stats[5].base_stat,
            defense = data.stats[3].base_stat,
            abilities = data.abilities[0].ability.name,
            picture = data.sprites.front_default,
            containerName = container
          )

            //pokemon = new Pokemon(name, id, attack, speed,hp, defense)
            //pokemons.push(pokemon)
            //console.log(pokemon)
            displayUser(poke)
  }
};
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`, true);
    xhttp.send();
}
// 
// pokemon_names = ['zapdos', 'ho-oh', 'articuno']
// for(names = 0; names < pokemon_names.length; names++){
//   requestAPI(pokemon_names[names])
// }

class Pokemon {
  constructor(name, id, attack, speed, hp, defense, abilities, picture, container) {
    this.name = name
    this.id = id
    this.attack = attack
    this.speed = speed
    this.hp = hp
    this.defense = defense
    this.abilities = abilities
    this.picture = picture
    container.push(this)
  }
}

displayUser = (poki) => {
  document.getElementById('name').innerHTML = poki.name
  document.getElementById('id').innerHTML = poki.id
  document.getElementById('attack').innerHTML = poki.attack
  document.getElementById('hp').innerHTML = poki.hp
  document.getElementById('abilities').innerHTML = poki.abilities





  img = document.getElementById('picture')
  img.setAttribute("src", poki.picture)

}

function find() {
  let x = document.getElementById("pokesearch")
  esteban.get(x.value)
}

class Trainer {
  constructor(name) {
    this.name = name
    this.container = []
  }
  get(name) {
    requestAPI(name, this.container)
  }
  all() {
    console.log(this.container)
  }
}
esteban = new Trainer("estebanito")
