fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Assicurati che data.data sia definito e contenga i risultati della ricerca
    if (data && data.data && data.data.length > 0) {
      // Seleziona tutte le card nella sezione di Eminem
      const eminemSection = document.getElementById("eminemSection");
      const cards = eminemSection.querySelectorAll(".card");

      // Itera su tutte le card e assegna loro i dati corrispondenti
      cards.forEach((card) => {
        // Genera un numero casuale compreso tra 0 e la lunghezza dell'array dei risultati
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const result = data.data[randomIndex];
        const albumName = result.album.title;
        const albumCoverImg = result.album.cover;
        const songName = result.title;

        // Assegna i valori alle immagini e ai titoli delle card
        const cardImg = card.querySelector(".card-img-top");
        const cardTitle = card.querySelector(".card-title");
        const cardText = card.querySelector(".card-text");
        const cardBody = card.querySelector(".card-body");

        cardImg.src = albumCoverImg;
        cardTitle.innerText = albumName;
        cardText.innerText = songName;
        cardBody.classList.add("d-none");
        cardTitle.classList.remove("text-dark");
        cardText.classList.remove("text-dark");

        // Rimuovi il risultato selezionato dall'array per evitare duplicati
        data.data.splice(randomIndex, 1);
      });

      cards.forEach((card) => {
        card.addEventListener("mouseover", function () {
          // Seleziona il corpo della carta all'interno della carta corrente
          const cardBody = card.querySelector(".card-body");
          // Rimuovi la classe "d-none" dal corpo della carta
          cardBody.classList.remove("d-none");
          card.style.transform = "scale(1.115)";
          const cardImg = card.querySelector(".card-img-top");
          cardImg.style.borderBottomLeftRadius = "0px";
          cardImg.style.borderBottomRightRadius = "0px";
        });

        card.addEventListener("mouseout", function () {
          // Seleziona il corpo della carta all'interno della carta corrente
          const cardBody = card.querySelector(".card-body");
          // Rimuovi la classe "d-none" dal corpo della carta
          cardBody.classList.add("d-none");
          card.style.transform = "scale(1)";
          const cardImg = card.querySelector(".card-img-top");
          cardImg.style.borderBottomLeftRadius = "10px";
          cardImg.style.borderBottomRightRadius = "10px";
        });
      });
    } else {
      console.error("Nessun risultato trovato");
    }
  })
  .catch((error) => {
    console.error("Si è verificato un errore durante la richiesta:", error);
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Assicurati che data.data sia definito e contenga i risultati della ricerca
    if (data && data.data && data.data.length > 0) {
      // Seleziona tutte le card nella sezione di Eminem
      const metallicaSection = document.getElementById("metallicaSection");
      const cards = metallicaSection.querySelectorAll(".card");

      // Itera su tutte le card e assegna loro i dati corrispondenti
      cards.forEach((card) => {
        // Genera un numero casuale compreso tra 0 e la lunghezza dell'array dei risultati
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const result = data.data[randomIndex];
        const albumName = result.album.title;
        const albumCoverImg = result.album.cover;
        const songName = result.title;

        // Assegna i valori alle immagini e ai titoli delle card
        const cardImg = card.querySelector(".card-img-top");
        const cardTitle = card.querySelector(".card-title");
        const cardText = card.querySelector(".card-text");
        const cardBody = card.querySelector(".card-body");

        cardImg.src = albumCoverImg;
        cardTitle.innerText = albumName;
        cardText.innerText = songName;
        cardBody.classList.add("d-none");
        cardTitle.classList.remove("text-dark");
        cardText.classList.remove("text-dark");

        // Rimuovi il risultato selezionato dall'array per evitare duplicati
        data.data.splice(randomIndex, 1);
      });

      cards.forEach((card) => {
        card.addEventListener("mouseover", function () {
          // Seleziona il corpo della carta all'interno della carta corrente
          const cardBody = card.querySelector(".card-body");
          // Rimuovi la classe "d-none" dal corpo della carta
          cardBody.classList.remove("d-none");
          const cardImg = card.querySelector(".card-img-top");
          cardImg.style.borderBottomLeftRadius = "0px";
          cardImg.style.borderBottomRightRadius = "0px";
        });

        card.addEventListener("mouseout", function () {
          // Seleziona il corpo della carta all'interno della carta corrente
          const cardBody = card.querySelector(".card-body");
          // Rimuovi la classe "d-none" dal corpo della carta
          cardBody.classList.add("d-none");
          const cardImg = card.querySelector(".card-img-top");
          cardImg.style.borderBottomLeftRadius = "10px";
          cardImg.style.borderBottomRightRadius = "10px";
        });
      });
    } else {
      console.error("Nessun risultato trovato");
    }
  })
  .catch((error) => {
    console.error("Si è verificato un errore durante la richiesta:", error);
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Assicurati che data.data sia definito e contenga i risultati della ricerca
    if (data && data.data && data.data.length > 0) {
      // Seleziona tutte le card nella sezione dei Queen
      const queenSection = document.getElementById("queenSection");
      const cards = queenSection.querySelectorAll(".card");

      // Itera su tutte le card e assegna loro i dati corrispondenti
      cards.forEach((card) => {
        // Genera un numero casuale compreso tra 0 e la lunghezza dell'array dei risultati
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const result = data.data[randomIndex];
        const albumName = result.album.title;
        const albumCoverImg = result.album.cover;
        const songName = result.title;

        // Assegna i valori alle immagini e ai titoli delle card
        const cardImg = card.querySelector(".card-img-top");
        const cardTitle = card.querySelector(".card-title");
        const cardText = card.querySelector(".card-text");
        const cardBody = card.querySelector(".card-body");

        cardImg.src = albumCoverImg;
        cardTitle.innerText = albumName;
        cardText.innerText = songName;
        cardBody.classList.add("d-none");
        cardTitle.classList.remove("text-dark");
        cardText.classList.remove("text-dark");

        // Rimuovi il risultato selezionato dall'array per evitare duplicati
        data.data.splice(randomIndex, 1);
      });

      cards.forEach((card) => {
        card.addEventListener("mouseover", function () {
          // Seleziona il corpo della carta all'interno della carta corrente
          const cardBody = card.querySelector(".card-body");
          // Rimuovi la classe "d-none" dal corpo della carta
          cardBody.classList.remove("d-none");
          const cardImg = card.querySelector(".card-img-top");
          cardImg.style.borderBottomLeftRadius = "0px";
          cardImg.style.borderBottomRightRadius = "0px";
        });

        card.addEventListener("mouseout", function () {
          // Seleziona il corpo della carta all'interno della carta corrente
          const cardBody = card.querySelector(".card-body");
          // Rimuovi la classe "d-none" dal corpo della carta
          cardBody.classList.add("d-none");
          const cardImg = card.querySelector(".card-img-top");
          cardImg.style.borderBottomLeftRadius = "10px";
          cardImg.style.borderBottomRightRadius = "10px";
        });
      });
    } else {
      console.error("Nessun risultato trovato");
    }
  })
  .catch((error) => {
    console.error("Si è verificato un errore durante la richiesta:", error);
  });


  let button=document.getElementById("button-search");
  let input=document.getElementById("searchField");
  const queenSection = document.getElementById("queenSection");
  const eminemSection = document.getElementById("eminemSection");
  const metallicaSection = document.getElementById("metallicaSection");
  const eminemTitle=document.getElementById("eminem");
  const queenTitle=document.getElementById("queen");
  const MetallicaTitle=document.getElementById("metallica");


  function search() {
    if ((input.value==="Eminem") || (input.value==="eminem")) {
        eminemSection.classList.remove("d-none");
        eminemTitle.classList.remove("d-none");
        queenSection.classList.add("d-none");
        queenTitle.classList.add("d-none");
        metallicaSection.classList.add("d-none");
        MetallicaTitle.classList.add("d-none");

    } else if  ((input.value==="Metallica") || (input.value==="metallica")) {
        metallicaSection.classList.remove("d-none");
        MetallicaTitle.classList.remove("d-none");
        queenSection.classList.add("d-none");
        queenTitle.classList.add("d-none");
        eminemSection.classList.add("d-none");
        eminemTitle.classList.add("d-none");

    } else if  ((input.value==="Queen") || (input.value==="queen")) {
        queenSection.classList.remove("d-none");
        queenTitle.classList.remove("d-none");
        metallicaSection.classList.add("d-none");
        MetallicaTitle.classList.add("d-none");
        eminemSection.classList.add("d-none");
        eminemTitle.classList.add("d-none");

    } 
  } 