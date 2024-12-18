import '../global.css';
import './informationforstaff.css';
import Banner from '../Components/Banner';

const InformationForStaff = () => {
    return (
        <>
        <title>Information for Staff</title>
        <Banner
        title="Supporting Our Staff Community"
        subtitle="Tools and Information to Excel in Your Role"
        buttonText="Looking for a job?"
        buttonLink="/contactus"
        leftLogo="/images/logo.png"  
        rightLogo="/images/logo.png" 
        />
        <div className="info-container">
            <section>
                <h2>Information For Staff</h2>
                <ul>
                    <li>
                        <strong>Financial Services</strong>
                        <p>The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting.</p>
                    </li>
                    <li>
                        <strong>Information Systems Services</strong>
                        <p>The ISS team delivers the College’s computing facilities including all hardware and software. They also run the staff helpdesk.</p>
                    </li>
                    <li>
                        <strong>Marketing Services</strong>
                        <p>The Marketing Team will help promote events and new courses. They will help with press release preparation.</p>
                    </li>
                    <li>
                        <strong>Personnel Services</strong>
                        <p>All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.</p>
                    </li>
                    <li>
                        <strong>Facilities</strong>
                        <p>The facilities are responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.</p>
                        <p><a href="/facilities">See all of Cantor College's facilities</a></p>
                    </li>
                </ul>
            </section>
        </div>
        </>
    );
};

export default InformationForStaff;

export const metadata = {
    title: "Information For Staff",
    description: "Provides information for staff",
};