// FORCE 5 SAMPLE LEADS (no condition)
let leads = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", source: "Website", status: "new" },
  { id: 2, name: "Ananya Reddy", email: "ananya@gmail.com", source: "Instagram", status: "contacted" },
  { id: 3, name: "Vikram Patel", email: "vikram@gmail.com", source: "Referral", status: "new" },
  { id: 4, name: "Sneha Kapoor", email: "sneha@gmail.com", source: "LinkedIn", status: "converted" },
  { id: 5, name: "Arjun Mehta", email: "arjun@gmail.com", source: "Website", status: "contacted" }
];

function addLead() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const source = document.getElementById("source").value;

  if (!name || !email || !source) {
    alert("Fill all fields");
    return;
  }

  leads.push({
    id: Date.now(),
    name,
    email,
    source,
    status: "new"
  });

  render();
}

function updateStatus(id, status) {
  leads = leads.map(l => l.id === id ? { ...l, status } : l);
  render();
}

function deleteLead(id) {
  leads = leads.filter(l => l.id !== id);
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  leads.forEach(l => {
    list.innerHTML += `
      <div class="card">
        <h3>${l.name}</h3>
        <p>${l.email}</p>
        <p>${l.source}</p>
        <p>Status: ${l.status}</p>

        <button onclick="updateStatus(${l.id}, 'contacted')">Contacted</button>
        <button onclick="updateStatus(${l.id}, 'converted')">Converted</button>
        <button onclick="deleteLead(${l.id})">Delete</button>
      </div>
    `;
  });
}

render();