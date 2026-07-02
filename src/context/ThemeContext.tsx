import { type ReactNode, createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const getSystemTheme = (): Theme => {
  if (
    typeof window === 'undefined' ||
    !('matchMedia' in window) ||
    typeof window.matchMedia !== 'function'
  ) {
    return 'light'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'

  const stored = Cookies.get('theme')
  if (stored === 'light' || stored === 'dark') return stored

  return getSystemTheme()
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    root.style.colorScheme = theme
    Cookies.set('theme', theme, { expires: 365 })
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
