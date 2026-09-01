(function () {
  const searchInput = document.getElementById("searchInput");
  const filters = [...document.querySelectorAll(".filter")];
  const cards = [...document.querySelectorAll(".article-card")];
  const emptyState = document.getElementById("emptyState");

  function updateCards() {
    const activeFilter =
      document.querySelector(".filter.active")?.dataset.filter ?? "Todos";

    const query = searchInput?.value.trim().toLocaleLowerCase("pt-PT") ?? "";
    let visible = 0;

    cards.forEach((card) => {
      const categoryMatch =
        activeFilter === "Todos" || card.dataset.category === activeFilter;

      const searchableText = card.textContent?.toLocaleLowerCase("pt-PT") ?? "";
      const textMatch = !query || searchableText.includes(query);
      const show = categoryMatch && textMatch;

      card.hidden = !show;
      if (show) visible += 1;
    });

    if (emptyState) {
      emptyState.style.display = visible > 0 ? "none" : "block";
    }
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((button) => button.classList.remove("active"));
      filter.classList.add("active");
      updateCards();
    });
  });

  searchInput?.addEventListener("input", updateCards);
  document.addEventListener("imoblog:search-reset", updateCards);

  updateCards();
})();
