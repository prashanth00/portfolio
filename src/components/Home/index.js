import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['r', 'a', 's', 'h', 'a', 'n', 't', 'h']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'a',
    'n',
    'd',
    ' ',
    'A',
    'p',
    'p',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            />
          </h1>
          <h2>RHCSA / CCNA / Flutter / React </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1N1UVU0tybKeN9RnsAMwlpLeLG9Kst_M-/view"
            className="flat-button"
          >
            DOWNLOAD MY RESUME
          </a>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
