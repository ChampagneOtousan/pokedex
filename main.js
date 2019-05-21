requestAPI = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            user = {
                name: data['name'],
                username: data['login'],
                image: data['avatar_url'],
                repo_count: data['public_repos'],
                followers: data['followers']
            }
        }
    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto", true);
    xhttp.send();
}

requestAPI()

displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let img = document.createElement('img')

    h1.innerText = user['name']
    p1.innerText = user['followers']
    img.setAttribute('src', user['image'])
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(img)
    document.body.appendChild(cont)
}

class Pokemon {
  constructor(name, id, ability, attack, defense, speed) {
    this.name = name
    this.id = id
    this.ability = ability
    this.attack = attack
    this.defense = defense
    this.speed = speed
  }
}

poke1 = new Pokemon()
