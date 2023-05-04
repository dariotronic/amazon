import React from 'react';
import styles from '../styles/menu.module.css';
import { IconContext } from "react-icons";
import {TbApps} from 'react-icons/tb';
import {AiOutlinePercentage} from 'react-icons/ai';
import {BiHelpCircle} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';

const Menu = (params) => {

  const links = [
    {
      name: 'Echo and Alexa',
      link: '#',
    },
    {
      name: 'Kindle',
      link: '#',
    },
    {
      name: 'Books',
      link: '#',
    },
    {
      name: 'Electronics',
      link: '#',
    },
    {
      name: 'Home and Garden',
      link: '#',
    },
    {
      name: 'Fashion',
      link: '#',
    },
    {
      name: 'Health and Beauty',
      link: '#',
    },
    {
      name: 'Automotive',
      link: '#',
    },
    {
      name: 'Sport and Tourism',
      link: '#',
    },
    {
      name: 'Games',
      link: '#',
    },
    {
      name: 'Film and Music',
      link: '#',
    },
    {
      name: 'Animals',
      link: '#',
    },
    {
      name: 'Hobby',
      link: '#',
    },
    {
      name: 'Gift Cards',
      link: '#',
    }
  ]

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.categoriesActive} >
          <TbApps color="#f90" />
          <a href="#"><h2>Categories</h2></a>
        </div>
        <div className={styles.links} >
        {links.map((item,index) => {
            return (
              <div key={index + 1} className={styles.linksContainer}>
                <a href={item.link}>{item.name}</a>
              </div>
            );
          })}
        </div>
        <div className={styles.categories}>
          <AiOutlinePercentage />
          <a href="#"><h2>Sell on Amazon</h2></a>
        </div>
        <div className={styles.categories}>
          <BiHelpCircle />
          <a href="#"><h2>Help</h2></a>
        </div>
      </div>
      <div>
        <div className={styles.categories}>
          <FiLogOut />
          <a href="#"><h2>Log Out</h2></a>
        </div>
      </div>
    </div>
  )
}

export default Menu