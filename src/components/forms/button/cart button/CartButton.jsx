import styles from "./CartButton.module.css"
import { BsCart4 } from "react-icons/bs"
import CartMenu from "@/components/cart menu/CartMenu"

import { useState } from "react"


function CartButton({cart, onRemove}) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>
      <BsCart4
        size={40}
        className={styles.icon}
        onClick={() => {setOpenMenu(!openMenu)}}
      />
      {openMenu && <CartMenu cart={cart} onRemove={onRemove} />}
    </div>
  )
}

export default CartButton
