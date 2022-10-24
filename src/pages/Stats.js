import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import Courses from '../components/Resume/Courses';
import Skills from '../components/Resume/Skills';

import { skills, categories } from '../data/resume/skills';
import courses from '../data/resume/courses';

const sections = [
  'Personal',
  'Courses',
  'Skills',
];

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Hongda Lin"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Personal />
      <Courses data={courses} />
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Stats;
