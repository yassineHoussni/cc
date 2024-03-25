import React from 'react'
import ReactDOM from "react-dom/client";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <>
        <nav>
        <ul>
        <li>
        <Link to="/">HTML</Link>
        </li>
        <li>
        <Link to="/CSS">CSS</Link>
        </li>
        <li>
        <Link to="/JavaScript">JavaScript</Link>
        </li>
        </ul>
        </nav>
    </>
    </div>
  )
}
