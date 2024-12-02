export class News {
  #title;
  #source;
  #url;

  constructor(title, source) {
    this.#title = title;
    this.#source = source;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get source() {
    return this.#source;
  }

  set source(source) {
    this.#source = source;
  }
  get url() {
    return this.#url;
  }

  set url(url) {
    this.#url = url;
  }
}
