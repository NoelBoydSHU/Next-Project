import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
