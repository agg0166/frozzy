"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string, rm?: boolean) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isLoginOpen: boolean
  setIsLoginOpen: (open: boolean) => void
  isSignupOpen: boolean
  setIsSignupOpen: (open: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("credentials")

    if (saved) {
      const { email, password } = JSON.parse(saved)
      login(email, password, true)
    }
  }, [])

  const login = async (email: string, _password: string, rm?: boolean) => {
    // Simulated login - in production, this would call an API

    if(!rm) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    setUser({
      id: "1",
      name: email.split("@")[0],
      email,
    })

    setIsLoginOpen(false)
  }

  const signup = async (name: string, email: string, _password: string) => {
    // Simulated signup - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000))
    setUser({
      id: "1",
      name,
      email,
    })
    setIsSignupOpen(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("credentials")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isLoginOpen,
        setIsLoginOpen,
        isSignupOpen,
        setIsSignupOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
