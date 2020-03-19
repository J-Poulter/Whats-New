import React from 'react';
import './Menu.css'

 const Menu = (props) => {
  return (
    <div>
      <h1>What's <span>New?</span></h1>
      {props.categories.map(category => {
        return (
          <div key={category.iconImg}>
            <button className='menuButton' onClick={() => props.selectCategory(category.dataset)}> 
              {category.iconImg} 
              {category.title} 
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Menu;