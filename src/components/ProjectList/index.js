import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Basepollz',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://basepollz.herokuapp.com/'
    },
    {
      name: 'Currency Exchange Calculator',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Photo Port',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Run Buddy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Led Zeppelin Fanpage',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  // const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  console.log(currentProject)
  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {projects.map((project, i) => (
          <img
            src={require(`../../assets/project-pics/${i}.jpg`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(project, i)}
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
