import React from "react";
import { Link } from "react-router-dom"; 
import './Help.scss';

function ManageStatus() {
  return (
    <div className="help-container">
      <div className="help-content">
      <h1>Changing Status</h1>
      <h2><strong>How to Update an Application Status</strong></h2>
      <p>
        Each application card includes a Change Status button.<br></br><br></br>
        Click this button to move the application to the next stage in your job search. <br></br><br></br>
        Updating the status helps you keep track of where you are in the hiring process. <br></br><br></br>
        The colored badge on the application card will also update automatically.
      </p>
      <h2><strong>Status Meaning</strong></h2>
          <ul className="help-list">
            <li><strong>Saved:</strong> You have not applied yet.</li>
            <li><strong>Applied:</strong> You submitted your application.</li>
            <li><strong>Assessment:</strong> The employer sent you a test or assignment.</li>
            <li><strong>Interview:</strong> You have been invited for an interview.</li>
            <li><strong>Offer:</strong> You received a job offer</li>
            <li><strong>Rejected:</strong> The application was unsuccessful.</li>
          </ul>
      </div>

      <ul className="help-menu">
        <li><Link to="/help">Introduction</Link></li>
        <li><Link to="/help/add">Adding Applications</Link></li>
        <li><Link to="/help/filter">Filtering Applications</Link></li>
        <li><Link to="/help/change">Changing Applications</Link></li>
        <li><Link to="/help/remove">Removing Applications</Link></li>
      </ul>
    </div>
  );
}

export default ManageStatus;