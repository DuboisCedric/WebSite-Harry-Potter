function createCard(perso) {
  const card = document.createElement("card");
  card.innerHTML = `
    <div class="grid-item">
      <div class="card-image">
        <img
          src="${perso.image}"
        />
      </div>
      <div class="card-text">
        <h3>${perso.name ? `${perso.name}` : "Néant"}</h3>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
        architecto.
        </p>
        <p>House : ${perso.house ? `${perso.house}` : "Néant"}</p>
        <p>Date of birth : ${
          perso.dateOfBirth ? `${perso.dateOfBirth}` : "Néant"
        }</p>
        <p>Ancestry : ${perso.ancestry ? `${perso.ancestry}` : "Néant"}</p>
        <p>Actor : ${perso.actor ? `${perso.actor}` : "Néant"}</p>
        <button>Buy</button>
      </div>
    </div>
    `;
  return card;
}

async function start() {
  const container = document.querySelector(".grille");
  const loader = document.createElement("h2");
  loader.innerHTML = "Loading...⏳";
  loader.style.fontSize = "30px";
  container.append(loader);

  try {
    const responce = await fetch("https://hp-api.onrender.com/api/characters", {
      headers: {
        Accept: "application/json",
      },
    });
    if (!responce.ok) {
      throw new Error("Erreur serveur");
    }

    const data = await responce.json();
    loader.remove();
    for (const d of data) {
      // console.log(d.name);
      container.append(createCard(d));
    }
  } catch (error) {
    loader.innerText = "Impossible de charger 🙁";
    loader.style.color = "red";
  }
}

start();
