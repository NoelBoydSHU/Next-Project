"use client";
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const banner = document.querySelector('.banner');
    if (banner) {
      banner.classList.toggle('hidden', isMenuOpen);
    }
  };

  return (
    <nav className="navbar">
      <button className="burger" onClick={toggleMenu}>&#9776;</button>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/howtofindus">How to Find Us</a></li>
        <li><a href="/computingcourses">Computing Courses</a></li>
        <li><a href="/designcourses">Design Courses</a></li>
        <li><a href="/facilities">Facilities</a></li>
        <li><a href="/learningresources">Learning Resources</a></li>
        <li><a href="/informationforstaff">Information for Staff</a></li>
        <li><a href="/informationforstudents">Information for Students</a></li>
        <li><a href="/workingwithbusiness">Working with Business</a></li>
        <li><a href="/contactus">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;