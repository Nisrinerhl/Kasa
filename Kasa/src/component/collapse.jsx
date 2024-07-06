import React, { useState } from 'react';
import './../css/collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import de fontawesome
import { faAngleUp,} from '@fortawesome/free-solid-svg-icons';//import de l icone angleup de fontawesome

//creation de collapse en utilisant les props title et content

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="collapse-title">{title}</div>
        <div className={`collapse-icon ${isCollapsed ? 'closed' : 'open'}`}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>
      {!isCollapsed && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;