import React from 'react'
import '../styles/main.css'
// import ilustracion from '../img/undraw_real_time_sync_re_nky7.svg'
import ilustracion from '../img/undraw_trendy_interface_re_xsou.svg'

const Main = () => {
  return (
    <main className='main'>
      <section className='container-intro-main' id='main-about'>
        <div>
          <h2>Hello! I am Rodrigo Laime</h2>
          <h3>Web Developer</h3>
        </div>
      </section>
      <section className='container-about-main'>

        <article className='main-img'>
          <img src={ilustracion} className='img' alt="" />
        </article>

        <article className='main-text--about'>
          <h4>About me</h4>
          <h3><span>Who</span> am i?</h3>
          {/* <p>Soy un apasionado desarrollador web con experiencia en la creación de soluciones digitales innovadoras, especializado en el diseño centrado en el usuario. Mi enfoque se basa en la creatividad, los detalles y la creación de experiencias web atractivas y de alto rendimiento.</p> */}
          <p>
            I am a passionate web developer with experience creating innovative digital solutions, specializing in user-centered design. My approach is based on creativity, details and creating high-performing and engaging web experiences.
          </p>
          {/* <p>we use creativity to get our clients</p>
          <p>what I do</p>
          <ul>
            <li></li>
          </ul>
          <div></div> */}
        </article>


      </section>
      <section className='pepe'></section>
    </main>
  )
}

export default Main