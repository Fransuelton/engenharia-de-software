const xhr = new XMLHttpRequest();
const baseUrl = "https://rickandmortyapi.com/api";

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    manipulateJson(this);
  }
};

xhr.open("GET", `${baseUrl}/character`, true);
xhr.send();

let nextpageUrl = "";

const manipulateJson = (json) => {
  const jsonFile = JSON.parse(json.responseText);

  nextpageUrl = jsonFile.info.next;

  const characters = jsonFile.results;

  let allCharactersCards = "";

  for (let index = 0; index < characters.length; index++) {
    const character = characters[index];

    const characterCard = `
    <article class="character-card">
        <div class="character-id">#${character.id}</div>
        <img src="${character.image}" alt="${character.name}" class="image"/>
        <h2 class="name">${character.name}</h2>
        <div class="info-wrapper">
          <p class="specie">${character.species}</p>
          <p class="status">${character.status}</p>
        </div>
    </article>
  `;

    allCharactersCards += characterCard;
  }

  document.querySelector("#app").innerHTML += allCharactersCards;
};

document.querySelector("#btn").addEventListener("click", () => {
  nextPage(nextpageUrl);
});

const nextPage = (url) => {
  xhr.open("GET", `${url}`, true);
  xhr.send();
};
