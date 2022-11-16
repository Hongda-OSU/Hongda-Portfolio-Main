import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import ReactPlayer from 'react-player/lazy';

const videoControl = true;

const handleImage = (data) => (
  <>
    <a href={data.link} className="image">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
    </a>
    <div className="description">
      <p>{data.desc}</p>
    </div>
  </>
);

const handleVideo = (data) => (
  <>
    <a href={data.link} className="image" target="_blank" rel="noopener noreferrer">
      <ReactPlayer url={data.video} controls={videoControl} width="100%" height={window.innerWidth < 500 ? '100%' : '480px'} />
    </a>
    <div className="description">
      {data.title === 'Karma' ? <p>{data.desc} <a href="https://www.youtube.com/watch?v=JR4xMvp29VI&t=816s" target="_blank" rel="noopener noreferrer">(Demo Gameplay)</a>.</p> : <p>{data.desc}</p>}
    </div>
  </>
);

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>
        <time className="published">{dayjs(data.dateBegin).format('MMMM, YYYY')} - {data.dateEnd.length === 0 ? 'Present' : dayjs(data.dateEnd).format('MMMM, YYYY')}</time>
      </header>
      { data.image.length === 0 ? handleVideo(data) : handleImage(data)}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    video: PropTypes.string,
    image: PropTypes.string.isRequired,
    dateBegin: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
