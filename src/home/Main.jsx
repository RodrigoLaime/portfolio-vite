import React from 'react'
import '../styles/main.css'

const Main = () => {
  return (
    <main className='main'>
      <section className='container-intro-main' id='main-about'>
        <div>
          <h2>Hello! I am Rodrigo Lime</h2>
          <h3>Web Developer</h3>
        </div>
      </section>
      <section className='container-about-main'>
        <article className='main-img'>
          <div className='img'></div>
        </article>
        <article className='main-text--about'>
          <h4>Who am i?</h4>
          <h3>i'm Web developer</h3>
          <p>Soy un apasionado desarrollador web con experiencia en la creación de soluciones digitales innovadoras, especializado en el diseño centrado en el usuario. Mi enfoque se basa en la creatividad, los detalles y la creación de experiencias web atractivas y de alto rendimiento.</p>
          <ul>
            <li></li>
          </ul>
          <div></div>
        </article>
      </section>
      <section></section>
    </main>
  )
}

export default Main