import './index.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/dist/DrawSVGPlugin'

import Photo from '../../../assets/images/photo.jpg'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 10,
        duration: 5,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 10,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={Photo} alt="P" />

      <svg
        width="800"
        height="800"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" transform="translate(0 457) " fill="none">
          {/* for 'rectangle': */}
          <path
            ref={outlineLogoRef}
            d="M-92 -133 L-92 433 L349 433 L349 -133 Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
