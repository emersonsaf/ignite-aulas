import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month </span>
            <SubscribeButton priceId={product.priceId} />
          </p>

        </section>
        <img src="/images/avatar.svg" alt="Girl codding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1JWP7XBiKelzqgcTELQPZNTR', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}