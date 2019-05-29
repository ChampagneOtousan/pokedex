requestAPI = (name) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
            id = data.id
            nameof = data.name
            attack = data.stats[4].base_stat
            speed = data.stats[0].base_stat
            special_defense = data.stats[1].base_stat
            hp = data.stats[5].base_stat
            defense = data.stats[3].base_stat
            pokemon = new Pokemon(name, id, attack, speed,special_defense,hp, defense)
            console.log(pokemon)
            displayUser()
  }
};
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`, true);
    xhttp.send();
}

class Pokemon {
  constructor(name, id, attack, speed, special_defense, hp, defense) {
    this.name = name
    this.id = id
    this.attack = attack
    this.speed = speed
    this.special_defense = special_defense
    this.hp = hp
    this.defense = defense
  }
}

displayUser = () => {
    let cont = document.createElement('div')
    cont.innerText = pokemon.id
    document.body.appendChild(cont)
}

function showPokemon() {

}
