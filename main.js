
requestAPI = (name) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
            id = data.id
            nameof = data.name
            attack = data.attack
            speed = data.stat['0'].base_stat
            special_defense = data.stat['1'].base_stat
            hp = data.stat['5'].base_stat
            defense = data.stat['3'].base_stat
            }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`, true);
    xhttp.send();
}
class Pokemon {
  constructor(name) {
    requestAPI(name)
    this.name = nameof
    this.id = id
    this.attack = attack
    this.speed = speed
    this.special_defense = special_defense
    this.hp = hp
    this.defense = defense

  }
}

// requestAPI()
// displayUser = () => {
//     let cont = document.createElement('div')
//     let h1 = document.createElement('h1')
//     let p1 = document.createElement('p')
//     let img = document.createElement('img')
//
//     h1.innerText = user['name']
//     p1.innerText = user['followers']
//     img.setAttribute('src', user['image'])
//     cont.appendChild(h1)
//     cont.appendChild(p1)
//     cont.appendChild(img)
//     document.body.appendChild(cont)
// }
//
// class Pokemon {
//   constructor(name, id, ability, attack, defense, speed) {
//     this.name = name
//     this.id = id
//     this.ability = []
//     this.attack = attack
//     this.defense = defense
//     this.speed = speed
//   }
// }
//
// poke1 = new Pokemon()
