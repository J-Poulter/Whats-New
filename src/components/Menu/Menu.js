import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
 const Menu = (props) => {
    let titles = props.categories.map(cate => {
        return <p>{cate}</p>
    })
    return (
        <div>
            {titles}
            <p>{props.newThing}</p>
        </div>
    )
}

export default Menu;