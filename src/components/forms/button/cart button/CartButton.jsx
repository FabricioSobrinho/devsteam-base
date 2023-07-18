import styles from "./CartButton.module.css"
import { BsCart4 } from "react-icons/bs"
import CartMenu from "@/components/cart menu/CartMenu"

import { useState } from "react"

import { useRecoilValue } from "recoil"
import { cartState } from "@/atoms/cart"

function CartButton() {
  const [openMenu, setOpenMenu] = useState(false)
  const cartValue = useRecoilValue(cartState)
  return (
    <div
      className={styles.cartButton}
      onClick={() => {
        setOpenMenu(!openMenu)
      }}
    >
      <BsCart4 size={40} />
      {
        cartValue.length > 0 &&
        <div className={styles.quantity}>{cartValue.length}</div>
      }
      {openMenu && <CartMenu />}
    </div>
  )
}

export default CartButton
