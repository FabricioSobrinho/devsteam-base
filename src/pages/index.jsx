import Head from "next/head"
import NavBar from "@/components/navbar/NavBar"
import Subtitle from "@/components/tipography/subtitle/Subtitle"
import Container from "@/components/container/Container"
import SaleCard from "@/components/cards/sale card/SaleCard"

import styles from '@/styles/Index.module.css'
import GameCard from "@/components/cards/game card/GameCard"

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções exclusivas: </Subtitle>
          </div>
          <div className={styles.saleContainer}>
            <SaleCard />
            <SaleCard />
            <SaleCard />
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos: </Subtitle>
            <div className={styles.gameContainer}>
            <GameCard/>
            <GameCard/>
            <GameCard/>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
