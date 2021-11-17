const albums = [
  {
    image: "img/Micro_Argent.jpg",
    nom: "l'école du micro d'argent",
    artiste: "Iam",
    label: "EMI",
    annee: "1997",
    genre: "Rap",
    duree: "73",
    id: 202101,
  },
  {
    image: "img/lust_For_Life.jpg",
    nom: "Lust for Life",
    artiste: "Iggy Pop",
    label: "RCA Records",
    annee: "1977",
    genre: "Rock",
    duree: "41",
    id: 202102,
  },
  {
    image: "img/si_Dieu_Veut.jpg",
    nom: "Si Dieu Veut",
    artiste: "Fonky Family",
    label: "Les disques Mont Réal",
    annee: "1998",
    genre: "Rap",
    duree: "67",
    id: 202103,
  },
  {
    image: "img/A Night At The Opera.jpg",
    nom: "A Night At The Opera",
    artiste: "Queen",
    label: "EMI",
    annee: "1975",
    genre: "Rock",
    duree: "43",
    id: 202104,
  },
  {
    image: "img/Entre Gris Clair et Gris Foncé.jpg",
    nom: "Entre gris clair et gris foncé",
    artiste: "Jean Jacques Goldmann",
    label: "Epic",
    annee: "1987",
    genre: "Pop",
    duree: "83",
    id: 202105,
  },
  {
    image: "img/Discovery.jpg",
    nom: "Discovery",
    artiste: "Daft Punk",
    label: "Parlophone",
    annee: "2001",
    genre: "House",
    duree: "61",
    id: 202106,
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
                <img src="${album.image}" alt="photo album">
                <div class="infos">
                    <p id="Nom">${album.nom}</p>
                    <p id="Artiste">${album.artiste}</p>
                    <p id="Label">${album.label}</p>
                    <p id="AnnéeParution">${album.annee}</p>
                    <p id="Genre">${album.genre}</p>
                    <p id="DuréeTotale">${album.duree}</p>
                    <button class="button-57" role="button" data-id='${album.id}'><span class="text">Supprimer</span><span>Fais pas ça</span></button>
                    </div>
            </article>
        </li>`
    );
  }
  document.querySelectorAll("li").innerHTML += cd;
}

function addAlbum(album) {
  albums.push(album);
  display();
}

document.addEventListener("DOMContentLoaded", function () {
  display();
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let album = {
      image: this.image.value,
      nom: this.nom.value,
      artiste: this.artiste.value,
      label: this.label.value,
      annee: this.annee.value,
      genre: this.genre.value,
      duree: this.duree.value,
    };
    addAlbum(album);
    document.querySelector("form").reset();
  });
  let boutons = document.querySelectorAll("button");
  for (const bouton of boutons) {
    //Ecoute de l'événement click
    bouton.addEventListener("click", function (e) {
      let index = albums.findIndex(function (album) {
        /* On retrouve l'id du film sur lequel on a cliqué à l'aide
            de l'attribut data-id fixé lors de l'insertion (ligne 18) */
        return album.id == bouton.dataset.id;
      });

      if (index != -1) {
        //1. Retrait du dom
        document.querySelector("blocFilm-" + albums[index].id).remove();

        //2. Retrait du tableau JS
        albums.splice(index, 1);
      }
    });
  }
});
