import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Consequatur, doloribus omnis. Delectus et, pariatur dolore vitae, officiis ea voluptatum officia est necessitatibus
                    nam neque ullam blanditiis dolor nesciunt quaerat velit dolores. Voluptatem porro quibusdam iusto quia expedita
                    architecto asperiores esse magnam incidunt ducimus, assumenda inventore quam! Sapiente quo doloribus reprehenderit.
    
                </p>
                <Link to ={"/"}>Explore Menu <span>< HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
      
    </section>
  )
}

export default About
