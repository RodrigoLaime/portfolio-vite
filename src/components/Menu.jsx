import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/menu.css'
import '../styles/menu.icon.css'

const routes = [];
routes.push({
  to: '/',
  text: 'Home'
})
routes.push({
  to: 'main-about',
  text: 'About'
})
routes.push({
  to: '/jobs',
  text: 'Jobs'
})
routes.push({
  to: '/contact',
  text: 'Contact'
})

const Menu = () => {

  const [navbarMenu, setNavbarMenu] = useState(false);

  const click = () => {
    const menu1 = document.getElementById('menu1')
    menu1.classList.toggle('openmenu1');

    const navM = document.getElementById('navM');
    navM.classList.toggle('desplazar-menu')

    const menuN = document.getElementById('menuN')
    menuN.classList.toggle('scrollY-mobil')
  }

  const changeBackfround = () => {
    // console.log(window.scrollY)
    if(window.scrollY >= 1){
      setNavbarMenu(true)
    } else {
      setNavbarMenu(false)
    }
  }

  window.addEventListener('scroll', changeBackfround);

  return (
    <div id='menuN' className={navbarMenu ? 'container-nav scroll-y scroll-lock' : 'container-nav'}>
      <nav className='menu-nav' id='menu-nav'>
        <h4 className='menu-h4'><a className='logo-one' href="/"><i className="fa-solid fa-bolt-lightning"></i></a> Rodri</h4>

        <div className='container-icon-menu'>
          <div onClick={click} className='menu1' id='menu1'>
            <div>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>

        <section className='menu-desktop'>
          <ul
            className='menu-ul'
          >
            {routes.map(route => (
              <div
                key={route.text}
                className='menu-li'
                id='menu-li'>
                <NavLink
                  className='menu-a'
                  key={routes.text}
                  style={({ isActive }) => ({
                    color: isActive ? '#6b6b70' : '',
                  })}
                  to={route.to}>
                  {route.text}
                </NavLink >
              </div >
            ))}
          </ul >
        </section>

      </nav >

      <section id="navM" className='container-menu--mobil' onClick={click}>
        <article className='container-mobil'>
          <ul>
            {routes.map(route => (
              <div

                key={route.text}
                className='menu-li-mobil'>
                <NavLink
                  className='a-mobil'
                  key={routes.text}
                  style={({ isActive }) => ({
                    color: isActive ? '#6b6b70' : '',
                  })}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              </div>
            ))}
            <div>fasdfas</div>
            <li className='follow'>
              <a href="#"><i className="fa-solid fa-envelope"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
            </li>
          </ul>
        </article>
      </section>

    </div >
  )
}


export default Menu