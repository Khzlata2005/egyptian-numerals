import likes from './actions.js';

const container =
  document.getElementById(
    'postsContainer',
  );

export default function render(items) {
  container.innerHTML = '';
  if (items.length === 0) {
    container.innerHTML =
      '<p>Ничего не найдено</p>';
    return;
  }
  items.forEach((item) => {
    const { id, title, text } = item;
    const { date, isoDate, tags } =
      item;
    const count = likes.get(id) || 0;
    const html = `
      <article data-id="${id}">
        <header>
          <h3>${title}</h3>
          <p>Опубликовано:
            <time datetime="${isoDate}">
              ${date}
            </time>
          </p>
        </header>
        <p id="text-${id}"
          class="article-text short">
          ${text}
        </p>
        <button class="read-more-btn"
          aria-controls="text-${id}"
          aria-expanded="false">
          Читать далее
        </button>
        <footer>
          <p>Теги: ${tags}</p>
          <button class="like-btn"
          ${count ? 'data-liked' : ''}>
            Лайк ·
            <span class="like-count"
              aria-live="polite">
              ${count}
            </span>
          </button>
        </footer>
      </article>
    `;
    container.insertAdjacentHTML(
      'beforeend',
      html,
    );
  });
}
