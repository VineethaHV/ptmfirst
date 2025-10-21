import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/appointments">Appointments</Link>
      </nav>
    </div>
  );
}

export default DashboardPage;