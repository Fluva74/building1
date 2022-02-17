import React, {useState} from 'react';
import "./topbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated, config } from 'react-spring';
// import Navigation from '../components/Navigation';

export default function Topbar() {

  const [showMenu,setShowMenu] = useState(false)
  
  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 200,
    config: config.slow,
  
  })
  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)'},
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    reverse: showMenu,
    delay: 200,
    config: config.slow,
  
  })







  return (
    <div className="gradient-background">
    <nav>
      

      <div className="top-left">
        Tales <span>from the</span> Margarita
      </div>
      <div className="top-center">
        <ul className="top-nav">
          <li><a className="top-link" href="#!">ABOUT</a></li>
          <li><a className="top-link" href="#!">HUMOR</a></li>
          <li><a className="top-link" href="#!">BLOG</a></li>
          <li><a className="top-link" href="#!">CONTACT</a></li>
        </ul>
      </div>
      <div className="top-right">


      </div>
      <span className="hamburger">
      <FontAwesomeIcon
        icon={faBars}
        onClick={()=>setShowMenu(!showMenu)}
       />
    </span>

    {
      maskTransitions(
        (styles, item) => item &&
          <animated.div
            style={styles}
            className="menuMask"
            onClick={()=> setShowMenu(false)}>

        </animated.div>
      )
    }
    {
      menuTransitions(
        (styles, item) => item &&
          <animated.div
            style={styles}
          className="menu">
            <ul className="menu-list">
              <li><a className="menu-link" href="#!">ABOUT</a></li>
              <li><a className="menu-link" href="#!">HUMOR</a></li>
              <li><a className="menu-link" href="#!">BLOG</a></li>
              <li><a className="menu-link" href="#!">CONTACT</a></li>
            </ul>
            <ul className="menu-socials">
            <a href="#!"><i className="fab fa-facebook-square foot-soc"></i></a>
          <a href="#!"><i className="fab fa-twitter-square foot-soc"></i></a>
          <a href="#!"><i className="fab fa-pinterest-square foot-soc"></i></a>
            </ul>
        </animated.div>
      )
    }
</nav>
      </div>
      
      
    
  )
}
