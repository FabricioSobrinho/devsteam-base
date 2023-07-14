import styles from "./NavBar.module.css"
import Logo from "../logo/Logo"

import Input from "../forms/input/Input"
import CartButton from "../forms/button/cart button/CartButton"

function NavBar({ onRemove, cart }) {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <Input />
      <div className={styles.cartShow}>
        <CartButton cart={cart} onRemove={onRemove} />
      </div>
    </nav>
  )
}

export default NavBar
