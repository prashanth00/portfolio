import {
  faGitAlt,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBirthdayCake,
  faC,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            <FontAwesomeIcon
              className="about-icons"
              icon={faBirthdayCake}
              color="#ffd700"
            />
            03.08.2000
          </p>
          <p>
            <FontAwesomeIcon
              className="about-icons"
              icon={faPhone}
              color="#ffd700"
            />
            +(91) 8072283670
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:cprashanth00@gmail.com"
          >
            <p>
              <FontAwesomeIcon
                className="about-icons"
                icon={faEnvelope}
                color="#ffd700"
              />
              cprashanth00@gmail.com
            </p>
          </a>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source
          </p>
          <p>
            Good and Evil) by Cicero, written in 45 BC. This book is a treatise
            on the theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, "Lorem ipsum
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#fcba03" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faC} color="#DD0031" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#de7112" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
          </div>
        </div>
        {/* todo */}
        <div className="description">
          <h2>hello</h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
