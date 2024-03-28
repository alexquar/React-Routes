import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import './Home.css'
export default function Home() { 
  const url = 'http://localhost:3000/articles'
const {data:articles,isPending,error} = useFetch(url)

     return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && (<div> Loading... </div>)}
      {error  && (<div> {error}</div>)}
      {articles && articles.map((article) =>(
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}> Read More...</Link>
           </div>
      ))}
    </div>
  )
}
