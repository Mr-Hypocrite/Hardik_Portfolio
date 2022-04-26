import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);

  const closeSidebar = () => {
    document.getElementById(`app__sidebar`).style.transform = `translateX(500px)`
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => document.getElementById(`app__sidebar`).style.transform = `translateX(0)`} />

          <motion.div
            id = "app__sidebar"
          >
            <HiX onClick={ closeSidebar } />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={ closeSidebar }>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
  
      </div>
    </nav>
  );
};

export default Navbar;
