import React from "react";
import { Link } from "react-router-dom";
import "./Help.scss";

function RemoveApplication() {
  return (
    <div className="help-container">
      <div className="help-content">
        <h1>Removing Applications</h1>

        <h2>How to Delete an Application</h2>
        <p>
          If you no longer want to keep an application, click the
          <strong> Remove Application </strong>
          button on the application card.
        </p>

        <p>You may remove applications when:</p>

        <ul className="help-list">
          <li>The position is no longer available</li>
          <li>You no longer want the job</li>
          <li>The application is outdated</li>
          <li>You want to keep your list organized</li>
        </ul>

        <p>
          Once removed, the application will no longer appear in your list.
        </p>

        <h2>Clearing All Applications</h2>

        <h3>How to Clear the Entire List</h3>
        <p>
          The <strong>Clear Applications</strong> button removes all saved
          applications at once.
        </p>

        <p>Use this option carefully. It is helpful if:</p>

        <ul className="help-list">
          <li>You want to start a new job search</li>
          <li>You are testing the app</li>
          <li>You no longer need the old data</li>
        </ul>

        <p>
          After clicking this button, all applications will be deleted from the
          page.
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

export default RemoveApplication;