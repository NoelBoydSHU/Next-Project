import Banner from '../Components/Banner';

export default function AboutUs() {
    return (
      <>
      <title>AboutUs</title>
        <Banner
          title="Discover Our Story"
          subtitle="Committed to Excellence in Education Since 1843"
          buttonText="View our Design Courses"
          buttonLink="/designcourses"
          leftLogo="/images/logo.png"  
          rightLogo="/images/logo.png" 
        />
        <div className="container">
          <div className="text-box">
            <h1>About Us</h1>
            <section>
              <h2>Introduction</h2>
              <p>Established in 1989, Cantor College specializes in Computing and Design, offering students the education they need to achieve their career aims.</p>
            </section>
            <section>
              <h2>Our Mission</h2>
              <p>We equip students with the knowledge, skills, and experience to succeed, ensuring they are ready to thrive in their chosen careers.</p>
            </section>
            <section>
              <h2>Opportunities for Success</h2>
              <p>Cantor College connects you to leading researchers and employers, giving you an edge as you step into the world of work.</p>
            </section>
            <section>
              <h2>Global Impact</h2>
              <p>Our students have gone on to successful careers in diverse industries across the globe.</p>
            </section>
            <section>
              <h2>Support for Your Future</h2>
              <p>We provide ongoing support and resources to help you achieve your goals.</p>
            </section>
          </div>
        </div>
      </>
    );
}