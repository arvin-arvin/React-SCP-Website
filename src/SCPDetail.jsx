import { scps } from "./data";
import { useParams } from "react-router-dom";
import './SCPDetail.css'

export default function SCPDetail() {
  const { number } = useParams();

  const scp = scps.find(s => s.number === number)

  if (!scp) {
    return <div className="scp-detail"><h2>SCP not found</h2></div>
  }

  return (
    <div className="scp-detail">
      <div className="scp-header">
        <h2 className="scp-title">SCP-{scp.number}</h2>
        <h3 className="scp-name">{scp.title}</h3>
        <div className={`scp-class class-${scp.class.toLowerCase()}`}>
          <span>OBJECT CLASS:</span>
          <span className={`class-badge class-${scp.class.toLowerCase()}`}>{scp.class}</span>
        </div>
      </div>
      
      <div className="scp-content">
        <img src={scp.image} alt={`SCP-${scp.number}`} className="scp-image" />
        
        <img src={scp.level} alt={`level keycard`} className="scp-image" />

        <div className="scp-description">
          <h2>Description</h2>
          <p>{scp.description}</p>
        </div>

        <div className="scp-containment">
          <h2>Containment Procedures</h2>
          <p>{scp.containment}</p>
        </div>

        <img src={scp.image2} alt={`SCP-${scp.number}`} className="scp-image" />

        

        <div className="scp-addendum">
          <h3></h3>
          <p>{scp.addendum}</p>
        </div>

        <div className="scp-addendum highlighted">
          <h3></h3>
          <p>{scp.addendum2}</p>
        </div>

        <div className="scp-addendum">
          <h3></h3>
          <p>{scp.addendum3}</p>
        </div>

        

      </div>
    </div>
  )
}
