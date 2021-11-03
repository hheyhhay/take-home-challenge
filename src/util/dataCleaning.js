export const dataCleaning = (data) => {

  let dataArray = data.results.map(article => {
    let simplifiedData = {};

    simplifiedData.id = Math.floor(new Date().valueOf() * Math.random());
    simplifiedData.author = article.byline;
    simplifiedData.images = article.multimedia;
    simplifiedData.publishedDate = article.published_date;
    simplifiedData.shortURL = article.short_url;
    simplifiedData.title = article.title;
    simplifiedData.abstract = article.abstract;
    return simplifiedData
  })

  return dataArray;
}
