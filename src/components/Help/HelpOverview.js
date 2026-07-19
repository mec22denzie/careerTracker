import React from "react";
import { Link } from "react-router-dom"; 
import './Help.scss';

function HelpOverview() {
  return (
    <div className="help-container">
      <div className="help-content">
      <h1>Introduction</h1>
      <h2><strong>Welcome to Career Tracker</strong></h2>
      <p>
        Career Tracker helps you organize and manage all of your job applications in one place. 
        Instead of keeping notes in different documents or forgetting important dates, you can 
        save each application, track its status, and monitor upcoming interviews.
      </p>

      <p>With this app, you can:</p>

      <ul className="help-list">
        <li>Add new job applications</li>
        <li>Save important details such as company name, location, and interview date</li>
        <li>Track the current stage of each application</li>
        <li>Search and filter applications quickly</li>
        <li>Remove applications you no longer need</li>
      </ul>

      <p>
        Use the menu on the right side of the Help page to learn more about each feature.
      </p>
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

export default HelpOverview;