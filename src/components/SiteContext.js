import React, { useState } from 'react';
import useCookie from 'react-use-cookie';

// Create the context
const SiteContext = React.createContext();

export const THEMES = {
  dark: 'dark',
  light: 'light',
};

export function SiteProvider({ children }) {
  // Place state in here
  const [theme, setTheme] = useCookie('theme', THEMES.light);
  const [data, setData] = useState({});

  return (
    <SiteContext.Provider value={[theme, setTheme, data, setData]}>
      {children}
    </SiteContext.Provider>
  );
}

export default SiteContext;
