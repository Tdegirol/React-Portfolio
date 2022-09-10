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
          Click the link below to view this app:
        </p>
        {/* <a
          class='project link'
          href='https://basepollz.herokuapp.com/'
          target='_blank'
          rel='noopener'
          aria-label='project'
        >
          <i class='jpowij' />
        </a> */}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
