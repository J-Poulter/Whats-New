import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {

  return (
    <article className='articleCard' id={props.key}>
      <img src={props.img} className='articleImg'></img>
      <div className='cardInfo'>
        <h2 className='articleTitle'>{props.headline}</h2>
        <p className='articleDescription'>{props.description}</p>
      </div>
      <div className='cardLink'>
        <a href={props.url}>Link To Article →</a>
      </div>
    </article>
  )
}

export default NewsArticle;