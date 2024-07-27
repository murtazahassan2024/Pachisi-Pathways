import dashboardImage from '../assets/images/dashboard-picture.png';


import React from 'react';
import dashboardImage from '../assets/images/dashboard-picture.png';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <img src={dashboardImage} alt="Dashboard" />
            {/* Add more UI components as needed */}
        </div>
    );
}

export default Dashboard;
