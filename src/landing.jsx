import { Link } from 'react-router-dom'
import { scps } from './data'
import './landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-header">
        <img src="/images/logo.png" alt="SCP Foundation Logo" className="landing-logo" />
        <h1>SCP Foundation</h1>
        <p className="landing-description">Secure. Contain. Protect.</p>
      </div>

      <div className="scp-grid">
        {scps.map(scp => (
          <Link 
            key={scp.number}
            to={`/scp/${scp.number}`}
            className="scp-card"
          >
            <div className="card-image-container">
              <img src={scp.image} alt={`SCP-${scp.number}`} className="card-image" />
              <div className="card-number">SCP-{scp.number}</div>
            </div>
            <div className="card-content">
              <h3 className={`card-title class-${scp.class.toLowerCase()}`}>
                {scp.title}
              </h3>
              <div className={`card-class class-${scp.class.toLowerCase()}`}>
                {scp.class}
              </div>
              <p className="card-description">{scp.description.substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}