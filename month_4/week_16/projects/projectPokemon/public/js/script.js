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
                // detail container background by types (water, fire, grass, flying, poison, normal, rock, ground, fighting, ghost,, psychic, ice, dragon, dark, fairy, electric, steel etc)
                const typesElement = document.createElement('div')
                typesElement.classList.add('types-container')
                const typeList = data['types']
                console.log(typeList)
                let backgroundColorByType = undefined
                console.log('ene mondoo')
                console.log(typeList[0].type.name)
                switch (typeList[0].type.name) {
                    case 'fire':
                        backgroundColorByType = '#eb6c6c';
                        break;
                    case 'water':
                        backgroundColorByType = '#009ACB';
                        break;
                    case 'normal':
                        backgroundColorByType = '#B6B6B6';
                        break;
                    case 'poison':
                        backgroundColorByType = '#7E00CB';
                        break;
                    case 'grass':
                        backgroundColorByType = '#1EBA11';
                        break;
                    case 'flying':
                        backgroundColorByType = '#2299EE';
                        break;
                    case 'bug':
                        backgroundColorByType = '#91AC22';
                        break;
                    default:
                        break;
                }
                // types of pokemon
                 for (let i = 0; i < typeList.length; i++) {
                    const typeElement = document.createElement('p')
                    typeElement.classList.add('type-element')
                    typeElement.innerHTML = typeList[i].type.name
                    
                    // svg by type
                    switch (typeList[i].type.name) {
                        case 'fire':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_5_4657)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0081 12.8561C11.2058 12.1332 10.822 10.6472 10.822 10.6472C10.822 10.6472 10.5437 11.8578 10.1088 12.3052C9.73785 12.6869 9.28332 12.9516 8.63144 13.0212C9.16441 12.7623 9.53094 12.2225 9.53094 11.5986C9.53094 10.7228 8.80869 10.0128 7.91775 10.0128C7.02682 10.0128 6.30453 10.7228 6.30453 11.5986C6.30453 11.8378 6.35844 12.0646 6.45491 12.268C5.89766 11.8241 5.81004 11.1123 5.81004 11.1123C5.81004 11.1123 5.18779 13.6958 6.90235 14.911C8.61688 16.1263 11.9756 15.0817 11.9756 15.0817C11.9756 15.0817 7.16907 18.4637 3.60738 14.7828C0.539279 11.612 2.8066 7.43759 2.8066 7.43759C2.8066 7.43759 2.70868 7.82484 2.70868 8.27437C2.70868 8.72391 2.95241 9.06594 2.95241 9.06594C2.95241 9.06594 3.67944 7.53347 4.24525 6.91025C4.78075 6.32044 5.45204 5.84206 6.03185 5.42887C6.47816 5.11081 6.87029 4.83138 7.10447 4.56947C8.39438 3.12715 7.60347 0.5 7.60347 0.5C7.60347 0.5 9.05753 1.78188 9.46347 3.43743C9.61822 4.0685 9.51866 4.78653 9.42966 5.42863C9.28516 6.471 9.16838 7.31328 10.2123 7.25863C11.8992 7.17028 10.4333 4.56947 10.4333 4.56947C10.4333 4.56947 14.2599 6.58072 13.9741 10.0983C13.6882 13.6158 9.79138 14.4155 9.79138 14.4155C9.79138 14.4155 10.8103 13.5789 11.0081 12.8561Z" fill="#212121"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_4657">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg> ${typeElement.innerHTML}
                            `
                            break;
                        case 'water':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_5_4788)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1929 11.3286C13.1929 14.1843 10.8692 16.4993 8.00269 16.4993C5.13622 16.4993 2.8125 14.1843 2.8125 11.3286C2.8125 8.55122 7.72194 0.923372 7.99119 0.507119C7.99734 0.497627 8.00806 0.497627 8.01419 0.507119C8.28344 0.923372 13.1929 8.55122 13.1929 11.3286ZM7.1375 14.8416C4.50375 14.2653 4.95444 11.3478 4.95444 11.3478C4.95444 11.3478 5.67362 13.109 7.41891 13.6795C9.16416 14.25 11.2733 13.4133 11.2733 13.4133C11.2733 13.4133 9.77125 15.4178 7.1375 14.8416Z" fill="#212121"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_4788">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                                </svg> ${typeElement.innerHTML}
                            `
                            break;
                        case 'normal':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0312 8.5C15.0312 12.3833 11.8833 15.5312 8 15.5312C4.11675 15.5312 0.96875 12.3833 0.96875 8.5C0.96875 4.61675 4.11675 1.46875 8 1.46875C11.8833 1.46875 15.0312 4.61675 15.0312 8.5ZM12.0178 8.5C12.0178 10.719 10.219 12.5178 8 12.5178C5.781 12.5178 3.98216 10.719 3.98216 8.5C3.98216 6.281 5.781 4.48216 8 4.48216C10.219 4.48216 12.0178 6.281 12.0178 8.5Z" fill="#212121"/>
                            </svg> ${typeElement.innerHTML}
                            `
                            break;
                        case 'poison':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_5_4639)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3694 12.7953C14.9851 11.5034 16 9.63675 16 7.56094C16 3.66128 12.4183 0.5 8 0.5C3.58172 0.5 0 3.66128 0 7.56094C0 9.56181 0.942928 11.3683 2.45798 12.6532C2.36616 12.9702 2.31579 13.315 2.31579 13.6756C2.31579 15.2355 3.25834 16.5 4.42106 16.5C5.17656 16.5 5.83913 15.9661 6.21053 15.1642C6.58194 15.9661 7.2445 16.5 8 16.5C8.68869 16.5 9.30013 16.0564 9.68422 15.3705C10.0683 16.0564 10.6798 16.5 11.3684 16.5C12.5311 16.5 13.4737 15.2355 13.4737 13.6756C13.4737 13.3682 13.4371 13.0723 13.3694 12.7953ZM12.6316 7.70097C12.6316 9.68078 10.5108 11.2858 7.89475 11.2858C5.27866 11.2858 3.15791 9.68078 3.15791 7.70097C3.15791 5.72116 5.27866 4.11619 7.89475 4.11619C10.5108 4.11619 12.6316 5.72116 12.6316 7.70097Z" fill="#212121"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_4639">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                                </svg> ${typeElement.innerHTML}
                            `
                            break;
                        case 'grass':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_5_4634)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15845 14.2339C3.10353 14.1822 3.04922 14.1296 2.99554 14.0759C0.161644 11.242 0.161644 6.64734 2.99554 3.81347C5.82941 0.979563 14.8593 0.789978 14.8593 0.789978C14.8593 0.789978 16.0919 11.242 13.258 14.0759C10.7411 16.5927 6.83541 16.8743 4.00782 14.9206L6.2862 12.1246L9.92838 11.3383L6.95529 11.0411L8.84473 9.11725L10.9955 8.64609L9.29479 8.14243L10.9955 5.07443L8.57641 7.78781L7.64226 6.46959L7.9711 8.64609L6.2862 10.5455L5.50516 8.1424V11.3383L3.15845 14.2339Z" fill="#212121"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_4634">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                                </svg> ${typeElement.innerHTML}
                            `
                            
                            break;
                        case 'flying':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58475 15.4267C7.92859 15.4267 9.93522 14.124 10.7636 12.2774C10.7738 12.2548 7.43772 13.1443 7.54409 12.8299C7.59159 12.6895 9.63659 11.9424 11.1265 11.0711C11.9828 10.5702 12.3772 9.51 12.3772 9.51C12.3772 9.51 10.9345 10.2105 10.2051 10.3882C8.73537 10.7463 7.44159 10.7077 7.44159 10.6704C7.44159 10.5897 9.58988 10.1815 12.5758 8.362C13.9802 7.50616 14.3617 6.03197 14.3617 6.03197C14.3617 6.03197 12.8176 6.95172 11.8842 7.25537C9.67053 7.97547 7.65047 8.19247 7.65047 8.09503C7.65047 7.88641 9.42819 7.39756 11.313 6.48428C12.293 6.00944 13.1417 5.38906 14.1252 4.69916C15.7346 3.57037 16 1.56 16 1.56C16 1.56 14.4127 2.58375 13.6381 2.92373C10.4419 4.32659 7.61966 5.06247 5.58475 5.22178C2.513 5.46228 0 7.6055 0 10.3882C0 13.1708 2.50037 15.4267 5.58475 15.4267Z" fill="#212121"/>
                                </svg>
                            ${typeElement.innerHTML}
                            `
                            break;
                        case 'bug':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_5_4916)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6937 0.515665C10.7053 0.499049 10.7282 0.495011 10.7448 0.506645L11.8809 1.30213C11.8975 1.31377 11.9016 1.33667 11.8899 1.35328L10.3087 3.61148C11.0774 3.85706 11.6012 4.12197 11.6012 4.12197C11.6012 4.12197 10.321 6.32391 8.14981 6.32391C5.97859 6.32391 4.43575 4.27166 4.43575 4.27166C4.43575 4.27166 4.98281 3.92253 5.79375 3.6231L4.05937 1.55617C4.04634 1.54063 4.04837 1.51747 4.06391 1.50443L5.12631 0.612958C5.14188 0.599919 5.16503 0.601946 5.17806 0.617485L7.37406 3.23458C7.56209 3.21331 7.75366 3.20142 7.94697 3.20142C8.22481 3.20142 8.50231 3.22254 8.77322 3.25838L10.6937 0.515665ZM11.1233 6.42819C11.7027 6.01437 12.5794 4.93431 12.5794 4.93431C12.5794 4.93431 14.8189 6.709 14.8189 10.472C14.8189 14.235 10.9472 16.4998 10.9472 16.4998C10.9472 16.4998 9.09731 14.6316 8.64319 12.2634C8.18909 9.89528 9.31494 7.26572 9.31494 7.26572C9.31494 7.26572 10.5438 6.842 11.1233 6.42819ZM4.88316 6.42819C4.30375 6.01437 3.427 4.93431 3.427 4.93431C3.427 4.93431 1.1875 6.709 1.1875 10.472C1.1875 14.235 5.05925 16.4998 5.05925 16.4998C5.05925 16.4998 6.90909 14.6316 7.36322 12.2634C7.81731 9.89528 6.69147 7.26572 6.69147 7.26572C6.69147 7.26572 5.46259 6.842 4.88316 6.42819Z" fill="#212121"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_4916">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                                </svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                        default:
                            break;
                    }
                    // bacgkround by type
                    let typeElementBgcolor = undefined
                    
                    switch (typeList[i].type.name) {
                        case 'fire':
                            typeElementBgcolor = '#FF6464';
                            break;
                        case 'water':
                            typeElementBgcolor = '#9FF3FF';
                            break;
                        case 'normal':
                            typeElementBgcolor = '#CBCBCB';
                            break;
                        case 'poison':
                            typeElementBgcolor = '#D89CFD';
                            break;
                        case 'grass':
                            typeElementBgcolor = '#80E177';
                            break;
                        case 'flying':
                            typeElementBgcolor = '#CBE9FF';
                            break;
                        case 'bug':
                            typeElementBgcolor = '#C9FF84';
                            break;
                        default:
                            break;
                    }
                    typeElement.style = `background: ${typeElementBgcolor}`
                    console.log(typeElement.innerHTML)
                    typesElement.appendChild(typeElement)
                }
                pokemonDetailContainer.appendChild(typesElement)
                console.log(typesElement)
                console.log(backgroundColorByType)
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
