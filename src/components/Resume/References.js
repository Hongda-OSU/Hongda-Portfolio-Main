import React from 'react';
import { Link } from 'react-router-dom';

const onButtonClick = (fileName) => {
  fetch(fileName).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = fileName;
      alink.click();
    });
  });
};

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>
        Download My
        <Link to="/resume" onClick={() => onButtonClick('Resume.pdf')}> Resume </Link> |
        <Link to="/resume" onClick={() => onButtonClick('Transcript.pdf')}> Transcript </Link>
      </h3>
    </div>
  </div>
);

export default References;
