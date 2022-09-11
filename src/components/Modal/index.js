import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { name, description, link, index } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/project-pics/${index}.jpg`)}
          alt="current project"
        />
        <p>
          {description}
          <br />
          Click the link below to view this app:        
          <br />
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            aria-label='project'
          >
            {name}
          </a>
        </p>
        <br />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
