import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <div className="personal">
    <div className="link-to" id="personal" />
    <div className="title">
      <h3>Personal</h3>
    </div>
    <Table data={data} />
  </div>
);

export default PersonalStats;
