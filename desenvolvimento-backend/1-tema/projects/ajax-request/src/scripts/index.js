const xhr = new XMLHttpRequest();
const baseUrl = "https://rickandmortyapi.com/api";

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    manipulateJson(this);
  }
};

xhr.open("GET", `${baseUrl}/character`, true);
xhr.send();

const manipulateJson = (json) => {
  const jsonFile = JSON.parse(json.responseText);

  const rickSanchez = jsonFile.results[0]

  console.log(rickSanchez);

  const characterCard = `
    <article>
        <img src="${rickSanchez.image}" alt="${rickSanchez.name}"/>
        <h2>${rickSanchez.name}</h2>
        
    </article>
  `

  document.querySelector("#app").innerHTML = characterCard;
};
