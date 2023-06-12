import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
// import LogoImg from '../img/1686511359014.png'
// import LogoImg from '../img/1686511014336.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='container-header'>
        <section className='header-text'>
          <div>
            <h1 className='text-focus-in'>Best design for your <br /> <span>DIGITAL PRODUCTS.</span></h1>
            <ul>
              {/* <li>Hello I am Laime Rodrigo front-end developer</li> */}
              <li>Desing technology | Art of design | UI and UX design</li>
            </ul>
            <div className='container-button-header'>
              <Link className='header-button' to={'/'}>
                <div className='a-header'>
                  Contact
                </div>
              </Link>
              <Link className='header-button' to={'/'}>
                <div className='a-header'>
                  My jobs
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className='container-logo'>
          <div className='logo-header'>
            <a className='logo-a' href="#"><i className="fa-solid fa-bolt-lightning"></i></a>
            <a className='logo-a-two' href="#"><i className="fa-solid fa-bolt-lightning"></i></a>
          </div>
        </section>
      </div>
      {/* <div className='horizont-header'>
        <div className="custom-shape-divider-bottom-1686412443">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </div> */}
    </header>
  )
}

export default Header