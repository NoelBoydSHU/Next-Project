import GoogleMaps from "../Components/GoogleMaps";
import Banner from '../Components/Banner';
import '../global.css';
import './howtofindus.css';

export default function HowToFindUs() {
    return (
      <>
      <title>How To Find Us</title>
        <Banner
          title="Visit Our Campus"
          subtitle="Find Directions and Explore Cantor College in Person"
          buttonText="View our Facilities"
          buttonLink="/facilities"
          leftLogo="/images/logo.png"  
          rightLogo="/images/logo.png" 
        />
        <div className="how-to-find-us-container">
            <h1 className="how-to-find-us-title">How to Find Us</h1>
            <p className="how-to-find-us-text">We are located at Cantor College, Main Street, Sheffield, SC4 2BB. Check the map below for directions:</p>
            <h1 className="how-to-find-us-title">Our Contact Details</h1>
            <p className="how-to-find-us-text">Tel: (01321) 2340 235</p>
            <p className="how-to-find-us-text">Fax: (01321) 2340 236</p>
            <p className="how-to-find-us-text">Email: info@cantorcollege.ac.uk</p>
            <GoogleMaps />
        </div>
      </>
    );
}

export const metadata = {
    title: "How to Find Us",
    description: "Directions to our college",
};