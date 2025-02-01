// Header.js
import React from "react";

function Header({ title }) {
  return (
    <div className="header-bar">
      <div className="header-left">
        <h2>{title}</h2>
      </div>
      <div className="header-right">
        <button>📅</button>
        <button>⋮</button>
      </div>
    </div>
  );
}

export default Header;
