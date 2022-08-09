import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Drawer = ({isOpened}) => {

  const [openedPage,setOpenedPage] = useState('Home'); 
  const pages = [
    {name : 'Home', page : ''},
    {name : "Books", page: '/books'},
    {name : "Trades", page: '/trades'},
    {name : "Bonds", page: '/bonds'},
    {name : "Users", page: '/users'},
  ]

  let navigate = useNavigate();

  const handleClick = (items) => {
    setOpenedPage(items.name);
    navigate(items.page);

  }

  return (
    <aside className={`${isOpened ? "opened" : ""} drawer`}>
      <div className='menu'>
        {pages.map((items,index) => {
          return (
            <div className={`${openedPage === items.name ? "active" : "" } menuItem`} key={index} onClick={() => handleClick(items)}>
              {items.name}
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default Drawer