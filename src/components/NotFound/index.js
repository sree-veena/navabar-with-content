// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBg = isDarkTheme ? 'not-found-drk-bg' : null

      const headingColor = isDarkTheme ? 'not-found-dark-heading' : null

      const paraColor = isDarkTheme ? 'not-found-dark-para' : null

      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notFoundBg}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={`not-found-heading ${headingColor}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-desc ${paraColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
