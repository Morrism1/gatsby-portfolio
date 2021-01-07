import React from 'react'

const today = new Date()

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/MurangwaMorris/"
            className="icon fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Morrism1" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mauricemurangwa/"
            className="icon fa-linkedin"
          >
            <span className="label">Linked_in</span>
          </a>
        </li>
        <li>
          <a href="mailto:maurice@octan.group" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Maurice Murangwa - {today.getFullYear()}</li>
      </ul>
    </div>
  </div>
)

export default Footer
