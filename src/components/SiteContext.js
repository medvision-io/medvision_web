import React, { useState } from "react"

// Create the context
const SiteContext = React.createContext()

export const THEMES = {
  dark: 'dark',
  light: 'light'
}

export function SiteProvider({ children }) {
  // Place state in here
  const [theme, setTheme] = useState(THEMES.dark)

  return (
    <SiteContext.Provider value={[theme, setTheme]}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext