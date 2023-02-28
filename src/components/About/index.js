import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? 'dark-bg' : null
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const headingColor = isDarkTheme ? 'text-white' : 'text-dark'

      return (
        <>
          <Navbar />
          <div className={`about-container ${bgColor}`}>
            <img src={homeImg} alt="about" className="about-img" />
            <h1 className={`about-heading ${headingColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
