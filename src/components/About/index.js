import React from 'react';
import coverImage from '../../assets/cover/logo.png'
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <div className="my-2">
        <p>
          My name is TJ DeGirolamo and welcome to my portfolio page. My education includes a bachelor and master's degree in electrical engineering, and I have been working as a project manager in electrical contracting for almost 10 years.
          My interest in programming started with QBASIC and Visual Basic in high school, and through college I took a C++ and Python course. Finally after years of working full time I took the full-stack web development course through Columbia University. This course has opened my eyes to the multitude of opportunties in the software development industry.
          I look forward to growing this portfolio page with new projects and future endeavors. If you would like to reach out, please follow the navbar to the contact form, or click on one of the links below.
        </p>
        <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      </div>
    </section>
  );
}

export default About;
