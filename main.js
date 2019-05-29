pokemons = []

requestAPI = (name) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)

            id = data.id
            nameof = data.name
            attack = data.stats[4].base_stat
            speed = data.stats[0].base_stat
            hp = data.stats[5].base_stat
            defense = data.stats[3].base_stat
            abilities = data.abilities[0].ability.name

            pokemon = new Pokemon(name, id, attack, speed,hp, defense)
            pokemons.push(pokemon)
            console.log(pokemon)
            displayUser()
  }
};
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`, true);
    xhttp.send();
}

pokemon_names = ['zapdos', 'ho-oh', 'articuno']
for(names = 0; names < pokemon_names.length; names++){
  requestAPI(pokemon_names[names])
}

class Pokemon {
  constructor(name, id, attack, speed, hp, defense, abilities) {
    this.name = name
    this.id = id
    this.attack = attack
    this.speed = speed
    this.hp = hp
    this.defense = defense
    this.abilities = abilities
  }
}

displayUser = () => {

    pokemon1 = document.getElementById('poke-1')
    pokemon2 = document.getElementById('poke-2')
    pokemon3 = document.getElementById('poke-3')
    pokemon4 = document.getElementById('poke-4')
    pokemon5 = document.getElementById('poke-5')
    pokemon6 = document.getElementById('poke-6')
    pokemon7 = document.getElementById('poke-7')

    pokemon1.innerText = pokemons[0].name
    pokemon2.innerText = pokemons[0].id
    pokemon3.innerText = pokemons[0].attack
    pokemon4.innerText = pokemons[0].speed
    pokemon6.innerText = pokemons[0].hp
    pokemon7.innerText = pokemons[0].abilities

    pokemon1_2 = document.getElementById('poke2-1')
    pokemon2_2= document.getElementById('poke2-2')
    pokemon3_2 = document.getElementById('poke2-3')
    pokemon4_2 = document.getElementById('poke2-4')
    pokemon5_2 = document.getElementById('poke2-5')
    pokemon6_2 = document.getElementById('poke2-6')
    pokemon7_2 = document.getElementById('poke2-7')

    pokemon1_2.innerText = pokemons[1].name
    pokemon2_2.innerText = pokemons[1].id
    pokemon3_2.innerText = pokemons[1].attack
    pokemon4_2.innerText = pokemons[1].speed
    pokemon6_2.innerText = pokemons[1].hp
    pokemon7_2.innerText = pokemons[1].abilities

    pokemon1_3 = document.getElementById('poke3-1')
    pokemon2_3= document.getElementById('poke3-2')
    pokemon3_3 = document.getElementById('poke3-3')
    pokemon4_3 = document.getElementById('poke3-4')
    pokemon5_3 = document.getElementById('poke3-5')
    pokemon6_3 = document.getElementById('poke3-6')
    pokemon7_3 = document.getElementById('poke3-7')

    pokemon1_3.innerText = pokemons[2].name
    pokemon2_3.innerText = pokemons[2].id
    pokemon3_3.innerText = pokemons[2].attack
    pokemon4_3.innerText = pokemons[2].speed
    pokemon6_3.innerText = pokemons[2].hp
    pokemon7_3.innerText = pokemons[2].abilities
}

function showPokemon() {

}
