import { useContext } from "react"

import { AppContext } from "./AppContext"

export const useAppSettings = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('ThemeContext can be used only with ThemeProvider')
  }

  return context;
}