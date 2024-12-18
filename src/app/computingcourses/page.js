import { fetchComputerCourses } from "../../lib/db.js";
import "./computingcourses.css";
import Banner from "../Components/Banner";

const ComputingCourses = async () => {
    const courses = await fetchComputerCourses();

    return (
        <>
        <title>ComputingCourses</title>
        <Banner
          title="Unlock Your Future in Technology"
          subtitle="Explore Our Cutting-Edge Computing Programs"
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
        
            <div className="info-text-container">
                <section>
                    <h2>Diverse Undergraduate Computing Courses</h2>
                    <p>The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.</p>
                </section>
                <section>
                    <h2>A Thriving Community of Computing Specialisms</h2>
                    <p>The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.</p>
                </section>
                <section>
                    <h2>Industry-Accredited and Future-Focused Programs</h2>
                    <p>The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.</p>
                </section>
                <h2 id="Hide">State of the art Computer labs</h2>
                <img src="/images/ACES-036-Computing-Playstation-Lab-2.jpg" alt="Computing" className="responsive-image" />
            </div>
        </div>
        </>
    );
};

export default ComputingCourses;