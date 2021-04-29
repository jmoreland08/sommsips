import React from "react";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavLink className="logo" to="/">
        Sommsips
      </NavLink>
<br/>
      <NavLink className="wines" to="/wines">
        View all Wines
      </NavLink>
      <br/>
      <NavLink className="wines" to="/wines/add-wine">
        Add a Wine
      </NavLink>
      <br/>
      <NavLink className="wines" to="/wines/edit">
       edit Wines
      </NavLink>

    
    </div>
  );
}