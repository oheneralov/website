import Link from 'next/link'
import SimpleLayout from '../components/layout/simple'
import ArticlesJumbo from '../components/general/articles'

export default function Sensory(initialData) {
  return (
    <SimpleLayout preContainer={<ArticlesJumbo menu="Sensory Substitution" />}>
        <div className="row">
        <h1>Sensory Substitution</h1>
      </div>
      <div className="row">
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: initialData.data.content.Sensory }}>
        </div>
      </div>
    </SimpleLayout>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  const host = context.req.headers.host
  // Fetch data from external API
  const res = await fetch(`http://${host}/data.json`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
