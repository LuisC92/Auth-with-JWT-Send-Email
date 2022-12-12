import { createContext, useState } from "react"

const CurrentUserContext = createContext()

export const CurrentUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserContext
