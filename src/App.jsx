import { useState } from "react"
import NavBar from "./component/NavBar"
import ExtensionButtons from "./component/ExtensionButtons"
import MainContent from "./component/MainContent"


import devlens from "/src/images/logo-devlens.svg"
import stylespy from "/src/images/logo-style-spy.svg"
import speedboost from "/src/images/logo-speed-boost.svg"
import wizard from "/src/images/logo-json-wizard.svg"
import masterpro from "/src/images/logo-tab-master-pro.svg"
import buddy from "/src/images/logo-viewport-buddy.svg"
import markup from "/src/images/logo-markup-notes.svg"
import guides from "/src/images/logo-grid-guides.svg"
import picker from "/src/images/logo-palette-picker.svg"
import checker from "/src/images/logo-link-checker.svg"
import snapshot from "/src/images/logo-dom-snapshot.svg"
import plus from "/src/images/logo-console-plus.svg"

const data = [
    {"logo": devlens, "name": "DevLens","description": "Quickly inspect page layouts and visualize element boundaries.", "isActive": true
    },
    {"logo": stylespy, "name": "StyleSpy","description": "Instantly analyze and copy CSS from any webpage element.", "isActive": true
    },
    {"logo": speedboost, "name": "SpeedBoost","description": "Optimizes browser resource usage to accelerate page loading.", "isActive": false
    },
    {"logo": wizard, "name": "JSONWizard","description": "Formats, validates, and prettifies JSON responses in-browser.", "isActive": true
    },
    {"logo": masterpro, "name": "TabMaster Pro","description": "Organizes browser tabs into groups and sessions.", "isActive": true
    },
    {"logo": buddy, "name": "ViewportBuddy","description": "Simulates various screen resolutions directly within the browser.", "isActive": false
    },
    {"logo": markup, "name": "Markup Notes","description": "Enables annotation and notes directly onto webpages for collaborative debugging.", "isActive": true
    },
    {"logo": guides, "name": "GridGuides", "description": "Overlay customizable grids and alignment guides on any webpage.", "isActive": false
    },
    {"logo": picker, "name": "Palette Picker","description": "Instantly extracts color palettes from any webpage.", "isActive": true
    },
    {"logo": checker, "name": "LinkChecker","description": "Scans and highlights broken links on any page.", "isActive": true
    },
    {"logo": snapshot, "name": "DOM Snapshot","description": "Capture and export DOM structures quickly.", "isActive": false
    },
    {"logo": plus, "name": "ConsolePlus","description": "Enhanced developer console with advanced filtering and logging.", "isActive": true
    }
  ]

export default function App() {
  
  const [extensions, setExtensions] =useState(data)
  const [filter, setFilter] = useState('all')
  const [darkMode, setDarkMode] = useState(false)

  function toggleActive(name) {
    setExtensions(prevExt =>
      prevExt.map(ext =>
        ext.name === name ? {...ext, isActive: !ext.isActive} : ext
      )
    )
  }

  function  removeExtensions(name) {
    setExtensions(prevExt => prevExt.filter(ext => ext.name !== name))
  }

  const filterButtons = extensions.filter(ext => {
    if (filter === 'active') return ext.isActive
    if (filter === 'inactive') return !ext.isActive
    return true
  }
  )

  return(
    <main className={darkMode ? 'on' : 'app'}>
       <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
       <ExtensionButtons filter={filter} setFilter={setFilter} />
       <div className="grid">
          {filterButtons.map(ext => (
        <MainContent
          key = {ext.name}
          ext = {ext}
          toggleActive = {toggleActive}
          removeExtensions = {removeExtensions}
        />
       ))}
       </div>
    </main>
  )
}
