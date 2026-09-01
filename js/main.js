(function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const searchDialog = document.getElementById("searchDialog");
  const searchInput = document.getElementById("searchInput");
  const searchOpeners = [
    document.getElementById("openSearch"),
    document.getElementById("openSearchBar"),
    document.getElementById("openSearchMobile"),
  ].filter(Boolean);
  const newsletterForm = document.getElementById("newsletterForm");
  const formMessage = document.getElementById("formMessage");

  function openSearch() {
    if (!searchDialog) return;

    if (searchDialog.open) {
      searchInput?.focus();
      return;
    }

    searchDialog.showModal();
    requestAnimationFrame(() => searchInput?.focus());
  }

  function closeMobileMenu() {
    mobileNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileNav?.classList.toggle("open") ?? false;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  searchOpeners.forEach((button) => {
    button.addEventListener("click", () => {
      closeMobileMenu();
      openSearch();
    });
  });

  document.addEventListener("keydown", (event) => {
    const isSearchShortcut =
      (event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k";

    if (isSearchShortcut) {
      event.preventDefault();
      openSearch();
    }
  });

  searchDialog?.addEventListener("close", () => {
    if (searchInput) {
      searchInput.value = "";
      document.dispatchEvent(new CustomEvent("imoblog:search-reset"));
    }
  });

  document.querySelectorAll(".read-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const title =
        link.dataset.article ||
        link.closest(".article-card")?.querySelector("h3")?.textContent?.trim();

      if (title) {
        window.alert(
          `Pré-visualização do artigo:\n\n${title}\n\nAqui podes ligar esta ação à página real do artigo.`,
        );
      }
    });
  });

  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email");
    if (!email || !formMessage) return;

    formMessage.textContent = `Obrigado! ${email.value} foi registado para receber novidades.`;
    formMessage.style.color = "#60a5fa";
    newsletterForm.reset();
  });
})();
