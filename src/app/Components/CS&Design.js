import React from 'react';
import './CS&Design.css';
import { FaChalkboardTeacher, FaBook, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const CSDesign = () => {
  const features = [
    {
      id: 1,
      icon: <FaChalkboardTeacher />,
      title: 'Computer Networks',
      description: 'This course includes general computing skills in programming, cyber security, information systems, management and professionalism in a technical environment.',
    },
    {
      id: 2,
      icon: <FaBook />,
      title: 'Computer Science with Foundation Year',
      description: 'Gain a degree in computer science, with an initial foundation year to prepare for the course.',
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: 'Graphic Design',
      description: 'Develop your own creative and innovative approach to graphic design by challenging and exploring contemporary practices',
    },
    {
      id: 4,
      icon: <FaGraduationCap />,
      title: 'Interior Architecture and Design',
      description: 'Develop a creative and sustainable approach to interior architecture by exploring contemporary practices through diverse projects.',
    },
  ];

  return (
    <section className="why-choose">
      <h2 className="section-title">Featured Courses</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CSDesign;
