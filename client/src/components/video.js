import React from 'react';
import './video.css';
const Room = () => {
    useDocTitle('E-Learn')
    return (
        <div className='whereby'>
            <iframe src="https://e-learn.whereby.com/therapyd9c61391-351d-439d-9347-eddb59caf981" allow="camera; microphone; speaker; display-capture; " ></iframe>
            <Footer />
        </div>
    )
}

export default Room;