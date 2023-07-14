import styles from "./CartMenu.module.css"
import CartOption from "../cart option/CartOption"

function CartMenu({ cart, onRemove }) {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {cart.length === 0 && <p>Não há itens no seu carrinho.</p>}
        {cart ? (
          cart.map((cartInfo, pos) => (
            <CartOption
              image={cartInfo.image}
              title={cartInfo.name}
              price={cartInfo.price}
              onRemove={() => onRemove(pos)}
              key={`cart-info-${pos}`}
            />
          ))
        ) : (
          <>Sem itens</>
        )}
      </div>
      <div className={styles.priceLine}>
        <h2>Total</h2>
        <h2 className={styles.price}>
          R$ {cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}
        </h2>
      </div>
    </div>
  )
}

export default CartMenu
