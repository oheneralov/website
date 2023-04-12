import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/" className="nav-link">Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/sensory" className="nav-link">Sensory
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/write" className="nav-link">About
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Button className="nav-link">
              Signup
          </Button>
        </li>
      </ul>
    </div>
  </div>
</Nav>
  )
}
