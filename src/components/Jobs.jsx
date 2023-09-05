import React from 'react'
import '../styles/jobs.css'

const Jobs = () => {
    const jobsHome = [
        {
            link: 'https://java-script-y-frontend-developer-practico.vercel.app/',
            title: 'product',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quaerat?',
            type: 'Clone google',
            src: 'https://cdn.dribbble.com/users/2765524/screenshots/19879052/media/7e7cc35838023dffc436055832e08b53.png?resize=450x338&vertical=center'
        },
        {
            link: 'https://batata-web.vercel.app/',
            title: 'batataWeb',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quaerat?',
            type: 'Game',
            src: 'https://kinsta.com/es/wp-content/uploads/sites/8/2018/10/tamanos-de-las-imagenes-de-las-redes-sociales-1024x512.png'
        },
        {
            link: 'https://copy-faceboock-secion.vercel.app/',
            title: 'facebook',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quaerat?',
            type: 'Store',
            src: 'https://cdn.dribbble.com/userupload/6029516/file/original-2d039a03d7402878aa79af38ccaa91a5.jpg?resize=450x338&vertical=center'
        },
        {
            link: 'https://portafolio-movil.vercel.app/',
            title: 'firstPortfolio',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quaerat?',
            type: 'Ecomerce',
            src: 'https://cdn.dribbble.com/userupload/9490263/file/original-2710590ef04bada171e8920226bbc71c.png?resize=450x338&vertical=center'
        },
        {
            link: 'https://steps-eight.vercel.app/',
            title: 'step',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quaerat?',
            type: 'Web Movil',
            src: 'https://cdn.dribbble.com/userupload/5797415/file/original-a3c0a76c9ccdb400fef3f426efd74c6e.png?resize=450x338&vertical=center'
        },
        {
            link: 'https://java-script-videogame.vercel.app/',
            title: 'game',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quaerat?',
            type: 'Web Desktop',
            src: 'https://cdn.dribbble.com/userupload/4784892/file/original-2542b97a4e187a87b4457c785ee8c307.jpg?resize=450x338&vertical=center'
        },
    ]
    return (
        <article>
            <div className="jobs-container">
                {jobsHome.map(job => (
                    <div className="job-item" key={job.title}>
                        <picture className='job-img' ><img src={job.src} alt={job.title} /></picture>
                        <h2>{job.title}</h2>
                        <p>job{job.description}</p>
                        <div className='job-button'>
                            <h3>{job.type}</h3>
                            <a href={job.link}>view</a>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default Jobs