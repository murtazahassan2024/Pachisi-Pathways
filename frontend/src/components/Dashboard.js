import React from 'react';
import dashboardImage from '../assets/images/dashbord-picture.png'; // Make sure the path and file name are correct
import '../assets/css/common.css';

function Dashboard() {
    return (
        <div>

        <a href="#" class="play-online-btn">
            <span class="icon">&#x1F310;</span> 
                Play Online
        </a>
        <h1 className='dashboardHeading'>Pachisi Pathways</h1>
            <img src={dashboardImage} alt="Dashboard" className="dashboardImage"/>
        </div>
        
    );
}

export default Dashboard;
