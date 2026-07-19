import React from "react";
import { Outlet } from "react-router-dom";
import './Help.scss';

function Help() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="help-title">Help</h1>

      {/* Nested route content will render here */}
      <Outlet />
    </div>
  );
}

export default Help;