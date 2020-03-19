import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {

  return (
    <section> 
      {
        props.local.map(article => (
          <NewsArticle 
            key={article.id}
            img={article.img}
            headline={article.headline}
            description={article.description}
            url={article.url}
          />
        ))
      }
    </section>
  )
}

export default NewsContainer;