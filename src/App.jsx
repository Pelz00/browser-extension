import { useState } from "react"
import NavBar from "./component/NavBar"
import ExtensionButtons from "./component/ExtensionButtons"
import MainContent from "./component/MainContent"
import data from '/src/component/data.json'

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