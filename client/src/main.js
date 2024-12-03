import "./style.css";
import { createNewsCards, createSourceFilter } from "./helpers/domHelper";
import { api_sources, options_nba, url_nba } from "./api";
import { parserToClass } from "./helpers/promiseHelper";

// contenedor principal
const divConatiner = document.querySelector(".container");
// contenedor de las cards
const containerCards = document.createElement("div");
containerCards.classList.add("container-card");

// Función que obtiene las fuentes y las renderiza en el selector
const fetchAndSetSources = async (url) => {
  const response = await fetch(url);
  const sources = await response.json();
  const spanFilter = document.createElement("span");
  spanFilter.textContent = "Filter by source: ";
  const containerFilter = document.createElement("div");
  containerFilter.classList.add("container-filter");
  containerFilter.appendChild(spanFilter);
  const selectSourceTag = createSourceFilter(sources);
  // Cada vez que cambie el selector, se obtienen las noticias de la fuente seleccionada
  selectSourceTag.addEventListener("change", (event) => {
    let url =
      event.target.value === "all"
        ? url_nba
        : `${url_nba}?source=${event.target.value}`;
    getNewsBySource(url, options_nba);
  });
  containerFilter.appendChild(selectSourceTag);
  divConatiner.appendChild(containerFilter);
  document.body.appendChild(divConatiner);
};

const getNewsBySource = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const news = await response.json();
    const newsClasses = await parserToClass(news);
    containerCards.innerHTML = "";
    containerCards.append(...createNewsCards(newsClasses));
    divConatiner.appendChild(containerCards);
  } catch (error) {
    console.error(error);
  }
};

// Cargamos el selector
fetchAndSetSources(api_sources);
// Mostramos las noticias por defecto
getNewsBySource(url_nba, options_nba, "all");
