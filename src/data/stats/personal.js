// import React, { useState, useEffect } from 'react';

// const Age = () => {
//   const [age, setAge] = useState();

//   const tick = () => {
//     const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
//     const birthTime = new Date('2000-09-17T13:35:00');
//     setAge(((Date.now() - birthTime) / divisor).toFixed(11));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 25);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return <>{age}</>;
// };

const data = [
  // {
  //   key: 'age',
  //   label: 'Current age',
  //   value: <Age />,
  // },
  {
    key: 'major',
    label: 'Major GPA (CS)',
    value: '3.946',
  },
  {
    key: 'cumulative',
    label: 'Cumulative GPA',
    value: '3.806',
  },
  {
    key: 'leetcode',
    label: 'Leetcode finished',
    value: 107,
    link:
      'https://github.com/Hongda-OSU/Leetcode-Master',
  },
];

export default data;
