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
import {RiTShirtLine} from 'react-icons/ri';
import {RiBikeLine} from 'react-icons/ri';
import {FaHeadphonesAlt} from 'react-icons/fa';
import {FaCubes} from 'react-icons/fa';
import {BiJoystick} from 'react-icons/bi';
import {GiLipstick} from 'react-icons/gi';
import {FiWatch} from 'react-icons/fi';

const ProductsSection = () => {

  // const links = [
  //   {
  //     name: 'AiOutlineLaptop ',
  //     link: '#',
  //   },
  //   {
  //     name: 'TbSofa ',
  //     link: '#',
  //   },
  //   {
  //     name: 'SlScreenSmartphone ',
  //     link: '#',
  //   },
  //   {
  //     name: 'BsCamera ',
  //     link: '#',
  //   },
  //   {
  //     name: 'IoShirtOutline ',
  //     link: '#',
  //   },
  //   {
  //     name: 'RiBikeLine ',
  //     link: '#',
  //   },
  //   {
  //     name: 'FaHeadphonesAlt ',
  //     link: '#',
  //   },
  //   {
  //     name: 'FaCubes ',
  //     link: '#',
  //   },
  //   {
  //     name: 'BiJoystick ',
  //     link: '#',
  //   },
  //   {
  //     name: 'GiLipstick ',
  //     link: '#',
  //   },
  //   {
  //     name: 'FiWatch ',
  //     link: '#',
  //   }
  // ]

  return (
    <div className={styles.mainContainer} >
      <div className={styles.title}>
        <h3>Popular Categories</h3>
        <AiFillStar color="#f90" size="1.6em" />
      </div>
      <div className={styles.links} >
        {/* {links.map((item,index) => {
            return (
              <div key={index + 1} className={styles.linksContainer}>
                <a href={item.link}>
                    <TbSofa />
                </a>
              </div>
            );
          })} */}
          <div className={styles.linksContainer}>
                <a href="#">
                    <AiOutlineLaptop size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <TbSofa size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <SlScreenSmartphone size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <BsCamera size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <RiTShirtLine size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <RiBikeLine size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <FaHeadphonesAlt size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <FaCubes size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <BiJoystick size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <GiLipstick size="1.6em" />
                </a>
          </div>
          <div className={styles.linksContainer}>
                <a href="#">
                    <FiWatch size="1.6em" />
                </a>
          </div>
        </div>
    </div>
  )
}

export default ProductsSection