console.log('Pokemon API')
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
mainElements = document.getElementsByTagName('main')
console.log(mainElements)

fetch(POKEMON_URL)
    .then((response) => response.json())
    .then((data) => {
        const pokemons = data.results
        const mainElement = mainElements[0]
        const sectionElement = document.createElement('section')
        console.log(pokemons)
        for ( let i = 0; i < pokemons.length; i++) {
            let count = i
            console.log(count)
            const pokemonDetailContainer = document.createElement('div')
            pokemonDetailContainer.classList.add('pokemon-detail-container');
            console.log(pokemons[i])
            // name Element
            const nameElement = document.createElement('h2')
            nameElement.classList.add('pokemon-name')
            nameElement.textContent = pokemons[i].name;
            nameElement.classList.add('pokemon-name')
            sectionElement.appendChild(nameElement)
             
            // pokemon detail url
            const pokemonDetailUrl = pokemons[i].url;
            console.log(pokemonDetailUrl)
            pokemonDetailContainer.appendChild(nameElement)
            sectionElement.appendChild(pokemonDetailContainer)
            // Corner svg
            const cornerSvgElement = document.createElement('img')
            cornerSvgElement.src = './imgs/Group 239.svg'
            cornerSvgElement.classList.add('corner-svg')
            pokemonDetailContainer.appendChild(cornerSvgElement)
            fetch(pokemonDetailUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
               
                // pokemon id
                const pokemonIdElement = document.createElement('p')
                const pokemon_id = data.id
                pokemonIdElement.classList.add('pokemon-id')
                let string_id = pokemon_id.toString()

                if (string_id.length == 1) {
                    string_id = `#00${pokemon_id}`
                }
                else if (string_id.length == 2) {
                    string_id=`#0${string_id}`
                }
                else {
                    string_id=`#${string_id}`
                }
                pokemonIdElement.innerHTML = string_id
                pokemonDetailContainer.appendChild(pokemonIdElement)
                console.log(pokemon_id)
                
                // Pokemon image
                const pokemonImageUrl = data.sprites.other['official-artwork'].front_default;
                const imgElement = document.createElement('img')
                imgElement.src = pokemonImageUrl;
                imgElement.classList.add('pokemon-pic')
                pokemonDetailContainer.appendChild(imgElement)
                // Pokemon types (water, fire, grass, flying, poison, normal, rock, ground, fighting, ghost,, psychic, ice, dragon, dark, fairy, electric, steel etc)
                const typesElement = document.createElement('div')
                typesElement.classList.add('types-container')
                const typeList = data['types'][0].type
                console.log(typeList)

                document.writeln(typesElement)
                let backgroundColorByType = undefined
                switch (typeList[0]) {
                    case 'fire':
                        backgroundColorByType = '#eb6c6c';
                        break;
                    case 'water':
                        backgroundColorByType = '#009ACB';
                        break;
                    case 'grass':
                        backgroundColorByType = '#';
                        break;
                    case 'electric':
                        backgroundColorByType = '#';
                        break;
                    case 'normal':
                        backgroundColorByType = '##B6B6B6';
                        break;
                    case 'poison':
                        backgroundColorByType = '#7E00CB';
                        break;
                    case 'ground':
                        backgroundColorByType = '#';
                        break;
                    case 'flying':
                        backgroundColorByType = '#2299EE';
                        break;
                    case 'bug':
                        backgroundColorByType = '#91AC22';
                        break;
                    case 'rock':
                        backgroundColorByType = '#';
                        break;
                    case 'ghost':
                        backgroundColorByType = '#';
                        break;
                    case 'psychic':
                        backgroundColorByType = '#';
                        break;
                    case 'ice':
                        backgroundColorByType = '#';
                        break;
                    case 'dragon':
                        backgroundColorByType = '#';
                        break;
                    case 'dark':
                        backgroundColorByType = '#';
                        break;
                    case 'fairy':
                        backgroundColorByType = '#';
                        break;
                    case 'steel':
                        backgroundColorByType = '#';
                        break;
                    default:
                        break;
                }
                 for (let i = 0; typeList.length; i++) {
                    const typesElement = document.createElement('p')
                    typesElement.innerHTML = typeList[i]
                }
                pokemonDetailContainer.style = `background: ${backgroundColorByType}`
            })
            .catch((error) => {
                console.log(error)
            })
        }
        mainElement.appendChild(sectionElement);
    })
    .catch((error) => {
        console.error(error)
    })
