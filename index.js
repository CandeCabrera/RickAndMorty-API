//! DOM ELEMENTS

// 

const all = document.querySelector('.all');
const human = document.querySelector('.human');
const alien = document.querySelector('.alien');


function pepito() {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
    getCharacters(data);
     
});
}
pepito();

function humans () {
  fetch("https://rickandmortyapi.com/api/character/?species=Human")
    .then(response => response.json())
    .then(data => {
    console.log(data.results);
    getCharacters(data)
      
});
};

human.addEventListener('click', ()=>{
    console.log("hice click");
    humans();
   
});


function aliens () {
    fetch("https://rickandmortyapi.com/api/character/?species=Alien")
      .then(response => response.json())
      .then(data => {
      console.log(data.results);
      getCharacters(data)
        
});
};
  
alien.addEventListener('click', ()=>{
      console.log("hice click ALIEN");
      aliens();
     
});
  

all.addEventListener('click', ()=>{
    pepito()
})



function getCharacters(caca) {
    console.log("caca", caca);
    let html = "";

    caca.results.forEach(character => {
        
       html += `<article class="character-card">
            <div    class="character-image">
                <img src=${character.image} alt=""  height="100%">
            </div>
            <div class="character-info">
                <h3>Name: ${character.name}</h3>
                <p>Species: ${character.species}</p>
                <p>Status: ${character.status}</p>
            </div>

        </article>`; 

      

    });

    const main = document.querySelector('main')
    main.innerHTML = html
};

// function getCharacters(caca) {
//     console.log("caca", caca);
//     caca.results.forEach(character => {
        
//         const card = document.createRange().createContextualFragment(`<article class="character-card">
//             <div    class="character-image">
//                 <img src=${character.image} alt=""  height="100%">
//             </div>
//             <div class="character-info">
//                 <h3>Name: ${character.name}</h3>
//                 <p>Species: ${character.species}</p>
//                 <p>Status: ${character.status}</p>
//             </div>

//         </article>`); 

//         const main = document.querySelector('main')

//         main.append(card)

//     });

   
// };








/*function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character")

    results
    .then(response => response.json())
    .then(data => done(data))
}
 


getCharacters(data => {
    data.results.forEach(character => {
        
        const card = document.createRange().createContextualFragment(`<article class="character-card">
            <div    class="character-image">
                <img src=${character.image} alt=""  height="100%">
            </div>
            <div class="character-info">
                <h3>Name: ${character.name}</h3>
                <p>Species: ${character.species}</p>
                <p>Status: ${character.status}</p>
            </div>

        </article>`); 

        const main = document.querySelector('main')

        main.append(card)

    });
});*/