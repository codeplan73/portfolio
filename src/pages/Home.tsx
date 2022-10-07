import React from 'react'
import { Hero, About, Skill, Project, Contact, Services } from './../components'

const Home = () => {
    return (
        <> 
            <Hero />
            <section id="about">
                <About />
            </section>
            <section id="skill">
                <Skill />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    )
}

export default Home
