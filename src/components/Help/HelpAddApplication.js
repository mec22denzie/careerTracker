import React from "react";
import { Link } from "react-router-dom"; 
import './Help.scss';

function HelpAddApplication() {
  return (
    <div className="help-container">
      <div className="help-content">
      <h1>Adding Applications</h1>
      <h2><strong>How to Add a New Application</strong></h2>
      <p>To add a new job application:</p>

            <ol className="help-list">
              <li>Click Add Application in the navigation menu.</li>
              <li>Fill in the application form.</li>
              <li>Enter the following information:</li>
                <ul>
                  <li>Job Title</li>
                  <li>Company Name</li>
                  <li>Location</li>
                  <li>Date Applied</li>
                  <li>Interview Date (optional)</li>
                  <li>Priority Level</li>
                  <li>Notes</li>
                  <li>Job Link</li>
                </ul>
              <li>Select the current status of the application.</li>
              <li>Click the Save Application button.</li>
            </ol>

      <p>After saving, the application will appear on the Applications page.</p>
      <p><strong>Tips</strong></p>
      <p>To add a new job application:</p>
      <ul className="help-list">
                  <li>Add the interview date if you already have one scheduled.</li>
                  <li>Use the Notes section to save reminders, contact names, or follow-up information.</li>
                  <li>Add the job posting link so you can return to it later</li>
                </ul>
      <h2><strong>Priority Levels</strong></h2>
      <p><strong>Understanding Priority</strong></p>
      <p>When adding an application, you can choose a priority level:</p>
      <ul className="help-list">
                  <li><strong>High:</strong> Very important job or urgent follow-up needed</li>
                  <li><strong>Medium:</strong> Important, but not urgent</li>
                  <li><strong>Low:</strong> Less important or optional application</li>
                </ul>
      <p>Priority helps you decide which applications to focus on first.</p>
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

export default HelpAddApplication;