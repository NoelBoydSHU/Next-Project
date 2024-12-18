import ContactForm from "../Components/ContactForm";
import Banner from "../Components/Banner";
import "../Components/ContactForm.css";
import './contactus.css';

export default function ContactUs() {
    return (
        <>
        <title>Contact Us</title>
        <Banner
        title="Let's Connect"
        subtitle="Have Questions? Reach Out to Our Team Today"
        buttonText="Get Involved"
        buttonLink="/contactus"
        leftLogo="/images/logo.png"  
        rightLogo="/images/logo.png" 
        />
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Feel free to reach out to us using the form below:</p>
            <div className="contact-form">
                <ContactForm />
            </div>
        </div>
        </>
    );
}

export const metadata = {
    title: "Contact Us",
    description: "Provides information on how to contact Cantor College",
};