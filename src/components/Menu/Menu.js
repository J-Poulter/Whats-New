import React from 'react';
import './Menu.css'

 const Menu = (props) => {
  /*let titles = props.categories.map(cate => {
      return <p>{cate}</p>
  })*/
  return (
    <div>
      <h1>What's <span>New?</span></h1>
      <div>
        <icon></icon>
        <button className='menuButton'>★ Local News</button>
      </div>
      <div>
        <icon></icon>
        <button className='menuButton'>💡 Technology</button>
      </div>
      <div>
        <icon></icon>
        <button className='menuButton'>🎦 Entertainment</button>
      </div>
      <div>
        <icon></icon>
        <button className='menuButton'>🔬 Science</button>
      </div>
      <div>
        <icon></icon>
        <button className='menuButton'>🌡 Health</button>
      </div>
    </div>
  )
}

export default Menu;