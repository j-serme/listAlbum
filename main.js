const albums = [
  {
    image: "Micro_Argent",
    nom: "l'école du micro d'argent",
    artiste: "Iam",
    label: "EMI",
    annee: "1997",
    genre: "Rap",
    duree: "73",
  },
  {
    image: "lust_For_Life",
    nom: "Lust for Life",
    artiste: "Iggy Pop",
    label: "RCA Records",
    annee: "1977",
    genre: "Rock",
    duree: "41",
  },
  {
    image: "si_Dieu_Veut",
    nom: "Si Dieu Veut",
    artiste: "Fonky Family",
    label: "Les disques Mont Réal",
    annee: "1998",
    genre: "Rap",
    duree: "67",
  },
  {
    image: "A Night At The Opera",
    nom: "A Night At The Opera",
    artiste: "Queen",
    label: "EMI",
    annee: "1975",
    genre: "Rock",
    duree: "43",
  },
  {
    image: "Entre Gris Clair et Gris Foncé",
    nom: "Entre gris clair et gris foncé",
    artiste: "Jean Jacques Goldmann",
    label: "Epic",
    annee: "1987",
    genre: "Pop",
    duree: "83",
  },
  {
    image: "Discovery",
    nom: "Discovery",
    artiste: "Daft Punk",
    label: "Parlophone",
    annee: "2001",
    genre: "House",
    duree: "61",
  },
];

function display() {
  let cd = document.querySelector("ul");
  cd.innerHTML = "";
  for (let album of albums) {
    cd.insertAdjacentHTML(
      "beforeend",
      `<li>
            <article>
                <img src="img/${album.image}.jpg" alt="photo album">
                <div class="infos">
                    <p id="Nom">${album.nom}</p>
                    <p id="Artiste">${album.artiste}</p>
                    <p id="Label">${album.label}</p>
                    <p id="AnnéeParution">${album.annee}</p>
                    <p id="Genre">${album.genre}</p>
                    <p id="DuréeTotale">${album.duree}</p>
                </div>
            </article>
        </li>`
    );
  }
  document.querySelectorAll("li").innerHTML = cd;
}

document.addEventListener("DOMContentLoaded", function () {
  display();
});
