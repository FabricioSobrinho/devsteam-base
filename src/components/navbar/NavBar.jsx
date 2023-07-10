import styles from './NavBar.module.css'
import Logo from '../logo/Logo'
import {BsCart4} from 'react-icons/bs'
import { useRef } from 'react'
function NavBar() {
    const input = useRef()
  return (
    <nav className={styles.navBar}>
        <Logo /> 
        <input type="text" placeholder="&#xF002;" ref={input} onClick={() => {
            input.current.style.borderBottom = 'solid 2px #1f1554'
        }}/>
        <BsCart4 size={40}/>
    </nav>
  )
}

export default NavBar