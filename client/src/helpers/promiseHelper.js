import { News } from "../classes/News";

export const parserToClass = (newsLiteralObject) => {
  return new Promise((resolve, reject) => {
    if (newsLiteralObject !== null || newsLiteralObject !== undefined) {
      const newsClasses = newsLiteralObject.map((newLiteralObject) => {
        let newsClass = new News(
          newLiteralObject.title,
          newLiteralObject.source
        );
        newsClass.url = newLiteralObject.url;
        return newsClass;
      });
      resolve(newsClasses);
    } else {
      let error = new Error("objerct is null or undefined");
      error.name = "parserToClass";
      reject(error);
    }
  });
};
