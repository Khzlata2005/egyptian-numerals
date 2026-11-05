const likes = new Map();
const container =
  document.getElementById(
    'postsContainer',
  );

container.addEventListener(
  'click',
  (event) => {
    const button =
      event.target.closest('button');
    if (!button) return;
    const article =
      button.closest('article');
    const id = Number(
      article.dataset.id,
    );
    if (
      button.classList.contains(
        'like-btn',
      )
    ) {
      const count =
        (likes.get(id) || 0) + 1;
      likes.set(id, count);
      button.querySelector(
        '.like-count',
      ).textContent = count;
      button.dataset.liked = '';
      return;
    }
    const text = article.querySelector(
      '.article-text',
    );
    const short =
      text.classList.toggle('short');
    button.textContent = short
      ? 'Читать далее'
      : 'Свернуть';
    button.setAttribute(
      'aria-expanded',
      String(!short),
    );
  },
);

export default likes;
