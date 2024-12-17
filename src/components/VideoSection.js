import React from 'react';

const VideoSection = () => {
  return (
    <div className="video-section">
      <h2>Videos</h2>
      <iframe
        title="sample-video"
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/8u6NxqY_DcI"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
