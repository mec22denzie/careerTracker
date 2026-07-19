import React from "react";
import { Link } from "react-router-dom";
import "./Help.scss";

function FilterStatus() {
  return (
    <div className="help-container">
      <div className="help-content">
        <h1>Filtering Applications</h1>

        <h2>How to Search and Filter</h2>
        <p>
          The Applications page displays all of your saved job applications.
        </p>

        <p>You can:</p>
        <ul className="help-list">
          <li>Search by company name or job title</li>
          <li>Filter applications by status</li>
          <li>Quickly find important or upcoming applications</li>
        </ul>

        <h2>Search</h2>
        <p>
          Type a company name or job title into the search bar. The list updates
          automatically as you type.
        </p>

        <p>Examples:</p>
        <ul className="help-list">
          <li>
            Typing <strong>"Amazon"</strong> shows only applications related to
            Amazon.
          </li>
          <li>
            Typing <strong>"Frontend"</strong> shows applications with that job
            title.
          </li>
        </ul>

        <h2>Filter by Status</h2>
        <p>
          Use the status dropdown to display only applications in a specific
          stage of the hiring process.
        </p>

        <p>Available statuses include:</p>
        <ul className="help-list">
          <li>Saved</li>
          <li>Applied</li>
          <li>Assessment</li>
          <li>Interview</li>
          <li>Offer</li>
          <li>Rejected</li>
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

export default FilterStatus;