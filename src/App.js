import React from 'react';
import styles from './App.module.css';
import appObj from './data.json';
import Paragraphs from './components/Paragraph/Paragraph.js';
import Experience from './components/Experience/Experience';
import Projects from './components/Project/Project';
import Findme from './components/Findme/Findme';

export default () => {
  const {
    intro: introStyle, 
    name: nameStyle, 
    job: jobStyle, 
    description: descriptionStyle, 
    wrapper: wrapperStyle,
    fullBleed: fullBleedStyle
  } = styles;

  const {
    name, 
    job, 
    personalDescription,
    experiences: experienceInfo,
    projects: projectInfo,
    Contacts: contactsInfo
  } = appObj;
  
  return (
    <div className={wrapperStyle}>
      <header className={introStyle + ' ' + fullBleedStyle}>
        <h1 className={nameStyle}>{name}</h1>
        <h2 className={jobStyle}>{job}</h2>
        <Paragraphs className={descriptionStyle} text={personalDescription}/>
      </header>
      <Experience experience={experienceInfo} /> 
      <Projects project={projectInfo} />
      <Findme contacts={contactsInfo} />
    </div>
  );
}
