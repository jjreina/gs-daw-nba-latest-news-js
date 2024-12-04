// Creamos un elemento HTML con la estructura de una card de noticia
const createNewsCard = (article) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  card.appendChild(cardContent);
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = article.source;
  cardContent.appendChild(cardTitle);
  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.textContent = article.title;
  const cardURL = document.createElement("p");
  cardURL.classList.add("card-description");
  cardURL.textContent = article.url;
  cardContent.append(cardDescription, cardURL);
  return card;
};

// Devuelve un array de cards preparadas para ser renderizadas
export const createNewsCards = (news) => {
  const cards = news.map((article) => {
    return createNewsCard(article);
  });
  return cards;
};

// Devuelve un select con las opciones de filtrado
export const createSourceFilter = (sources) => {
  const select = document.createElement("select");
  select.classList.add("styled-select");
  sources.forEach((source) => {
    const option = document.createElement("option");
    option.text = source.name;
    if (source.name === "all") option.selected = true;
    select.appendChild(option);
  });
  return select;
};
