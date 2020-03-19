import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
  let newsArticles = props.category.map(article => (
    <NewsArticle
      key={article.id}
      img={article.img}
      headline={article.headline}
      description={article.description}
      url={article.url}
    />))
  return (
    <section> 
      {newsArticles}
    </section>
  )
}

export default NewsContainer;