import React from 'react';
import '../styles/project.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <p>{project.period} | {project.members}</p>
        </div>
        <p className="modal-description">{project.description}</p>

        {Array.isArray(project.features) && project.features.length > 0 && (
          <>
            <h3>📍 주요 기능 및 특징</h3>
            <ul>
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </>
        )}

        {Array.isArray(project.techs) && project.techs.length > 0 && (
          <>
            <h3>🧪 사용 기술 및 언어</h3>
            <ul>
              {project.techs.map((tech, i) => <li key={i}>{tech}</li>)}
            </ul>
          </>
        )}

      </div>
    </div>
  );
};


export default ProjectModal;
