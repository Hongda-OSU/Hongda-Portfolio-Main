import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Courses from '../components/Resume/Courses';
import Skills from '../components/Resume/Skills';

import { skills, categories } from '../data/resume/skills';
import courses from '../data/resume/courses';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Hongda Lin"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Courses data={courses} />
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Stats;
