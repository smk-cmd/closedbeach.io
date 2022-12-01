import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Closed Beach</title>
        <meta name="description" content="Closed Beach NFT marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Index
    </div>
  )
}
