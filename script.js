const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const openSearch = document.getElementById("openSearch");
const searchDialog = document.getElementById("searchDialog");
const searchInput = document.getElementById("searchInput");
const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".article-card")];
const emptyState = document.getElementById("emptyState");

menuToggle?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mobileNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

openSearch?.addEventListener("click", () => {
  searchDialog.showModal();
  setTimeout(() => searchInput.focus(), 80);
});

document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (!searchDialog.open) searchDialog.showModal();
    setTimeout(() => searchInput.focus(), 80);
  }
  if (e.key === "Escape" && searchDialog.open) searchDialog.close();
});

function updateCards() {
  const active = document.querySelector(".filter.active")?.dataset.filter || "Todos";
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const categoryMatch = active === "Todos" || card.dataset.category === active;
    const textMatch = !query || card.textContent.toLowerCase().includes(query);
    const show = categoryMatch && textMatch;
    card.hidden = !show;
    if (show) visible++;
  });

  emptyState.style.display = visible ? "none" : "block";
}

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");
    updateCards();
  });
});

searchInput?.addEventListener("input", updateCards);

document.querySelectorAll(".read-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const title = link.dataset.article || link.closest(".article-card")?.querySelector("h3")?.textContent;
    if (title) alert(`Pré-visualização do artigo:\\n\\n${title}\\n\\nAqui podes ligar esta ação à página real do artigo.`);
  });
});

document.getElementById("newsletterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email");
  const message = document.getElementById("formMessage");
  message.textContent = `Obrigado! ${email.value} foi registado para receber novidades.`;
  message.style.color = "#60a5fa";
  e.target.reset();
});
