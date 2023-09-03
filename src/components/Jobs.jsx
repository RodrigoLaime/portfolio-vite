import React from 'react'
import '../styles/jobs.css'

const Jobs = () => {
    const jobsHome = [
        {
            link: 'https://java-script-y-frontend-developer-practico.vercel.app/',
            title: 'product',
            description: '',
            type: ''
        },
        {
            link: 'https://batata-web.vercel.app/',
            title: 'batataWeb',
            description: '',
            type: ''
        },
        {
            link: 'https://copy-faceboock-secion.vercel.app/',
            title: 'facebook',
            description: '',
            type: ''
        },
        {
            link: 'https://portafolio-movil.vercel.app/',
            title: 'firstPortfolio',
            description: '',
            type: ''
        },
        {
            link: 'https://steps-eight.vercel.app/',
            title: 'step',
            description: '',
            type: ''
        },
        {
            link: 'https://java-script-videogame.vercel.app/',
            title: 'game',
            description: '',
            type: ''
        },
    ]
    return (
        <article>
            <div className="jobs-container">
                {jobsHome.map(job => (
                    <div className="job-item" key={job.title}>
                        <picture><img src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/10/tamanos-de-las-imagenes-de-las-redes-sociales-1024x512.png" alt={job.title} /></picture>
                        <div></div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default Jobs