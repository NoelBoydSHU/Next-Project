import React from 'react';
import './WhyChoose.css';
import { FaChalkboardTeacher, FaBook, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      icon: <FaChalkboardTeacher />,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and experienced instructors who are passionate about teaching.',
    },
    {
      id: 2,
      icon: <FaBook />,
      title: 'Modern Resources',
      description: 'Access state-of-the-art facilities, libraries, and digital tools to aid your learning journey.',
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: 'Career Opportunities',
      description: 'Benefit from strong links with employers and industry-leading placement opportunities.',
    },
    {
      id: 4,
      icon: <FaGraduationCap />,
      title: 'Proven Success',
      description: 'Join a college with an excellent track record of student success and graduate employability.',
    },
  ];

  return (
    <section className="why-choose">
      <h2 className="section-title">Why Choose Cantor College?</h2>
      <p className="section-subtitle">
        Discover what makes us stand out and why we are the right choice for your future education.
      </p>
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

export default WhyChoose;
