// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeSwitch = () => {
        toggleTheme()
      }

      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeBtn = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBg = isDarkTheme ? 'nav-bg-dark' : null

      const linkColor = isDarkTheme ? 'text-light' : null

      return (
        <nav className={`nav-bar ${navBg}`}>
          <img src={logoImg} alt="website logo" className="logo" />
          <ul className="menu-container">
            <Link to="/" className={`link-item ${linkColor}`}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={`link-item ${linkColor}`}>
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-switch"
            onClick={onClickThemeSwitch}
            data-testid="theme"
          >
            <img src={themeBtn} alt="theme" className="theme-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
