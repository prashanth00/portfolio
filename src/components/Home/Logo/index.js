// import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/dist/DrawSVGPlugin'
import Loader from 'react-loaders'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  //   const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      {/* <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="P" /> */}

      <svg
        width="512"
        height="512"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" transform="translate(0 457) " fill="none">
          {/* for 'P': */}
          <path
            ref={outlineLogoRef}
            d="M 0 300 l 100 -300 l 200 0 c 58.86234 0 60 50 40 110 c -19.996015 59.973009 -39.996015 89.973009 -109.942068 89.997311 l -100.057931 0.002688 l -30 100 l -100 0 "
          />
          <path
            ref={outlineLogoRef}
            d="M 230 60 c 39.999997 0 40.465933 18.757507 30.465933 48.757507 c 0 0 -10 30 -50.318659 31.227083 l -60.147273 0.015409 l 30 -80 l 50 0 "
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
