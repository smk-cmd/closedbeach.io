import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Closed Beach</title>
        <meta name="description" content="NFT marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://opensea.io">ClosedBeach.io!</a>
        </h1>

        <p className={styles.description}>
          Get started by connecting your wallet!
        </p>

        <div className={styles.grid}>
          <a href="https://metamask.io" className={styles.card}>
            <h2>Connect Wallet &rarr;</h2>
            <p>
              Connect your MetaMask wallet to ClosedBeach.io to buy and sell NFTs!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h2>ClosedBeach.io</h2>
      </footer>
    </div>
  )
}
