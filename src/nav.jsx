import { Link } from 'react-router-dom'
import { scps } from './data'
import './nav.css'

export default function Nav() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo-link">
          <img src="/images/logo.png" alt="SCP Logo" className="sidebar-logo" />
        </Link>
      </div>
      <div className="nav-cards-container">
        {scps.map(scp => (
          <Link 
            key={scp.number} 
            to={`/scp/${scp.number}`}
            className="nav-card"
          >
            <img src={scp.image} alt={`SCP-${scp.number}`} className="nav-card-image" />
            <div className="nav-card-content">
              <div className="nav-card-title">SCP-{scp.number}</div>
              <div className="nav-card-subtitle">{scp.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}
