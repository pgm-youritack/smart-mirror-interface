import { Getnews } from './APICalls'

async function getArticles() {
  const data = await Getnews()
  const articles = data.results
  return articles
}
async function GetArticle(title) {
  const data = await getArticles()
  const article = data.filter((item) => {
    return item.title.includes(title)
  })
  return article
}

export { GetArticle, getArticles }
