import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | IG.News</title>
      </Head>
      <main className={styles.container}>

        <div className={styles.posts}>
          <a href="#">
            <time>09 de Setembro de 2021</time>
            <strong>Titulo Post</strong>
            <p>Bla blablbab .....</p>
          </a>
          <a href="#">
            <time>09 de Setembro de 2021</time>
            <strong>Titulo Post</strong>
            <p>Bla blablbab .....</p>
          </a>
          <a href="#">
            <time>09 de Setembro de 2021</time>
            <strong>Titulo Post</strong>
            <p>Bla blablbab .....</p>
          </a>
        </div>
      </main>
    </>
  )
}