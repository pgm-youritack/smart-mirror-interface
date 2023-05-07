import { Getnews } from './APICalls'

async function getArticles() {
  const data = await Getnews()
  const articles = data.results
  return articles
}
async function GetArticle() {
  const data = await getArticles()
  const articles = data[Math.floor(Math.random() * data.length)]
  return articles
}
async function GetTitle() {
  const data = await GetArticle()
  const title = data.title
  return title
}
export { GetTitle }
