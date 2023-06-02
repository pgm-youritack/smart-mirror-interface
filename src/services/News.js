import { Getnews } from './APICalls'

const getArticles = async () => {
  const data = await Getnews()
  const articles = data.results
  return articles
}
const GetArticle = async (title) => {
  const data = await getArticles()
  const article = data.filter((item) => {
    return item.title.includes(title)
  })
  console.log(article)
  return article
}

export { GetArticle, getArticles }
