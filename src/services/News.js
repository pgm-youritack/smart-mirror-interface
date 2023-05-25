import { Getnews } from './APICalls'

async function getArticles() {
  const data = await Getnews()
  const articles = data.results
  console.log(articles)
  return articles
}
async function GetArticle(title) {
  const data = await getArticles()
  console.log(title)
  console.log(data)
  const article = data.filter((item) => {
    return item.title.includes(title)
  })
  console.log(article)
  return article
}

export { GetArticle, getArticles }
