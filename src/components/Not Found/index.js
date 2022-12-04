import { Link } from 'react-router-dom'
import './index.scss'

const NotFound = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="not-found">
          <h1>Sorry!! No page like that!!</h1>
          <h2>
            <Link className="go-back" to="/">
              Go Back to Home page
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default NotFound
