import React from 'react'
import Helmet from 'react-helmet'
import { v4 as uuidv4 } from 'uuid'
import { navigate } from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Project from '../components/ProjectCard/Card'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const HomeIndex = () => {
  const siteTitle = 'Maurice Murangwa'
  const siteDescription = 'This is a Portfolio of Maurice Murangwa'
  const skills = [
    'Front-end development: ReactJS, HTML5, CSS3, Javascript',
    'Back-end development: Ruby on Rails, NodeJs',
    'Databases:MySQL | PostgreSQL',
    'Deployment Platforms: Netlify | Heroku',
    'Styling: CSS3| SASS | MaterializeCSS | Bootstrap | TailwindCSS',
    'Remote and Collaborative work experience',
  ]

  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              I'm a Skilled Full-Stack Web Developer Who enjoys making Intuitive
              applications.
              <br />I am a Microverse graduate And Experienced In Remote Work.
            </h2>
          </header>
          <ul>
            {skills.map((skill) => (
              <li key={uuidv4()} className='py-1'>
                <FontAwesomeIcon icon={faAngleDoubleRight} /> {skill}
              </li>
            ))}
          </ul>
          <ul className="actions">
            <li>
              <a
                href="https://www.linkedin.com/in/mauricemurangwa/"
                className="button"
                target="_blank"
              >
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Projects</h2>

          <Project />
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            For more information or business opportunities, you can send me an
            email 😎.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <label>Your Name: <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      onChange={handleChange}
                      required
                    />
                    </label>
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <label>Your Email:   <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                    </label>
                  </div>
                  <div className="12u">
                    <label>Message: <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows='4'
                      onChange={handleChange}
                      required
                    ></textarea>
                    </label>
                  </div>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Kn 123 st.
                  <br />
                  Nyarugenge, Kigali
                  <br />
                  Rwanda
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">maurice@octan.group</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
