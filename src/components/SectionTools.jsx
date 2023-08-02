import React from 'react'
import '../styles/styleComponent/SectionTools.css'


const SectionTols = () => {
    const toolsData = [
        {
            icon: (<i class="fa-brands fa-node-js"></i>),
            title: 'Node.js',
            description: 'Node.js',
            style: { border: '2px solid #5fa04e' },
            styletwo: { color: '#5fa04e' } 
        },
        {
            icon: (<i class="fa-brands fa-react"></i>),
            title: 'React',
            description: 'React',
            style: { border: '2px solid #14cadd' },
            styletwo: { color: '#14cadd' } 
        },
        {
            icon: (<i class="fa-brands fa-html5"></i>),
            title: 'HTML5',
            description: 'HTML5',
            style: { border: '2px solid #e5532d' },
            styletwo: { color: '#e5532d' } 
        },
        {
            icon: (<i class="fa-brands fa-css3"></i>),
            title: 'CSS3',
            description: 'CSS3',
            style: { border: '2px solid #39acdd' },
            styletwo: { color: '#39acdd' } 
        },
        {
            icon: (<i class="fa-brands fa-github"></i>),
            title: 'Git Hub',
            description: 'Git Hub',
            style: { border: '2px solid white' },
            styletwo: { color: 'white' } 
        },
        {
            icon: (<i class="fa-brands fa-square-js"></i>),
            title: 'JavaScript',
            description: 'JavacScript',
            style: { border: '2px solid #dbbb34' },
            styletwo: { color: '#dbbb34' } 
        },
        // Agrega más objetos de datos según sea necesario
    ];
    return (
        <div className='tols-component'>
            <div className='tols-div'>
                {toolsData.map((tool) => (
                    <article className='container-tols' key={tool.title} style={tool.style}>
                    <div className='tols-icon'>
                        <a href="" style={tool.styletwo}>{tool.icon}</a>
                    </div>
                    <div className='tols-text'>
                        <h4>{tool.title}</h4>
                        {/* <p>{tool.description}</p> */}
                    </div>
                </article>
                ))}
            </div>
        </div>
    )
}

export default SectionTols