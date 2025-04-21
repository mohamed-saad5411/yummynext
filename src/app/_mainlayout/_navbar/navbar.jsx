import Link from 'next/link'
import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'

export default function Navbar() {
  return <>
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand bg- d-flex align-items-center" href="/">
          <Image src={logo} width={60} height={60} className='' alt="" />
          <h1 className='m-0 text-warning'>Yammy</h1>
        </Link>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse d-flex justify-content-around  navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav bg- mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/" aria-current="page">Home
                <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ingredients">Ingredients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/area">Area</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contactUs">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  </>





}

{/* <nav>
    <ul classNameName='bg-dark w-100 text-white d-flex justify-content-between'>
        <li><Link href="/">home</Link></li>
        <li><Link href="/contact">contact</Link></li>
        <li><Link href="/about">about</Link></li>
    </ul>
</nav> */}