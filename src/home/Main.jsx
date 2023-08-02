import React from 'react'
import '../styles/main.css'
import ilustracion from '../img/undraw_programming_re_kg9v.svg'
import ilustracion2 from '../img/undraw_progressive_app_m-9-ms (1).svg'
import SectionTols from '../components/SectionTools'

const Main = () => {
  return (
    <main className='main'>

      {/* <section className='container-main--intro'>
        <h1 className='knockout'>INNOVATIVE DESING</h1>
      </section> */}

      <section className='aboutme'>
        <div className='aboutme-line'></div>
        <h2>ABOUT ME</h2>
      </section>

      <section className='container-about-main' data-aos="fade-left">

        <article className='main-img'>
          <img src={ilustracion} className='img' alt="" />
        </article>
        <article className='main-text--about'>
          <h4 className='h4'>About me</h4>
          <h3><span>Who</span> am i?</h3>
          <p>
            I am a passionate web developer with experience creating innovative digital solutions, specializing in user-centered design. My approach is based on creativity, details and creating high-performing and engaging web experiences.
          </p>
          {/* <p>we use creativity to get our clients</p> */}
          <div className='i'>
            <h4>PROGRAMMING | PASSIONATE | CREATIVE</h4>
          </div>
        </article>

      </section>

      <section className='container-about-main' data-aos="fade-right">

        <article className='main-text--about text-about-two'>
          <h4 className='h4'>About me</h4>
          <h3><span>what</span> I do</h3>
          <ul>
            <li>Desarrollo de aplicaciones web con React JS</li>
            <li>Mojoramiendo de la experiencia y performance del sitio y landing pages con Tailwind, HTML, CSS, JavaScript</li>
            <li>Desarrollo y mejoramiento de sitios web</li>
            <li>Creacion de REST API´s con Node.js JavaScript</li>
            <li>Mantenimiento y adaptacion de bases de datoscon las necesidades del usuario</li>
          </ul>
        </article>

        <article className='main-img main-img-two'>
          <img src={ilustracion2} className='img' alt="" />
        </article>

      </section>

      <section className='aboutme'>
        <div className='aboutme-line'></div>
        <h2>TOOLS</h2>
      </section>

      <section>
        <SectionTols />
      </section>

    </main>
  )
}

export default Main
