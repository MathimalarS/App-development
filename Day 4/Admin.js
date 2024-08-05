import React from 'react';
import '../assets/css/Admin.css';
import Sidebar from './Sidebar';
import Summary from './Summary';
import Chart from 'react-apexcharts';

const Admin = () => {
    const options = {
        chart: {
            id: 'sales-chart'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
    };

    const series = [
        {
            name: 'Sales',
            data: [30, 40, 35, 50, 49, 60, 70]
        }
    ];

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="main-content">
                <h1>Admin Dashboard</h1>
                <Summary />
                <div className="charts-container">
                    <div className="chart">
                        <h2>Sales Overview</h2>
                        <Chart options={options} series={series} type="line" height={300} />
                    </div>
                    <div className="chart">
                        <h2>Order Trends</h2>
                        <Chart options={options} series={series} type="bar" height={300} />
                    </div>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <h3>Items Out of Stock</h3>
                        <p>10</p> {/* Replace with dynamic data */}
                    </div>
                    <div className="card">
                        <h3>Items to be Cleared Before Next Restock</h3>
                        <p>5</p> {/* Replace with dynamic data */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
