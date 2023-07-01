import {
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
  faFlask,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Scrollbars } from 'react-custom-scrollbars-2'
import SkillsBar from '../SkillsBar'

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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1eLfCJxl9LOFW3HShVlJAF6rVMA-f86aP/view?usp=sharing"
          >
            <p>
              <FontAwesomeIcon
                className="about-icons"
                icon={faFile}
                color="#ffd700"
              />
              Resume
            </p>
          </a>

          <div className="scroll-selection">
            <Scrollbars style={{ width: '100%', height: '100%' }}>
              <h2>Education</h2>
              <p>
                HSC - 2016 to 2018 - MAHATMA MONTESSORI MATRICULATION HIGHER
                SECONDARY SCHOOL,BABA BUILDING,MADURAI <br /> <br />
                B.E (CSE) - 2018 to 2022 - SRI SAIRAM ENGINEERING COLLEGE,
                CHENNAI
              </p>
              <h2>Achievement</h2>
              <p>
                Our app named ‘FOCUS’ got selected among best 15 apps in
                M-Appfesto competition held in our college.
              </p>
              <h2>Internship</h2>
              <ul>
                <li>
                  Cyber security intern at AICL, Chennai – February 2021 to
                  March 2021{' '}
                </li>
                <li>
                  Cyber security intern at MIT SQUARE, London – June 2021 to
                  September 2021
                </li>
              </ul>
              <h2>Projects</h2>
              <ul>
                <li>
                  <span className="list-heading">
                    Enhanced hybrid encryption through slicing and merging of
                    data
                  </span>
                  - A simple Encryption app to store user data securely using
                  Enhanced Hybrid Encryption. I developed this mobile
                  application using flutter framework. <br />{' '}
                  <a
                    className="project-links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Prashanth00/Encryption-App"
                  >
                    View Project
                  </a>
                </li>
                <li>
                  <span className="list-heading">
                    Malware detection using hybrid classification technique
                  </span>
                  - A new approach using a hybrid classifier consisting of
                  various classification algorithms to find malware. <br />
                  <a
                    className="project-links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Prashanth00/Malware-Detection-Using-Hybrid-Classification-Technique"
                  >
                    View Project
                  </a>
                </li>
                <li>
                  <span className="list-heading">
                    Reveal: Online Fake Job Advert Detection Application using
                    Machine Learning
                  </span>
                  - I was part of an intern team in MIT Square that developed
                  Reveal, a machine learning-based web application, to identify
                  fake online job advertisements such that the applicants are
                  cautious in applying for jobs that are authentic and reliable.
                  <br />
                  <a
                    className="project-links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Prashanth00/Fake-Job-Detection"
                  >
                    View Project
                  </a>
                </li>
                <li>
                  <span className="list-heading">
                    Detailed developer report (Internshala contest)
                  </span>{' '}
                  - I have attended Ethical hacking contest in Internshala. I
                  have submitted detailed developer report explaining the
                  vulnerabilities of a website. <br />{' '}
                  <a
                    className="project-links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1VUQKeSb-b8V5uEtfQQV7buVbOwr603rX/view?usp=sharing"
                  >
                    View Project
                  </a>
                </li>
              </ul>
              <h2>Certifications</h2>
              <ul>
                <li>
                  <span className="list-heading">RHCSA</span>- Red Hat Certified
                  System Administrator <br />
                  Certification No -
                  <span className="list-heading">200-031-607</span>
                </li>
                <li>
                  <span className="list-heading">CCNA</span>- Cisco Certified
                  Network Associate
                </li>
              </ul>
              <h2>Skills</h2>
              <SkillsBar />
            </Scrollbars>
          </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#fcba03" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faC} color="#DD0031" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faFlask} color="#de7112" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>

        {/* <div className="description">
          <h2>Skill cube (My top 6 skills)</h2>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
