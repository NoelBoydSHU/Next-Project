import { fetchDesignCourses } from "../../lib/db.js";
import Banner from "../Components/Banner.js";
import "./designcourses.css";

const DesignCourses = async () => {
    const courses = await fetchDesignCourses();

    return (
        <>
        <title>Design Courses</title>
        <Banner
          title="Create. Innovate. Inspire."
          subtitle="Learn Modern Design Skills for the Creative Industry"
          buttonText="View our Facilities"
          buttonLink="/facilities"
          leftLogo="/images/logo.png"  
          rightLogo="/images/logo.png" 
        />
        <div className="courses-container">
            <div className="courses-list-container">
                <ul className="courses-list">
                    {courses.map((course, index) => (
                        <li key={index} className="course-item">
                            <h2>{course.CourseTitle}</h2>
                            <p><strong>Type:</strong> {course.CourseType}</p>
                            <p><strong>Summary:</strong> {course.CourseSummary}</p>
                            <p><strong>Award:</strong> {course.CourseAwardName}</p>
                            <p><strong>UCAS Code:</strong> {course.UcasCode}</p>
                            <p><strong>UCAS Points:</strong> {course.UcasPoints}</p>
                            <p><strong>Year of Entry:</strong> {course.YearOfEntry}</p>
                            <p><strong>Mode of Attendance:</strong> {course.ModeOfAttendance}</p>
                            <p><strong>Study Length:</strong> {course.StudyLength}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
            <title>DesignCourses</title>
            <div className="info-text-container">
                <section>
                    <h2>A Global Hub of Creativity and Knowledge</h2>
                    <p>The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.</p>
                </section>
                <section>
                    <h2>Innovative Teaching for the Creative Thinker</h2>
                    <p>The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.</p>
                </section>
                <section>
                    <h2>Practical Learning for Professional Success</h2>
                    <p>You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.</p>
                </section>
            </div>
        </div>
        </>
    );
};

export default DesignCourses;