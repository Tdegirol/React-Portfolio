import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Photos of projects',
    },
    {
      name: 'About me',
      description: 'About me/info'
    },
    {
      name: 'Contact',
      description: 'Contact Form'
    },
    {
      name: 'Resume',
      description: 'Image/link to resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className='page-container'>
      <div className='content-wrapper'>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
        <main>
          {currentCategory === categories[0] ? (
            <ProjectList></ProjectList>
          ) : currentCategory === categories[1] ? (
            <About></About>
          ) : currentCategory === categories[2] ? (
            <ContactForm></ContactForm>
          ) : (
            <Resume></Resume>
          )} 
        </main>
      </div>
      <Footer></Footer>
    </div>

  );
}

export default App;
