import Head from 'next/head'
import { Header } from '../components/Header'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IG.News</title>
      </Head>
      <Header />
      <main className={styles.contentConteiner}>
        <section className={styles.hero}>
          <span>👏 hey, wellcome</span>
          <h1>News About the <span>React</span> world.</h1>
          <p>
            Get Access to all publications <br />
            <span>for $9.90 month </span>
            <SubscribeButton />
          </p>

        </section>
        <img src="/images/avatar.svg" alt="Girl codding" />
      </main>
    </>
  )
}
