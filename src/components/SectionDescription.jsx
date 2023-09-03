import React from 'react'
import '../styles/sectionDescription.css'

const SectionDescription = ({title, description}) => {
    return (
        <section className='aboutme'>
            <h2>{title}</h2>
            <p>{description}</p>
            {/* <section className='aboutme'>
                <h2>discovering who i am</h2>
                <p>Passionate and committed developer with a constant search for professional growth.</p>
            </section>
            <section className='aboutme'>
                <h2>Discovering my Tools</h2>
                <p>Explore and discover the fundamental tools that I use in my day to day as a developer.</p>
            </section> */}
        </section>
    )
}

export default SectionDescription