import React from 'react';

const VideoCard = ({ videoUrl, title }) => {
  return (
    <div className="video-card">
      <h2>{title}</h2>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
};

export default VideoCard;
