import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import ArticlesJumbo from '../components/general/articles'

export default function Home(initialData: any) {
  return (
    <SimpleLayout preContainer={<ArticlesJumbo menu="Home" />}>
        <div className="row">
        <h1>Overview</h1>
      </div>
      <div className="row">
        <p dangerouslySetInnerHTML={{ __html: initialData.data.content.Home }}>
        </p>
      </div>
    </SimpleLayout>
  )
}

// This gets called on every request
export async function getServerSideProps(context: any) {
  const host = context.req.headers.host
  // Fetch data from external API
  const res = await fetch(`http://${host}/data.json`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

