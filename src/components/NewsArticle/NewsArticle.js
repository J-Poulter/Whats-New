import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {

  return (
    <article>
      <div className='articleCard' id={props.id}>
        <img>{props.img}</img>
      </div>
      <div>
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <a href={props.url}>Link To Article</a>
        <icon></icon>
      </div>
    </article>
  )
}

export default NewsArticle;