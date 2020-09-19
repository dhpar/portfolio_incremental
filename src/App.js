import React from 'react';
import styles from './App.module.css';
import appObj from './data.json';
import Topic from './components/Topic/Topic';
import Paragraphs from './components/Paragraph/Paragraph.js';

const App = () => {
  const {
    main: mainStyle, 
    intro: introStyle, 
    name: nameStyle, 
    job: jobStyle, 
    description: descriptionStyle, 
    content: contentStyle
  } = styles;

  const {
    name, 
    job, 
    personalDescription
  } = appObj;

  return (
    <div className={mainStyle}>
      <header className={introStyle}>
        <h1 className={nameStyle}>{name}</h1>
        <h2 className={jobStyle}>{job}</h2>
        <Paragraphs className={descriptionStyle} text={personalDescription}/>
      </header>
      <section className={contentStyle}>
          <Topic topic="experience" appObj={appObj}/>
          <Topic topic="project" appObj={appObj}/>
          <Topic topic="findme" appObj={appObj}/>
      </section>
    </div>
  );
}

export default App;
