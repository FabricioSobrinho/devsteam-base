import Button from '@/components/forms/button/Button'
import styles from './GameCard.module.css'
import Image from 'next/image'
function GameCard({onAdd}) {
  return (
    <div className={styles.gameCard}>
        <Image className={styles.img} src='/products/counter-strike.jpg'width={300} height={145}/>
        <div className={styles.info}>
           <h3 className={styles.title}>Counter Strike: Global Ofensive</h3> 
           <p className={styles.categories}>Ação, estratégia, multiplayer</p>
            <div className={styles.pricing}>
                <h2 className={styles.price}>99,99</h2>
                <Button onClick={onAdd}>Adicionar ao carrinho</Button>
            </div> {/*Game Price*/}
         </div> {/*Card title*/}
    </div>
  )
}

export default GameCard