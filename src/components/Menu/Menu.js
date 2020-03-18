import React from 'react';
import './Menu.css'

 const Menu = (props) => {
  /*let titles = props.categories.map(cate => {
      return <p>{cate}</p>
  })*/
  return (
    <div>
      <h1>What's New?</h1>
      <div>
        <icon></icon>
        <p>Local News</p>
      </div>
      <div>
        <icon></icon>
        <p>Technology</p>
      </div>
      <div>
        <icon></icon>
        <p>Entertainment</p>
      </div>
      <div>
        <icon></icon>
        <p>Science</p>
      </div>
      <div>
        <icon></icon>
        <p>Health</p>
      </div>
    </div>
  )
}

export default Menu;