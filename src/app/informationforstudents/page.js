import '../global.css';
import './informationforstudents.css';
import Banner from '../Components/Banner.js';


const InformationForStudents = () => {
    return (
        <>
        <title>Information For Students</title>
        <Banner
        title="Your Guide to Student Life"
        subtitle="Everything You Need to Thrive at Cantor College"
        buttonText="Eager to join us?"
        buttonLink="/contactus"
        leftLogo="/images/logo.png"  
        rightLogo="/images/logo.png" 
        />
        <div className="info-container">
            <section>
                <h2>Student Hub</h2>
                <ul>
                    <li>
                        <strong>Student Hub</strong>
                        <p>The Student Hub is the social heart of our campus, providing a place for relaxation and connection. Here, you’ll find a café, lounge areas, and recreational facilities, making it the perfect spot to unwind between classes, meet with friends, or join student-led activities and clubs.</p>
                    </li>
                    <li>
                        <strong>Career and Development Centre</strong>
                        <p>Our Career and Development Centre is dedicated to helping you plan your future. Offering career counseling, resume workshops, and job placement services, this centre provides the support you need to transition from student to professional. The Centre also hosts regular employer networking events and industry talks to help you build connections in your field.</p>
                    </li>
                    <li>
                        <strong>Fitness and Wellness Centre</strong>
                        <p>We believe in nurturing both the mind and body. Our Fitness and Wellness Centre offers a fully equipped gym, exercise studios, and a range of fitness classes to help you stay healthy and active. The Centre also includes wellness services such as yoga, meditation, and counseling to support your overall well-being.</p>
                    </li>
                    <li>
                        <strong>On-Campus Housing</strong>
                        <p>For those who choose to live on campus, Cantor College offers modern, comfortable housing options. Our residence halls provide a supportive community environment, with amenities like high-speed internet, study lounges, and common areas where you can relax and socialize.</p>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Experience Cantor College</h2>
                <p>Cantor College’s facilities are designed to enhance your learning experience and support your academic and personal growth. We invite you to explore our campus, discover our resources, and make the most of everything we have to offer.</p>
            </section>
        </div>
        </>
    );
};

export default InformationForStudents;

export const metadata = {
    title: "Information For Students",
    description: "Provides information for students",
};