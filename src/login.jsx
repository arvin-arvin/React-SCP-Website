import { useState, useEffect } from 'react'
import './login.css'

export default function Login({ onLoginSuccess }) {
  const [name, setName] = useState('User123')
  const [password, setPassword] = useState('passw0rd')
  const [showPopupThing1, setShowPopupThing1] = useState(false)
  const [showPopupThing2, setShowPopupThing2] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowPopupThing1(true)
    }, 1500)

    const closeTimer1 = setTimeout(() => {
      setShowPopupThing1(false)
    }, 10000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(closeTimer1)
    }
  }, [])

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowPopupThing2(true)
    }, 11500)

    const closeTimer2 = setTimeout(() => {
      setShowPopupThing2(false)
    }, 25000)

    return () => {
      clearTimeout(timer2)
      clearTimeout(closeTimer2)
    }
  }, [])

  const handleSubmit = () => {
    if (name === 'User123' && password === 'passw0rd') {
      onLoginSuccess()
    } else {
      alert('Incorrect, please refer to admin\'s instructions')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const closePopupThing = (popupThingNum) => {
    if (popupThingNum === 1) {
      setShowPopupThing1(false)
    } else {
      setShowPopupThing2(false)
    }
  }

  return (
    <div className="login-page">
      {showPopupThing1 && (
        <div className="popupThing-container">
          <div className="popupThing">
            <div className="popupThing-header">
              <small className="popupThing-title">Admin</small>
              <small className="popupThing-time">Just Now</small>
              <button 
                className="popupThing-close"
                onClick={() => closePopupThing(1)}
              >
                ✕
              </button>
            </div>
            <div className="popupThing-body">
              Welcome user, we've already provided the password: <b>passw0rd</b> just enter the site
            </div>
          </div>
        </div>
      )}

      {showPopupThing2 && (
        <div className="popupThing-container">
          <div className="popupThing">
            <div className="popupThing-header">
              <small className="popupThing-title">Admin</small>
              <small className="popupThing-time">Just Now</small>
              <button 
                className="popupThing-close"
                onClick={() => closePopupThing(2)}
              >
                ✕
              </button>
            </div>
            <div className="popupThing-body">
              What are you waiting for? Just enter! 
            </div>
          </div>
        </div>
      )}

      <div className="login-container">
        <h4>Please login to the</h4>
        <h1>SCP Research Page</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div className="form-group">
            <label>
              Name
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Password
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                required
              />
            </label>
          </div>

          <button 
            type="button" 
            className="submit-btn"
            onClick={handleSubmit}
          >
            &gt;
          </button>
        </form>
      </div>
    </div>
  )
}
