import React, { useEffect, useState } from "react";
import "./header.css";

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };
const Header = () => {
    const [theme, setTheme] = useState(getStorageTheme())

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        }
        else {
            setTheme('light-theme')
        }
      }
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
      }, [theme]);
  return (
    <div className="header">
      <div className="header__title">
        <p>Social Media Dashboard</p>
        <span>Total followers:23,004</span>
      </div>
      {theme === "light-theme" ? (
        <div className="toggle" onClick={toggleTheme}>
          <p>Dark Mode</p>
          <button className="switch">
            <div className="cirlce"></div>
          </button>
        </div>
      ) : (
        <div className="toggle" onClick={toggleTheme}>
          <p>Light Mode</p>
          <button className="switch switch1">
            <div className="cirlce"></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
