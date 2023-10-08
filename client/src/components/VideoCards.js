import React, { useState, useEffect } from 'react';
import Iframe from './Iframe'

const Video = () => {
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    // Create an async function to fetch data from your backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/user/courses'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setVideos(data); // Update the state with fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function to fetch data when the component mounts
  }, []);

  return (
    <div id='courses'>
      <span className='headers bg-gray-100 my-2 text-center text-3xl text-black-900 uppercase font-bold pt-32'>
        Courses
      </span>
      <div className='video grid sm:grid-cols-1 lg:grid-cols-3 gap-5 place-content-center bg-gray-100'>
        {videos.map((video, index) => (
          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-3xl p-3 group font-semibold text-2xl text-center m-2 text-justify t">
            <Iframe
              key={index}
              videoUrl={video.ytUrl}
              title={video.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
