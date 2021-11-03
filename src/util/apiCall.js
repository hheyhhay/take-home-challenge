
export const fetchArticles = () => {
  const key = "kByTgbwq8DyLWVG5IJOhgM2ZCCLT0qVt"

  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
      .then(res => res.json())
      .catch(err => console.log(err))

}


// talk about the challenges, and why things are built a certain way.
