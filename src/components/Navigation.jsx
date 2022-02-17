import React, {useState} from 'react';
import "./navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated, config } from 'react-spring';


export default function Navigation() {
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
    config: config.molasses,
  
  })


  return (
    <nav>
      <div className="top-left">
        Tales <span>from the</span> Margarita
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
                <li><a href="#!">ABOUT</a></li>
                <li><a href="#!">HUMOR</a></li>
                <li><a href="#!">BLOG</a></li>
                <li><a href="#!">CONTACT</a></li>
              </ul>
              <ul className="menu-socials">
                <li>facebook</li>
                <li>twitter</li>
                <li>pinterist</li>
              </ul>
          </animated.div>
        )
      }

    </nav>
  )
}
