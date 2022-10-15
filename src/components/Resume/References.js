import React from 'react';

const onButtonClick = () => {
  fetch('Resume.pdf').then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'Resume.pdf';
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
        <a href="https://drive.google.com/drive/u/0/folders/1VCmLyxUU3pHi257SZciMLcln0XffP5qR"> Resume | Transcript </a>
      </h3>
      <h3>
        <button type="button" onClick={onButtonClick}>Download PDF</button>
      </h3>
    </div>
  </div>
);

export default References;
