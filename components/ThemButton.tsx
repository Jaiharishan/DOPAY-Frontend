import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
const ThemButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <button
      className="rounded-full text-white dark:text-gray-900"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <img
          src="https://img.icons8.com/color/48/000000/sun--v2.png"
          className="h-8 w-8"
        />
      ) : (
        <img
          className="h-8 w-8"
          src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/48/000000/external-moon-space-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
        />
      )}
    </button>
  )
}

export default ThemButton
