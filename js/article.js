(function () {
  const articleRoot = document.querySelector("[data-article-page]");
  if (!articleRoot) return;

  function createContentBlock(block) {
    const tagName = block.type === "heading" ? "h2" : "p";
    const element = document.createElement(tagName);
    element.textContent = block.text;
    return element;
  }

  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id");
  const articles = window.ImoBlogArticles ?? [];
  const article = articles.find((item) => item.id === articleId);

  const title = articleRoot.querySelector("[data-article-title]");
  const category = articleRoot.querySelector("[data-article-category]");
  const summary = articleRoot.querySelector("[data-article-summary]");
  const readingTime = articleRoot.querySelector("[data-article-reading-time]");
  const date = articleRoot.querySelector("[data-article-date]");
  const image = articleRoot.querySelector("[data-article-image]");
  const content = articleRoot.querySelector("[data-article-content]");
  const notFound = articleRoot.querySelector("[data-article-not-found]");

  if (!article) {
    notFound.hidden = false;
    content.hidden = true;
    return;
  }

  document.title = `${article.title} — ImoBLOG`;

  title.textContent = article.title;
  category.textContent = article.category;
  summary.textContent = article.excerpt;
  readingTime.textContent = article.readingTime;
  date.textContent = article.date ?? article.displayDate;

  if (article.image) {
    image.src = article.image;
    image.alt = article.title;
    image.hidden = false;
  }

  content.replaceChildren(...article.content.map(createContentBlock));
})();
