//styles
import styles from '../styles/productssection.module.css';

//components
import React from 'react';
import IconBar from './IconBar';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineLaptop} from 'react-icons/ai';
import {TbSofa} from 'react-icons/tb';
import {SlScreenSmartphone} from 'react-icons/sl';
import {BsCamera} from 'react-icons/bs';
import {IoShirtOutline} from 'react-icons/io';
import {RiBikeLine} from 'react-icons/ri';
import {FaHeadphonesAlt} from 'react-icons/fa';
import {FaCubes} from 'react-icons/fa';
import {BiJoystick} from 'react-icons/bi';
import {GiLipstick} from 'react-icons/gi';
import {FiWatch} from 'react-icons/fi';

const ProductsSection = () => {

  const links = [
    {
      name: 'AiOutlineLaptop ',
      link: '#',
    },
    {
      name: 'TbSofa ',
      link: '#',
    },
    {
      name: 'SlScreenSmartphone ',
      link: '#',
    },
    {
      name: 'BsCamera ',
      link: '#',
    },
    {
      name: 'IoShirtOutline ',
      link: '#',
    },
    {
      name: 'RiBikeLine ',
      link: '#',
    },
    {
      name: 'FaHeadphonesAlt ',
      link: '#',
    },
    {
      name: 'FaCubes ',
      link: '#',
    },
    {
      name: 'BiJoystick ',
      link: '#',
    },
    {
      name: 'GiLipstick ',
      link: '#',
    },
    {
      name: 'FiWatch ',
      link: '#',
    }
  ]

  return (
    <div className={styles.mainContainer} >
      <div className={styles.title}>
        <h3>Popular Categories</h3>
        <AiFillStar color="#f90" />
      </div>
      <div className={styles.links} >
        {links.map((item,index) => {
            return (
              <div key={index + 1} className={styles.linksContainer}>
                <a href={item.link}>
                    <TbSofa />
                </a>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default ProductsSection