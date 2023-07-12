import Button from "@/components/forms/button/Button"
import styles from "./SaleCard.module.css"
import Image from "next/image"

function SaleCard() {
  return (
    <div className={styles.saleCard}>
      <Image src="/products/league-of-legends.jpg" width={250} height={260} />
      <div  className={styles.info}>
        <h3 className={styles.title}>Oferta</h3>
        <div className={styles.priceCard}>
         <div className={styles.percent}> -20%</div> {/*discount percent*/}
        <div className={styles.price}>
          <p className={styles.fullPrice}>R$ 99</p>
          <p className={styles.discountPrice}>R$89</p>
        </div>{/*prices*/}   
        </div> {/*Price Card*/}
        <Button fullWidth>Adicionar ao carrinho</Button>
      </div>{/*Card Info*/}
      
    </div>
  )
}

export default SaleCard
