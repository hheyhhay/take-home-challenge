//key: kByTgbwq8DyLWVG5IJOhgM2ZCCLT0qVt
export const fetchArticles = async () => {
  let response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kByTgbwq8DyLWVG5IJOhgM2ZCCLT0qVt")

  if (!response.ok) {
    throw new Error('Error - articles not find. Please try again later')
  }

  let articles = await response.json()

  return articles;
}
