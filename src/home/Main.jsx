import React from 'react'
import '../styles/main.css'
// import ilustracion from '../img/undraw_programming_re_kg9v.svg'
// import ilustracion2 from '../img/undraw_progressive_app_m-9-ms (1).svg'
import SectionTols from '../components/SectionTools'
import logoCompu from '../img/source-code-animate.svg'
import logoProgramming from '../img/programming-animate.svg'
import Jobs from '../components/Jobs'
import SectionDescription from '../components/SectionDescription'
// import logoResponsive from '../img/responsive-animate.svg'

const Main = () => {
  return (
    <main className='main'>

      <section className='container-main--intro'>
        <div className='intro'>
          <a href=''><article>
            <div className='intro-icon'><i className="fa-brands fa-linkedin-in"></i></div>
            <h3>LinkedIn</h3>
            <p>My career path, achievements and skills at a glance. Connect with me to be aware of job news.</p>
          </article></a>
          <a href=''><article>
            <div className='intro-icon'><i className="fa-regular fa-user"></i></div>
            <h3>Contact me</h3>
            <p>Collaboration or consultation? Here you can contact me directly.</p>
          </article></a>
          <a href=''><article>
            <div className='intro-icon'><i className="fa-solid fa-code"></i></div>
            <h3>Web developer</h3>
            <p>Transforming ideas into attractive and functional web sites and applications.</p>
          </article></a>
          <a href=''><article>
            <div className='intro-icon'><i className="fa-brands fa-github"></i></div>
            <h3>Git Hub</h3>
            <p>Explore my projects and code contributions. Development in action.</p>
          </article></a>
        </div>
      </section>

      <SectionDescription
        title='discovering who i am'
        description='Passionate and committed developer with a constant search for professional growth.'
        id='aboutme'
      />

      <section className='container-about-main' data-aos="fade-left">

        <article className='main-img'>
          <img src={logoProgramming} className='img' alt="" />
          {/* <img src={ilustracion} className='img' alt="" /> */}
        </article>
        <article className='main-text--about'>
          <h4 className='h4'>About me</h4>
          <h3><span>Who</span> am i?</h3>
          <p>
            I am a passionate web developer with experience creating innovative digital solutions, specializing in user-centered design. My approach is based on creativity, details and creating high-performing and engaging web experiences.
          </p>
          {/* <p>we use creativity to get our clients</p> */}
          <div className='i'>
            <h4>programming | passionate | creative</h4>
          </div>
        </article>

      </section>

      <section className='container-about-main' data-aos="fade-right">

        <article className='main-text--about text-about-two'>
          <h4 className='h4'>About me</h4>
          <h3><span>what</span> I do</h3>
          <ul>
            <li>Desarrollo de aplicaciones web dinámicas y modernas con React JS</li>
            <li>Conocimineto de las bases y fundamentos del Lenguage JavaScript</li>
            <li>Optimizacion de la experiencia y performance del sitio y con Tailwind, HTML, CSS</li>
            <li>Desarrollo y Mantenimiento de Sitios Web</li>
            <li>Desarrollar APIs y API CRUD de manera eficiente</li>
            <li>Mantenimiento y adaptacion de bases de datos segun necesidades del cliente</li>
          </ul>
        </article>

        <article className='main-img main-img-two'>
          <img src={logoCompu} className='img' alt="" />
          {/* <img src={ilustracion2} className='img' alt="" /> */}
        </article>

      </section>

      <SectionDescription
        title='Discovering my Tools'
        description='Explore and discover the fundamental tools that I use in my day to day as a developer.'
      />

      <section>
        <SectionTols />
      </section>
      <SectionDescription
        title='Demonstrating My Programming Experience'
        description='I invite you to explore my solid experience in the world of programming through a selection of outstanding works.'
      />


      <section>
        <Jobs />
      </section>

    </main >
  )
}

export default Main
