const postsContainer =
  document.getElementById(
    'postsContainer',
  );

export default function renderArticles(
  articlesArray,
) {
  postsContainer.innerHTML = '';
  if (articlesArray.length === 0) {
    postsContainer.innerHTML =
      '<p class="no-results">' +
      'Ничего не найдено 😢</p>';
    return;
  }
  articlesArray.forEach((article) => {
    const articleHtml = `
      <article>
        <header>
          <h3>${article.title}</h3>
          <p>Опубликовано:
            <time
          datetime="${article.isoDate}"
            >${article.date}</time>
          </p>
        </header>
        <p>${article.text}</p>
        <footer>
          <p>Теги: ${article.tags}</p>
        </footer>
      </article>
    `;
    postsContainer.insertAdjacentHTML(
      'beforeend',
      articleHtml,
    );
  });
}
