import '../global.css'
import Banner from '../Components/Banner.js'

export default function Facilities() {
    return (
      <>
      <title>Facilities</title>
        <Banner
          title="World-Class Facilities, Built for Success"
          subtitle="Discover Our Modern Learning Spaces and Labs"
          buttonText="Take a Virtual Tour via our Gallery"
          buttonLink="/"
          leftLogo="/images/logo.png"  
          rightLogo="/images/logo.png" 
        />
      <div className="container">
      <div className="text-box">
          <h1>Facilities</h1>
          <section>
            <h2>Location and Facility Overview</h2>
            <p>The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.</p>
          </section>
          <section>
            <h2>Our Community</h2>
            <p>Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</p>
          </section>
          <section>
            <h2>Facilities include:</h2>
            <ul>
              <li>wi-fi technology</li>
              <li>pool teaching rooms, including classrooms to teach from 25 - 80 student</li>
              <li>specialist faculty facilities</li>
              <li>a double height lecture theatre at first and second floor level</li>
              <li>meeting rooms</li>
              <li>dramatic three-storey glass open atrium</li>
              <li>office accommodation</li>
              <li>specialist IT facilities</li>
              <li>reception desk area</li>
              <li>catering outlet</li>
              <li>parking for disabled badge holders</li>
              <li>cycle racks</li>
              <li>gallery</li>
            </ul>
          </section>
        </div>
      </div>
      </>
    );
  }

  export const metadata = {
    title: "Facilities",
    description: "Provides information on Cantor Colleges Facilities",
  };

