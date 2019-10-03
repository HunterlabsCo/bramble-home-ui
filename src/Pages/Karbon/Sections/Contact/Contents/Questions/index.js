import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const Questions = ({ getTranslation }) => (
  <div className="container">
    <p>{getTranslation('contact.anyQuestions')}</p>

    <div className="channels">
      <ul>
        <li>
          <em className="fa fa-envelope" />
          <span>hunterlabsc@gmail.com</span>
        </li>

        <li>
          <a
            href="https://t.me/joinchat/AAAAAEU2DCjQ0vW4_GTWxg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em className="fa fa-paper-plane" />
            <span>{getTranslation('contact.joinUs')}</span>
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{style}</style>
  </div>
)

Questions.propTypes = {
  getTranslation: PropTypes.func
}

export { Questions }
