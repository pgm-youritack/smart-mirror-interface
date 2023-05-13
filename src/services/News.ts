import { Getnews } from './APICalls'

async function getArticles() {
  const data = await Getnews()
  const articles = data.results
  return articles
}
async function GetArticle() {
  const data = await getArticles()
  const article = data[Math.floor(Math.random() * data.length)]
  console.log(article)
  return article
}
async function GetTitle() {
  const data = await GetArticle()
  const title = data.title
  return title
}
export { GetArticle }
