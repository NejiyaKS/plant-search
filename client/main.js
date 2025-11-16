const API_URL = "http://localhost:5000/api/plants";

document.getElementById("filterBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;

  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (type) params.append("type", type);
  if (price) params.append("price", price);

  const res = await fetch(`${API_URL}?${params.toString()}`);
  const data = await res.json();
  renderPlants(data);
});

function renderPlants(plants) {
  const container = document.getElementById("plantList");
  container.innerHTML = "";
  plants.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow";
    card.innerHTML = `
      <h2 class="text-xl font-semibold">${p.name}</h2>
      <p>Type: ${p.type}</p>
      <p>Price: ₹${p.price}</p>
    `;
    container.appendChild(card);
  });
}