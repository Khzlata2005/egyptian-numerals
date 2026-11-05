import articles from './articles.js';
import render from './render.js';

render(articles);

const searchInput =
  document.getElementById(
    'searchInput',
  );

searchInput.addEventListener(
  'input',
  function (event) {
    const searchText =
      event.target.value
        .toLowerCase()
        .trim();

    const filteredArticles =
      articles.filter((article) => {
        const inTitle = article.title
          .toLowerCase()
          .includes(searchText);
        const inText = article.text
          .toLowerCase()
          .includes(searchText);
        const inTags = article.tags
          .toLowerCase()
          .includes(searchText);
        return (
          inTitle || inText || inTags
        );
      });

    render(filteredArticles);
  },
);
