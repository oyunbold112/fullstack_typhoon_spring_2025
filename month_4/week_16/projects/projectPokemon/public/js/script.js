console.log('Pokemon API')
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000';
mainElements = document.getElementsByTagName('main')
let globalData = undefined
console.log(mainElements)

fetch(POKEMON_URL)
    .then((response) => response.json())
    .then((data) => {
        const pokemons = data.results;
        globalData = pokemons;
        console.log('global dataa')
        console.log(globalData)
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
                console.log('data shu')
                console.log(data)
                // pokemon id
                const pokemonIdElement = document.createElement('p')
                const pokemon_id = data.id
                globalData[count].id = pokemon_id
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
                    case 'rock':
                        backgroundColorByType = '#857D57';
                        break;
                    case 'ground':
                        backgroundColorByType = '#A77437';
                        break;
                    case 'fighting':
                        backgroundColorByType = '#BA114E';
                        break;
                    case 'ghost':
                        backgroundColorByType = '#6B2BF1';
                        break;
                    case 'psychic':
                        backgroundColorByType = '#C4484A';
                        break;
                    case 'ice':
                        backgroundColorByType = '#3A9D90';
                        break;
                    case 'dragon':
                        backgroundColorByType = '#1268B8';
                        break;
                    case 'dark':
                        backgroundColorByType = '#373737';
                        break;
                    case 'fairy':
                        backgroundColorByType = '#C01A8D';
                        break;
                    case 'electric':
                        backgroundColorByType = '#B7B117';
                        break;
                    case 'steel':
                        backgroundColorByType = '#448F85';
                        break;
                    default:
                        break;
                }
                pokemonDetailContainer.addEventListener('click', () => showModal(data, backgroundColorByType));
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
                        case 'dragon':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0278 7.96503C9.13623 7.89891 9.22823 7.76034 9.30242 7.60634C10.2788 8.00541 10.965 8.94841 10.965 10.0481C10.965 11.5091 9.75405 12.6934 8.2603 12.6934C7.64711 12.6934 7.08158 12.4938 6.62792 12.1575C6.47911 12.087 6.35667 12.0193 6.25648 11.9639C6.10108 11.878 5.99917 11.8217 5.93536 11.8305C5.74883 11.8562 5.80298 12.0278 5.8522 12.1837C5.88561 12.2896 5.91677 12.3883 5.86855 12.429C5.81811 12.4716 5.65473 12.3158 5.46383 12.1338C5.20395 11.886 4.89308 11.5896 4.74648 11.6787C4.63058 11.7491 4.74311 11.94 4.88086 12.1738L4.89108 12.1911C4.94927 12.2899 5.0167 12.3906 5.07823 12.4824C5.20333 12.669 5.30408 12.8193 5.25367 12.8448C5.19273 12.8755 4.76817 12.589 4.41039 12.1911C4.2723 12.0376 4.13855 11.8712 4.01423 11.7165V11.7165C3.74214 11.3779 3.51545 11.0959 3.3882 11.1293C3.23513 11.1695 3.35093 11.4852 3.52108 11.7891C3.60064 11.9312 3.69423 12.0758 3.77527 12.2011V12.2012C3.9013 12.396 3.99695 12.5438 3.96227 12.562C3.91545 12.5865 3.50355 12.1848 3.22378 11.6787C3.05761 11.378 2.91808 11.0457 2.80511 10.7768C2.68261 10.4851 2.59136 10.2678 2.53127 10.2459C2.3225 10.1699 2.3225 10.5956 2.40623 11.2099C2.41715 11.2901 2.43342 11.3742 2.45345 11.4598C3.26545 14.087 5.75986 16 8.71108 16C12.321 16 15.2474 13.1379 15.2474 9.60725C15.2474 6.24688 12.5965 3.49209 9.22836 3.23419C9.23261 3.07589 9.31523 2.76197 9.31523 2.76197C9.31523 2.76197 9.90983 1.32335 9.94127 1.01593C9.94333 0.995531 9.9458 0.973359 9.94845 0.949747C9.98548 0.617591 10.0544 0 9.52308 0C9.23933 0 9.10739 0.211083 8.95649 0.452497C8.89855 0.545175 8.8378 0.642328 8.76461 0.733719C8.23748 1.39199 7.35111 2.21403 6.84852 2.65197C5.7862 3.57762 4.74395 4.33838 4.13608 4.78206L4.13605 4.78209C3.85958 4.98387 3.67298 5.12009 3.61523 5.17637C3.18005 5.60063 1.61967 8.41519 1.61967 8.41519C1.61967 8.41519 1.11506 9.31819 1.29442 9.50134C1.47378 9.68447 1.9063 9.6425 1.9063 9.6425C1.9063 9.6425 7.71695 8.30947 8.23717 8.20434C8.37723 8.17603 8.47611 8.15969 8.55202 8.14716C8.75811 8.11313 8.79511 8.107 9.0278 7.96503ZM4.91945 6.252C4.60755 6.54847 4.09027 7.25612 4.09027 7.25612C4.09027 7.25612 5.05164 7.31534 5.58111 6.81206C6.11061 6.30875 5.9893 5.45103 5.9893 5.45103C5.9893 5.45103 5.23133 5.95553 4.91945 6.252Z" fill="#212121"/>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                        case 'fighting':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36660)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.01316 1.33018C3.20679 0.565669 3.89939 0 4.72408 0C5.34267 0 5.88695 0.318272 6.20208 0.8H6.71811C7.0387 0.470987 7.48661 0.266667 7.98227 0.266667C8.70895 0.266667 9.33308 0.705881 9.60364 1.33333H10.0357C10.3064 1.16433 10.6263 1.06667 10.9689 1.06667C11.6956 1.06667 12.3197 1.50588 12.5903 2.13333H13.7651C13.7752 2.13333 13.7846 2.13604 13.7927 2.14075C13.8463 2.13584 13.9007 2.13333 13.9556 2.13333C14.9303 2.13333 15.7204 2.92348 15.7204 3.89819V9.19019L15.7205 9.2L15.7204 9.20981V9.28603C15.7204 9.31831 15.7195 9.35047 15.7178 9.38247C15.6116 13.0537 12.3105 16 8.25377 16C4.13005 16 0.787109 12.9555 0.787109 9.2C0.787109 7.38722 1.56601 5.74009 2.83566 4.52109C2.83249 6.28837 2.86234 8.11544 2.99994 8.08409C3.36839 8.00009 3.08052 2.52623 3.01316 1.33018Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36660">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'fairy':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36662)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46605 12.6868L6.03236 11.9427L8.24892 15.9955C8.25183 16.0008 8.25936 16.0008 8.26223 15.9955L10.4788 11.9427L13.0451 12.6868C13.0509 12.6885 13.0562 12.6831 13.0545 12.6774L12.3103 10.1618L16.2514 8.00638C16.2566 8.0035 16.2566 7.99597 16.2514 7.99309L12.2778 5.81984L13.0545 3.19453C13.0562 3.18878 13.0509 3.18344 13.0451 3.18509L10.4186 3.94669L8.26223 0.00394338C8.25936 -0.00131436 8.25183 -0.00131451 8.24895 0.00394325L6.09258 3.94669L3.46605 3.18509C3.4603 3.18344 3.45495 3.18878 3.45667 3.19453L4.23339 5.81984L0.259803 7.99309C0.254545 7.99597 0.254545 8.0035 0.259803 8.00638L4.20089 10.1618L3.45667 12.6774C3.45495 12.6831 3.4603 12.6885 3.46605 12.6868ZM5.45748 8.02738L7.27558 9.02172L8.26992 10.8398C8.2728 10.8451 8.28036 10.8451 8.28323 10.8398L9.27758 9.02172L11.0956 8.02738C11.1009 8.0245 11.1009 8.01694 11.0956 8.01406L9.27758 7.01972L8.28323 5.20166C8.28036 5.19637 8.2728 5.19637 8.26992 5.20166L7.27558 7.01972L5.45748 8.01406C5.45223 8.01694 5.45223 8.0245 5.45748 8.02738Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36662">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'dark':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36664)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42395 14.1516C7.72792 14.1981 8.03923 14.2222 8.35623 14.2222C11.7313 14.2222 14.4673 11.4862 14.4673 8.11112C14.4673 4.73603 11.7313 2 8.35623 2C8.1298 2 7.9062 2.01232 7.68617 2.03632C9.36039 3.30472 10.4673 5.50194 10.4673 8C10.4673 10.6263 9.24386 12.92 7.42395 14.1516ZM8.24511 16C12.6634 16 16.2451 12.4183 16.2451 8C16.2451 3.58172 12.6634 0 8.24511 0C3.82683 0 0.245117 3.58172 0.245117 8C0.245117 12.4183 3.82683 16 8.24511 16Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36664">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'ground':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36666)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77973 13.7423C3.77539 13.7423 3.77236 13.738 3.7738 13.7339L7.85864 2.19169C7.85955 2.18918 7.86192 2.1875 7.86458 2.1875H12.2253C12.2279 2.1875 12.2303 2.18919 12.2312 2.19172L16.2555 13.734C16.2569 13.7381 16.2538 13.7423 16.2495 13.7423H3.90248H3.77973ZM0.26215 13.7875C0.257763 13.7875 0.254725 13.7831 0.256264 13.779L3.29813 5.658C3.29905 5.65553 3.30139 5.65391 3.30402 5.65391H5.94705C5.95142 5.65391 5.95445 5.65825 5.95295 5.66234L3.01156 13.7833C3.01066 13.7858 3.00829 13.7875 3.00565 13.7875H0.26215Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36666">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'ice':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36668)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2653 1.22009L12.3145 5.54354L8.54357 7.35375L8.49707 3.2716L12.2653 1.22009Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0453 8.03273L12.3123 10.168L8.57715 8.02936L12.3104 6.06836L16.0453 8.03273Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91348 8.03273L4.18051 10.168L0.445312 8.02936L4.17857 6.06836L7.91348 8.03273Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.13867 1.20239L8.01323 3.12132L7.91417 7.30307L4.25586 5.49126L4.13867 1.20239Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3707 14.7977L8.49609 12.8788L8.59516 8.69702L12.2535 10.5089L12.3707 14.7977Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27191 14.8367L4.22266 10.5132L7.99362 8.703L8.04013 12.7851L4.27191 14.8367Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36668">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'steel':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36676)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.257457 7.95397C0.255328 7.95034 0.255327 7.94584 0.257454 7.94219L4.2807 1.06826C4.2828 1.06469 4.28664 1.0625 4.29077 1.0625H12.265C12.2692 1.0625 12.273 1.06471 12.2751 1.06831L16.2543 7.94225C16.2564 7.94584 16.2564 7.95031 16.2543 7.95391L12.2751 14.8201C12.273 14.8237 12.2692 14.8259 12.265 14.8259H4.29077C4.28664 14.8259 4.2828 14.8238 4.2807 14.8202L0.257457 7.95397ZM11.9626 7.94422C11.9626 9.99072 10.3036 11.6497 8.25711 11.6497C6.21061 11.6497 4.55158 9.99072 4.55158 7.94422C4.55158 5.89769 6.21061 4.23869 8.25711 4.23869C10.3036 4.23869 11.9626 5.89769 11.9626 7.94422Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36676">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'rock':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36678)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6039 7.64866C12.603 7.64741 12.6026 7.64584 12.6029 7.64431L13.6236 1.69224C13.6241 1.6895 13.6265 1.6875 13.6293 1.6875H13.9523C13.9548 1.6875 13.957 1.68912 13.9578 1.69149L16.2575 8.97284C16.2582 8.97509 16.2574 8.97759 16.2555 8.97906L14.5599 10.3029C14.5574 10.3049 14.5537 10.3044 14.5518 10.3018L12.6039 7.64866ZM0.224609 11.5944C0.224609 11.5969 0.226197 11.5991 0.228543 11.5999L3.72383 12.7427C3.72552 12.7433 3.72739 12.743 3.72886 12.742L11.5416 7.34825C11.543 7.34734 11.5438 7.34594 11.544 7.34438L12.3819 1.72276C12.3824 1.71931 12.3797 1.71621 12.3762 1.71621H5.45605C5.45433 1.71621 5.45273 1.71697 5.45164 1.71828L0.225923 8.02231C0.225074 8.02334 0.224609 8.02462 0.224609 8.02597V11.5944ZM5.18033 13.0339L8.99886 14.2847C9.00058 14.2853 9.00248 14.285 9.00395 14.284L13.5502 11.0229C13.5527 11.0212 13.5533 11.0177 13.5516 11.0151L11.8474 8.47903C11.8456 8.47638 11.842 8.47569 11.8394 8.4775L5.18033 13.0339Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36678">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'electric':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.02327 0.0182393C5.02017 0.00931125 5.02683 0 5.03627 0H10.6559C10.662 0 10.6673 0.00392459 10.6691 0.00968069L13.2503 8.34909C13.253 8.35794 13.2464 8.36691 13.2371 8.36691H9.49589C9.49133 8.36691 9.48805 8.37125 9.4893 8.37566L11.635 15.9289C11.6392 15.9436 11.62 15.9532 11.6108 15.941L3.27232 4.85209C3.2655 4.84303 3.27197 4.83009 3.2833 4.83009H6.67877C6.68349 4.83009 6.6868 4.82544 6.68524 4.82097L5.02327 0.0182393Z" fill="#212121"/>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'ghost':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36682)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7856 15.9446C10.3424 16.0185 8.69011 16.0185 8.12861 15.9446C3.74867 15.3684 0.255859 12.166 0.255859 7.8375C0.255859 3.50897 3.83758 0 8.25586 0C12.6741 0 16.2559 3.50897 16.2559 7.8375C16.2559 9.85066 15.4811 11.6865 14.2077 13.0746C13.862 13.4515 14.3364 13.7159 14.8184 13.9845C15.2912 14.248 15.7712 14.5155 15.4922 14.8973C15.1848 15.3179 13.5181 15.8559 11.7856 15.9446ZM7.13086 6.85781C7.13086 7.53412 6.5712 8.08241 5.88086 8.08241C5.19052 8.08241 4.63086 7.53412 4.63086 6.85781C4.63086 6.40422 4.88258 6.00825 5.25661 5.79659C5.27814 6.38631 5.76302 6.85778 6.35802 6.85778L7.13086 6.85781ZM11.0051 5.79659C10.9836 6.38631 10.4987 6.85778 9.9037 6.85778H9.13086C9.13086 7.53409 9.69052 8.08241 10.3809 8.08241C11.0712 8.08241 11.6309 7.53412 11.6309 6.85781C11.6309 6.40422 11.3791 6.00825 11.0051 5.79659Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36682">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'psychic':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36684)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5035 13.287C14.5035 13.287 12.486 14.9051 8.47127 14.2355C5.42533 13.7275 3.80077 10.3698 3.80077 8.56497C3.80077 4.28591 6.96783 3.31213 9.10898 3.31213C11.2501 3.31213 12.6469 5.39963 12.6469 7.01588C12.6469 8.63213 11.5038 10.0458 9.7248 10.0458C7.94586 10.0458 7.41898 8.79691 7.41898 7.64869C7.41898 6.5005 8.34795 6.09597 9.19517 6.09597C10.0424 6.09597 10.3325 6.81928 10.3325 7.44094C10.3325 8.06263 9.85014 8.28525 9.44783 8.28525C9.04552 8.28525 9.00573 8.08228 8.85176 7.86897C8.69776 7.65569 9.04814 6.84831 8.47127 6.84831C7.89439 6.84831 7.78686 7.77647 7.78686 7.77647C7.78686 7.77647 7.99717 9.56813 9.7248 9.53722C11.4525 9.50628 12.272 8.17066 12.0339 6.84831C11.7957 5.52594 10.5123 4.12078 8.26002 4.40472C6.0077 4.68866 5.08811 6.96441 5.49345 9.39641C5.8988 11.8284 8.81233 13.2376 11.1031 12.7306C13.3939 12.2236 15.6755 10.5652 15.6755 6.36041C15.6755 2.15559 12.0339 -0.371881 7.69151 0.0446606C3.34917 0.4612 0.65364 4.25756 0.826178 8.81897C0.998715 13.3804 5.32695 15.8647 8.98692 15.9927C12.6469 16.1208 14.8906 14.0021 14.8906 14.0021C14.8906 14.0021 15.3952 13.5521 15.1974 13.2008C14.9995 12.8494 14.5035 13.287 14.5035 13.287Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36684">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
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
                        case 'rock':
                            typeElementBgcolor = '#CFC06F';
                            break;
                        case 'ground':
                            typeElementBgcolor = '#FFBF72';
                            break;
                        case 'fighting':
                            typeElementBgcolor = '#FF699F';
                            break;
                        case 'ghost':
                            typeElementBgcolor = '#B592FF';
                            break;
                        case 'psychic':
                            typeElementBgcolor = '#FF5E60';
                            break;
                        case 'ice':
                            typeElementBgcolor = '#AEFFF4';
                            break;
                        case 'dragon':
                            typeElementBgcolor = '#87C5FF';
                            break;
                        case 'dark':
                            typeElementBgcolor = '#8F8F8F';
                            break;
                        case 'fairy':
                            typeElementBgcolor = '#FFA2E3';
                            break;
                        case 'electric':
                            typeElementBgcolor = '#FFFA86';
                            break;
                        case 'steel':
                            typeElementBgcolor = '#A4FFE9';
                            break;                       
                        default:
                            break;
                    }
                    typeElement.style = `background: ${typeElementBgcolor}`
                    // console.log(typeElement.innerHTML)
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

