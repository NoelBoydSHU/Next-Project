import './Footer.css';
const Footer = () => {
    return (
        <footer className = "footer">
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;