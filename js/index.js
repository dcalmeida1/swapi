
import './Card.js';

window.addEventListener('load', ()=>{
  loadCache();

  for (var page=1; page<=9; page++){
    getCharacters(page);
  }
  toggleLoader();
})

async function getCharacters(page){
  const url = 'https://swapi.co/api/people/?page=' + page;
  const res = await fetch(url);
  if (res.status === 200){
    const json = await res.json();
    const characters = json.results;
    var wrapper = document.querySelector('.sw-wrapper');
    var content = document.querySelector('.sw-content');
 
    characters.forEach(character => {
      const el = document.createElement('sw-card');
      el.card = character;
      content.append(el);
      wrapper.append(content);
    });

  }
}

function loadCache(){
  var characters = localStorage.getItem('newChar');
  if (characters !== null){
    characters = JSON.parse(characters);
    characters = characters.reverse();
    var wrapper = document.querySelector('.sw-wrapper');
    var content = document.querySelector('.sw-content');
    characters.forEach(character => {
      const el = document.createElement('sw-card');
      el.card = character;
      content.append(el);
      wrapper.append(content);
    });
  }
}

function toggleLoader(){
  var loader = document.querySelector('.sw-loader');
  var loaderClasses = loader.classList;
  if (!loaderClasses.contains('sw-loader--active')){
    loaderClasses.add('sw-loader--active');
  }else{
    loaderClasses.remove('sw-loader--active');
  }
}
