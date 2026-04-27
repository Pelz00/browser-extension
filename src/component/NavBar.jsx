import extLogo from "/src/images/logo.svg"
import moon from '/src/images/icon-moon.svg'
import sun from '/src/images/icon-sun.svg'

export default function NavBar({darkMode,setDarkMode}) {

    return (
      <nav>
        <img src={extLogo} alt="" />
        <button onClick={() => setDarkMode(!darkMode)}>
          <img src={darkMode ? moon : sun} alt="" />
        </button>
      </nav>
    )
}
