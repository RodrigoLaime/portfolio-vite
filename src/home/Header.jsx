import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
// import LogoImg from '../img/1686511359014.png'
// import LogoImg from '../img/1686511014336.png'
// import logoImg from '../img/source-code-animate.svg'
import logoProgrammer from '../img/programmer-animate.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='container-header'>
        <section className='header-text'>
          <div>
            <h1 className='text-focus-in'>Hi! i'm  Rodrigo<br /> <span>WEB DEVELOPER.  </span></h1>
            {/* <h1 className='text-focus-in'>Best design for your <br /> <span>DIGITAL PRODUCTS.</span></h1> */}
            <ul>
              <li>Desing technology | Art of design | UI and UX design</li>
            </ul>
            {/*  <div className='container-button-header'>
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
            </div> */}
          </div>
        </section>
        <section className='container-logo'>
          <div className='logo-header'>
            <img src={logoProgrammer} alt="" />
            {/* <a className='logo-a' href="#"><i className="fa-solid fa-bolt-lightning"></i></a>
            <a className='logo-a-two' href="#"><i className="fa-solid fa-bolt-lightning"></i></a> */}
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header