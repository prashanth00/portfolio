import './index.scss'

const SkillsBar = () => {
  return (
    <div className="progress-container">
      <div className="skill-box">
        <span className="skill-title">Java</span>
        <div className="skill-bar">
          <span className="skill-per java">
            <span className="tooltip">75%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Selenium</span>
        <div className="skill-bar">
          <span className="skill-per selenium">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Python</span>
        <div className="skill-bar">
          <span className="skill-per python">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">C</span>
        <div className="skill-bar">
          <span className="skill-per c">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Flask</span>
        <div className="skill-bar">
          <span className="skill-per flask">
            <span className="tooltip">65%</span>
          </span>
        </div>
        <div className="skill-box">
          <span className="skill-title">React</span>
          <div className="skill-bar">
            <span className="skill-per reactjs">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Javascript</span>
        <div className="skill-bar">
          <span className="skill-per js">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">Flutter</span>
        <div className="skill-bar">
          <span className="skill-per flutter">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">SQL</span>
        <div className="skill-bar">
          <span className="skill-per sql">
            <span className="tooltip">50%</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SkillsBar
