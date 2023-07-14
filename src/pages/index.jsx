import Head from "next/head"
import NavBar from "@/components/navbar/NavBar"
import Subtitle from "@/components/tipography/subtitle/Subtitle"
import Container from "@/components/container/Container"
import SaleCard from "@/components/cards/sale card/SaleCard"

import styles from "@/styles/Index.module.css"
import GameCard from "@/components/cards/game card/GameCard"

import { useState } from "react"

export default function Home() {
  const [cart, setCart] = useState([])

  const handleProduct = (info) => {
    setCart([...cart, info])
  }
  const removeProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }
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
        <NavBar cart={cart} onRemove={removeProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções exclusivas: </Subtitle>
          </div>
          <div className={styles.saleContainer}>
            <SaleCard
              image={"league-of-legends.jpg"}
              discount="90"
              fullPrice="399.00"
              onAdd={() =>
                handleProduct({
                  name: "league-of-legends",
                  price: 99.9,
                  image: "league-of-legends.jpg",
                })
              }
            />
            <SaleCard
              image={"dota-2.jpg"}
              discount="50"
              fullPrice="399.00"
              onAdd={() =>
                handleProduct({
                  name: "Dota 2",
                  price: 99.9,
                  image: "dota-2.jpg",
                })
              }
            />
            <SaleCard
              image={"valorant.jpg"}
              discount="80"
              fullPrice="399.00"
              onAdd={() =>
                handleProduct({
                  name: "Valorant",
                  price: 99.9,
                  image: "valorant.jpg",
                })
              }
            />
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos: </Subtitle>
            <div className={styles.gameContainer}>
              <GameCard
                onAdd={() =>
                  handleProduct({
                    name: "Counter Strike",
                    price: 99.9,
                    image: "counter-strike.jpg",
                  })
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
