import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './nav'
import SCPDetail from './SCPDetail'
import Landing from './landing'
import Login from './login'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <div className={isLandingPage ? "app-full-width" : "app-with-sidebar"}>
      {!isLandingPage && <Nav />}
      <div className={isLandingPage ? "main-content-full" : "main-content"}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/scp/:number' element={<SCPDetail />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />
  }

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
