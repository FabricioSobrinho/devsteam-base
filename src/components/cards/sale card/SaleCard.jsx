import Button from "@/components/forms/button/Button"
import styles from "./SaleCard.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"

function SaleCard({ image, discount, fullPrice, onAdd }) {
  const [newPrice, setNewPrice] = useState()
  useEffect(() => {
    setNewPrice((fullPrice - ((parseFloat(discount) / 100) * parseFloat(fullPrice))).toFixed(2))
  })
  
  return (
    <div className={styles.saleCard}>
      <Image
        src={`/products/${image}`}
        width={250}
        height={260}
        alt={`Produto ${image}`}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta</h3>
        <div className={styles.priceCard}>
          <div className={styles.percent}> -{discount}%</div>{" "}
          {/*discount percent*/}
          <div className={styles.price}>
            <p className={styles.fullPrice}>R$ {fullPrice}</p>
            <p className={styles.discountPrice}>R${newPrice}</p>
          </div>{" "}
          {/*prices*/}
        </div>{" "}
        {/*Price Card*/}
        <Button fullWidth onClick={onAdd}>Adicionar ao carrinho</Button>
      </div>
      {/*Card Info*/}
    </div>
  )
}

SaleCard.defaultProps = {
  image: "league-of-legends.jpg",
  discount: 0,
  fullPrice: 399,
}

export default SaleCard
