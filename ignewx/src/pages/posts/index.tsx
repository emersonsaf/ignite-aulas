import { GetStaticProps } from 'next'
import Head from 'next/head'

import { RichText } from 'prismic-dom'

import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'

import styles from './styles.module.scss'


type Post = {
  slug: string,
  title: string,
  except: string,
  updatedAt: string,
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {

  console.log(posts)

  return (
    <>
      <Head>
        <title>Posts | IG.News</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {
            posts.map(post => (
              <a href="#">
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.except}</p>
              </a>
            ))
          }
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ],
    {
      fetch: ["title", "img", "content"],
      pageSize: 100,
    }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      except: post.data.content.find(content => content.type === "paragraph")?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  })

  return {
    props: {
      posts
    }
  }
}