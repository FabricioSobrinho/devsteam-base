import styles from './NavBar.module.css'
import Logo from '../logo/Logo'
import {BsCart4} from 'react-icons/bs'
import Input from '../forms/input/Input'

function NavBar() {
    
  return (
    <nav className={styles.navBar}>
    <Logo /> 
    <Input />
    <div className={styles.cartShow}>
     <BsCart4 size={40}/> 
    </div>
    
        
        
        
    </nav>
  )
}

export default NavBar