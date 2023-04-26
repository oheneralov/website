import Link from 'next/link'
import SimpleLayout from '../components/layout/simple'
import ArticlesJumbo from '../components/general/articles'
import Image from 'react-bootstrap/Image'

export default function Sensory(initialData) {
  return (
    <SimpleLayout preContainer={<ArticlesJumbo menu="Ultrasonic glasses for blind people" />}>
        <div className="row">
        <h1>Ultrasonic glasses</h1>
      </div>
      <div className="row">
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: initialData.data.content.Glasses }}>
        </div>
      </div>
      <div className="row" style={{paddingTop: '10px;'}}>
        <Image fluid='true' src='./glasses.jpeg'></Image>
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
