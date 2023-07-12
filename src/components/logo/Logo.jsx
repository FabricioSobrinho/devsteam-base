import Image from "next/image"
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
       <Image src='/logo.svg' width={60} height={60}/>  {/*O Caminho '/' busca absolutamente os elementos dentro da pasta public*/}
       <h1 className={styles.name}>DevSteam</h1>
    </div>
  )
}

export default Logo