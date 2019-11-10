import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../../../Components/Title'
import { Profile } from './Profile'
import style from './style.scss'
import NiteshIMG from './Assets/nizam.jpeg'
import RahulIMG from './Assets/khusro.jpg'
import './Assets/pattern-team.png'

const Team = ({ getTranslation }) => (
  <div className="team">
    <div className="pattern">
      <Title
        section={getTranslation('team.section')}
        title={getTranslation('team.title')}
        description={getTranslation('team.description')}
        theme="light"
      />

      <div className="members">
        <Profile
          photo={RahulIMG}
          name="Rahul"
          surname="Soshte"
          linkedin="https://www.linkedin.com/in/rahul-s-138133ba/"
          github="https://github.com/rahul-soshte"
          charge="CO-FOUNDER"
          tech="Senior Full-stack"
        />

        <Profile
          photo={NiteshIMG}
          name="Nitesh"
          surname="Mishra"
          linkedin="https://www.linkedin.com/in/nitesh-mishra-27778318b/"
          charge="CO-FOUNDER"
          tech="Blockchain Evangelist"
        />
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
)

Team.propTypes = {
  getTranslation: PropTypes.func
}

export { Team }