// filter

const changeOrder = document.getElementById('sort')
changeOrder.addEventListener('change', filterAndDisplay);

function filterAndDisplay() {
    const selectedOrder = changeOrder.value;
    // sort by price
    if (selectedOrder == "lowest number first"){
        let byNumberAsc = globalData.slice().sort((a, b) => a.id - b.id);
        console.log('Ascending', byNumberAsc)
        displayData(byNumberAsc)
    }
    else if (selectedOrder == "highest number first") {
        let byNumberDesc = globalData.slice().sort((a, b) => b.id - a.id);
        console.log('Ascending', byNumberDesc)
        displayData(byNumberDesc)
    }
    else if (selectedOrder == "Alphabetically (A-Z)") {
        let byNameA = globalData.slice().sort((a, b) => a.name.localeCompare(b.name));
        displayData(byNameA)
    }
    else if (selectedOrder == "Alphabetically (Z-A)") {
        let byNameZ = globalData.slice().sort((a, b) => b.name.localeCompare(a.name));
        displayData(byNameZ)
    }
}

function displayData(pokemons) {
        const mainElement = mainElements[0]
        const sectElement = document.getElementsByTagName('section')
        sectElement[0].remove()
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
                // console.log(data)
               
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
                // console.log(pokemon_id)
                
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
                    case 'rock':
                        backgroundColorByType = '#857D57';
                        break;
                    case 'ground':
                        backgroundColorByType = '#A77437';
                        break;
                    case 'fighting':
                        backgroundColorByType = '#BA114E';
                        break;
                    case 'ghost':
                        backgroundColorByType = '#6B2BF1';
                        break;
                    case 'psychic':
                        backgroundColorByType = '#C4484A';
                        break;
                    case 'ice':
                        backgroundColorByType = '#3A9D90';
                        break;
                    case 'dragon':
                        backgroundColorByType = '#1268B8';
                        break;
                    case 'dark':
                        backgroundColorByType = '#373737';
                        break;
                    case 'fairy':
                        backgroundColorByType = '#C01A8D';
                        break;
                    case 'electric':
                        backgroundColorByType = '#B7B117';
                        break;
                    case 'steel':
                        backgroundColorByType = '#448F85';
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
                        case 'dragon':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0278 7.96503C9.13623 7.89891 9.22823 7.76034 9.30242 7.60634C10.2788 8.00541 10.965 8.94841 10.965 10.0481C10.965 11.5091 9.75405 12.6934 8.2603 12.6934C7.64711 12.6934 7.08158 12.4938 6.62792 12.1575C6.47911 12.087 6.35667 12.0193 6.25648 11.9639C6.10108 11.878 5.99917 11.8217 5.93536 11.8305C5.74883 11.8562 5.80298 12.0278 5.8522 12.1837C5.88561 12.2896 5.91677 12.3883 5.86855 12.429C5.81811 12.4716 5.65473 12.3158 5.46383 12.1338C5.20395 11.886 4.89308 11.5896 4.74648 11.6787C4.63058 11.7491 4.74311 11.94 4.88086 12.1738L4.89108 12.1911C4.94927 12.2899 5.0167 12.3906 5.07823 12.4824C5.20333 12.669 5.30408 12.8193 5.25367 12.8448C5.19273 12.8755 4.76817 12.589 4.41039 12.1911C4.2723 12.0376 4.13855 11.8712 4.01423 11.7165V11.7165C3.74214 11.3779 3.51545 11.0959 3.3882 11.1293C3.23513 11.1695 3.35093 11.4852 3.52108 11.7891C3.60064 11.9312 3.69423 12.0758 3.77527 12.2011V12.2012C3.9013 12.396 3.99695 12.5438 3.96227 12.562C3.91545 12.5865 3.50355 12.1848 3.22378 11.6787C3.05761 11.378 2.91808 11.0457 2.80511 10.7768C2.68261 10.4851 2.59136 10.2678 2.53127 10.2459C2.3225 10.1699 2.3225 10.5956 2.40623 11.2099C2.41715 11.2901 2.43342 11.3742 2.45345 11.4598C3.26545 14.087 5.75986 16 8.71108 16C12.321 16 15.2474 13.1379 15.2474 9.60725C15.2474 6.24688 12.5965 3.49209 9.22836 3.23419C9.23261 3.07589 9.31523 2.76197 9.31523 2.76197C9.31523 2.76197 9.90983 1.32335 9.94127 1.01593C9.94333 0.995531 9.9458 0.973359 9.94845 0.949747C9.98548 0.617591 10.0544 0 9.52308 0C9.23933 0 9.10739 0.211083 8.95649 0.452497C8.89855 0.545175 8.8378 0.642328 8.76461 0.733719C8.23748 1.39199 7.35111 2.21403 6.84852 2.65197C5.7862 3.57762 4.74395 4.33838 4.13608 4.78206L4.13605 4.78209C3.85958 4.98387 3.67298 5.12009 3.61523 5.17637C3.18005 5.60063 1.61967 8.41519 1.61967 8.41519C1.61967 8.41519 1.11506 9.31819 1.29442 9.50134C1.47378 9.68447 1.9063 9.6425 1.9063 9.6425C1.9063 9.6425 7.71695 8.30947 8.23717 8.20434C8.37723 8.17603 8.47611 8.15969 8.55202 8.14716C8.75811 8.11313 8.79511 8.107 9.0278 7.96503ZM4.91945 6.252C4.60755 6.54847 4.09027 7.25612 4.09027 7.25612C4.09027 7.25612 5.05164 7.31534 5.58111 6.81206C6.11061 6.30875 5.9893 5.45103 5.9893 5.45103C5.9893 5.45103 5.23133 5.95553 4.91945 6.252Z" fill="#212121"/>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                        case 'fighting':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36660)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.01316 1.33018C3.20679 0.565669 3.89939 0 4.72408 0C5.34267 0 5.88695 0.318272 6.20208 0.8H6.71811C7.0387 0.470987 7.48661 0.266667 7.98227 0.266667C8.70895 0.266667 9.33308 0.705881 9.60364 1.33333H10.0357C10.3064 1.16433 10.6263 1.06667 10.9689 1.06667C11.6956 1.06667 12.3197 1.50588 12.5903 2.13333H13.7651C13.7752 2.13333 13.7846 2.13604 13.7927 2.14075C13.8463 2.13584 13.9007 2.13333 13.9556 2.13333C14.9303 2.13333 15.7204 2.92348 15.7204 3.89819V9.19019L15.7205 9.2L15.7204 9.20981V9.28603C15.7204 9.31831 15.7195 9.35047 15.7178 9.38247C15.6116 13.0537 12.3105 16 8.25377 16C4.13005 16 0.787109 12.9555 0.787109 9.2C0.787109 7.38722 1.56601 5.74009 2.83566 4.52109C2.83249 6.28837 2.86234 8.11544 2.99994 8.08409C3.36839 8.00009 3.08052 2.52623 3.01316 1.33018Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36660">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'fairy':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36662)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46605 12.6868L6.03236 11.9427L8.24892 15.9955C8.25183 16.0008 8.25936 16.0008 8.26223 15.9955L10.4788 11.9427L13.0451 12.6868C13.0509 12.6885 13.0562 12.6831 13.0545 12.6774L12.3103 10.1618L16.2514 8.00638C16.2566 8.0035 16.2566 7.99597 16.2514 7.99309L12.2778 5.81984L13.0545 3.19453C13.0562 3.18878 13.0509 3.18344 13.0451 3.18509L10.4186 3.94669L8.26223 0.00394338C8.25936 -0.00131436 8.25183 -0.00131451 8.24895 0.00394325L6.09258 3.94669L3.46605 3.18509C3.4603 3.18344 3.45495 3.18878 3.45667 3.19453L4.23339 5.81984L0.259803 7.99309C0.254545 7.99597 0.254545 8.0035 0.259803 8.00638L4.20089 10.1618L3.45667 12.6774C3.45495 12.6831 3.4603 12.6885 3.46605 12.6868ZM5.45748 8.02738L7.27558 9.02172L8.26992 10.8398C8.2728 10.8451 8.28036 10.8451 8.28323 10.8398L9.27758 9.02172L11.0956 8.02738C11.1009 8.0245 11.1009 8.01694 11.0956 8.01406L9.27758 7.01972L8.28323 5.20166C8.28036 5.19637 8.2728 5.19637 8.26992 5.20166L7.27558 7.01972L5.45748 8.01406C5.45223 8.01694 5.45223 8.0245 5.45748 8.02738Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36662">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'dark':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36664)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42395 14.1516C7.72792 14.1981 8.03923 14.2222 8.35623 14.2222C11.7313 14.2222 14.4673 11.4862 14.4673 8.11112C14.4673 4.73603 11.7313 2 8.35623 2C8.1298 2 7.9062 2.01232 7.68617 2.03632C9.36039 3.30472 10.4673 5.50194 10.4673 8C10.4673 10.6263 9.24386 12.92 7.42395 14.1516ZM8.24511 16C12.6634 16 16.2451 12.4183 16.2451 8C16.2451 3.58172 12.6634 0 8.24511 0C3.82683 0 0.245117 3.58172 0.245117 8C0.245117 12.4183 3.82683 16 8.24511 16Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36664">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'ground':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36666)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77973 13.7423C3.77539 13.7423 3.77236 13.738 3.7738 13.7339L7.85864 2.19169C7.85955 2.18918 7.86192 2.1875 7.86458 2.1875H12.2253C12.2279 2.1875 12.2303 2.18919 12.2312 2.19172L16.2555 13.734C16.2569 13.7381 16.2538 13.7423 16.2495 13.7423H3.90248H3.77973ZM0.26215 13.7875C0.257763 13.7875 0.254725 13.7831 0.256264 13.779L3.29813 5.658C3.29905 5.65553 3.30139 5.65391 3.30402 5.65391H5.94705C5.95142 5.65391 5.95445 5.65825 5.95295 5.66234L3.01156 13.7833C3.01066 13.7858 3.00829 13.7875 3.00565 13.7875H0.26215Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36666">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'ice':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36668)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2653 1.22009L12.3145 5.54354L8.54357 7.35375L8.49707 3.2716L12.2653 1.22009Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0453 8.03273L12.3123 10.168L8.57715 8.02936L12.3104 6.06836L16.0453 8.03273Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91348 8.03273L4.18051 10.168L0.445312 8.02936L4.17857 6.06836L7.91348 8.03273Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.13867 1.20239L8.01323 3.12132L7.91417 7.30307L4.25586 5.49126L4.13867 1.20239Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3707 14.7977L8.49609 12.8788L8.59516 8.69702L12.2535 10.5089L12.3707 14.7977Z" fill="#212121"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27191 14.8367L4.22266 10.5132L7.99362 8.703L8.04013 12.7851L4.27191 14.8367Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36668">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'steel':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36676)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.257457 7.95397C0.255328 7.95034 0.255327 7.94584 0.257454 7.94219L4.2807 1.06826C4.2828 1.06469 4.28664 1.0625 4.29077 1.0625H12.265C12.2692 1.0625 12.273 1.06471 12.2751 1.06831L16.2543 7.94225C16.2564 7.94584 16.2564 7.95031 16.2543 7.95391L12.2751 14.8201C12.273 14.8237 12.2692 14.8259 12.265 14.8259H4.29077C4.28664 14.8259 4.2828 14.8238 4.2807 14.8202L0.257457 7.95397ZM11.9626 7.94422C11.9626 9.99072 10.3036 11.6497 8.25711 11.6497C6.21061 11.6497 4.55158 9.99072 4.55158 7.94422C4.55158 5.89769 6.21061 4.23869 8.25711 4.23869C10.3036 4.23869 11.9626 5.89769 11.9626 7.94422Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36676">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'rock':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36678)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6039 7.64866C12.603 7.64741 12.6026 7.64584 12.6029 7.64431L13.6236 1.69224C13.6241 1.6895 13.6265 1.6875 13.6293 1.6875H13.9523C13.9548 1.6875 13.957 1.68912 13.9578 1.69149L16.2575 8.97284C16.2582 8.97509 16.2574 8.97759 16.2555 8.97906L14.5599 10.3029C14.5574 10.3049 14.5537 10.3044 14.5518 10.3018L12.6039 7.64866ZM0.224609 11.5944C0.224609 11.5969 0.226197 11.5991 0.228543 11.5999L3.72383 12.7427C3.72552 12.7433 3.72739 12.743 3.72886 12.742L11.5416 7.34825C11.543 7.34734 11.5438 7.34594 11.544 7.34438L12.3819 1.72276C12.3824 1.71931 12.3797 1.71621 12.3762 1.71621H5.45605C5.45433 1.71621 5.45273 1.71697 5.45164 1.71828L0.225923 8.02231C0.225074 8.02334 0.224609 8.02462 0.224609 8.02597V11.5944ZM5.18033 13.0339L8.99886 14.2847C9.00058 14.2853 9.00248 14.285 9.00395 14.284L13.5502 11.0229C13.5527 11.0212 13.5533 11.0177 13.5516 11.0151L11.8474 8.47903C11.8456 8.47638 11.842 8.47569 11.8394 8.4775L5.18033 13.0339Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36678">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'electric':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.02327 0.0182393C5.02017 0.00931125 5.02683 0 5.03627 0H10.6559C10.662 0 10.6673 0.00392459 10.6691 0.00968069L13.2503 8.34909C13.253 8.35794 13.2464 8.36691 13.2371 8.36691H9.49589C9.49133 8.36691 9.48805 8.37125 9.4893 8.37566L11.635 15.9289C11.6392 15.9436 11.62 15.9532 11.6108 15.941L3.27232 4.85209C3.2655 4.84303 3.27197 4.83009 3.2833 4.83009H6.67877C6.68349 4.83009 6.6868 4.82544 6.68524 4.82097L5.02327 0.0182393Z" fill="#212121"/>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'ghost':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36682)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7856 15.9446C10.3424 16.0185 8.69011 16.0185 8.12861 15.9446C3.74867 15.3684 0.255859 12.166 0.255859 7.8375C0.255859 3.50897 3.83758 0 8.25586 0C12.6741 0 16.2559 3.50897 16.2559 7.8375C16.2559 9.85066 15.4811 11.6865 14.2077 13.0746C13.862 13.4515 14.3364 13.7159 14.8184 13.9845C15.2912 14.248 15.7712 14.5155 15.4922 14.8973C15.1848 15.3179 13.5181 15.8559 11.7856 15.9446ZM7.13086 6.85781C7.13086 7.53412 6.5712 8.08241 5.88086 8.08241C5.19052 8.08241 4.63086 7.53412 4.63086 6.85781C4.63086 6.40422 4.88258 6.00825 5.25661 5.79659C5.27814 6.38631 5.76302 6.85778 6.35802 6.85778L7.13086 6.85781ZM11.0051 5.79659C10.9836 6.38631 10.4987 6.85778 9.9037 6.85778H9.13086C9.13086 7.53409 9.69052 8.08241 10.3809 8.08241C11.0712 8.08241 11.6309 7.53412 11.6309 6.85781C11.6309 6.40422 11.3791 6.00825 11.0051 5.79659Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36682">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
    </clipPath>
  </defs>
</svg>
                                ${typeElement.innerHTML}
                            `
                            break;
                            case 'psychic':
                            typeElement.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_52_36684)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5035 13.287C14.5035 13.287 12.486 14.9051 8.47127 14.2355C5.42533 13.7275 3.80077 10.3698 3.80077 8.56497C3.80077 4.28591 6.96783 3.31213 9.10898 3.31213C11.2501 3.31213 12.6469 5.39963 12.6469 7.01588C12.6469 8.63213 11.5038 10.0458 9.7248 10.0458C7.94586 10.0458 7.41898 8.79691 7.41898 7.64869C7.41898 6.5005 8.34795 6.09597 9.19517 6.09597C10.0424 6.09597 10.3325 6.81928 10.3325 7.44094C10.3325 8.06263 9.85014 8.28525 9.44783 8.28525C9.04552 8.28525 9.00573 8.08228 8.85176 7.86897C8.69776 7.65569 9.04814 6.84831 8.47127 6.84831C7.89439 6.84831 7.78686 7.77647 7.78686 7.77647C7.78686 7.77647 7.99717 9.56813 9.7248 9.53722C11.4525 9.50628 12.272 8.17066 12.0339 6.84831C11.7957 5.52594 10.5123 4.12078 8.26002 4.40472C6.0077 4.68866 5.08811 6.96441 5.49345 9.39641C5.8988 11.8284 8.81233 13.2376 11.1031 12.7306C13.3939 12.2236 15.6755 10.5652 15.6755 6.36041C15.6755 2.15559 12.0339 -0.371881 7.69151 0.0446606C3.34917 0.4612 0.65364 4.25756 0.826178 8.81897C0.998715 13.3804 5.32695 15.8647 8.98692 15.9927C12.6469 16.1208 14.8906 14.0021 14.8906 14.0021C14.8906 14.0021 15.3952 13.5521 15.1974 13.2008C14.9995 12.8494 14.5035 13.287 14.5035 13.287Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_52_36684">
      <rect width="16" height="16" fill="white" transform="translate(0.255859)"/>
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
                        case 'rock':
                            typeElementBgcolor = '#CFC06F';
                            break;
                        case 'ground':
                            typeElementBgcolor = '#FFBF72';
                            break;
                        case 'fighting':
                            typeElementBgcolor = '#FF699F';
                            break;
                        case 'ghost':
                            typeElementBgcolor = '#B592FF';
                            break;
                        case 'psychic':
                            typeElementBgcolor = '#FF5E60';
                            break;
                        case 'ice':
                            typeElementBgcolor = '#AEFFF4';
                            break;
                        case 'dragon':
                            typeElementBgcolor = '#87C5FF';
                            break;
                        case 'dark':
                            typeElementBgcolor = '#8F8F8F';
                            break;
                        case 'fairy':
                            typeElementBgcolor = '#FFA2E3';
                            break;
                        case 'electric':
                            typeElementBgcolor = '#FFFA86';
                            break;
                        case 'steel':
                            typeElementBgcolor = '#A4FFE9';
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
}

// Search
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

function searchData() {
    let searchResult = globalData.slice().filter((e) => e.name.includes(searchInput.value))
    displayData(searchResult)
}

searchButton.addEventListener('click', searchData)
function debounce(func, timeout = 3000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), timeout);
    }
}

const debouncedSearch = debounce(searchData);

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchData()
    }
    else {
        debouncedSearch();
    }
})

function showModal(data, bgcolor) {
    const modal = document.getElementById('pokemon-modal')
    const modalContent = document.getElementById('modal-content')
    const modalImage = document.getElementById('modal-img')
    const modalTitle = document.getElementById('modal-title')
    const modalAbout = document.getElementById('modal-about');
    
    modalImage.src = data.sprites.other['official-artwork'].front_default;
    modal.style.display = 'block';
    modalContent.style = `background-color: ${bgcolor}`
    modalTitle.style = `color: ${bgcolor}`
    window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        }
    });
}











