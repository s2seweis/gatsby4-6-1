import React from "react"
import ArticleCard from "./ArticleCard"

const ArticlesGrid = ({ articles }) => {
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  )
}

export default ArticlesGrid