import Navbar from '../navbar/navbar'
import React from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <Navbar />
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album py-5 bg-light">
          <div className="container" style={{width:"92%"}}>
            {props.children}
          </div>
        </div>
      </main>
    </>
  )
}
