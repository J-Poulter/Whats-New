import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {

  return (
    <section> 
      {
        props.local.map(article => (
          <NewsArticle 
            id={article.id}
            img={article.img}
            headling={article.headline}
            description={article.description}
            url={article.url}
          />
        ))
      }
    </section>
  )
}

export default NewsContainer;