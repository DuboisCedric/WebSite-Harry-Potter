let id = 1;
function createCard(sort) {
  const card = document.createElement("card");
  card.innerHTML = `
  <h2>Sortilège numero : ${id++} </h2>
  <table class="tableau-style">
    <thead>
      <!-- tr = table row -->
      <tr>
        <th>Nom Du Sortilège</th>
        <th>Description Du Sortilège</th>
      </tr>
    </thead>
    
    <tbody>
    <tr>
      <td>${sort.name}</td>
      <td>${sort.description}</td>
    </tr>
  </tbody>
</table>
      `;
  return card;
}

async function start() {
  const container = document.querySelector(".container");
  const loader = document.querySelector("p");
  loader.innerHTML = "Loading...⏳";
  loader.style.fontSize = "30px";
  loader.style.color = "#ec8a09";
  loader.style.padding = "100px 0";
  container.append(loader);

  try {
    const responce = await fetch("https://hp-api.onrender.com/api/spells", {
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
      console.log(d.name);
      container.append(createCard(d));
    }
  } catch (error) {
    loader.innerText = "Unable to load 🙁";
    loader.style.color = "red";
  }
}

start();
