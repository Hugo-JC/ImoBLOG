(function () {
  const articleRoot = document.querySelector("[data-article-page]");
  if (!articleRoot) return;

  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id");
  const articles = window.ImoBlogArticles ?? [];
  const article = articles.find((item) => item.id === articleId);

  if (article) {
    articleRoot.querySelector("[data-article-title]").textContent = article.title;
    articleRoot.querySelector("[data-article-category]").textContent =
      article.category;
    articleRoot.querySelector("[data-article-summary]").textContent =
      article.excerpt;
  }
})();
