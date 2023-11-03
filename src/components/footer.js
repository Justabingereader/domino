import facebook from '../dom-images/facebook.png';
import xlogo from '../dom-images/xlogo.jpg';
import cards from '../dom-images/cards.png';
import domino from '../dom-images/darkdom.png';
import '../footer.css';
function Footer(){
    return (
        <div className='content-heading'> 
            <div className='content-wrapper'>
            <div className='content-one'>
                <p className='company'>Company</p>
                <p className='about'>About Us</p>
                <p className='inter'>International</p>
                <p className='faq'>FAQ</p>
                <p className='contact'>Contact Us</p>
            </div>
            <div className='content-two'>
                <img src={facebook} alt='facebook logo' className='facebook'/>
                <img src={xlogo} alt='X logo' className='xlogo'/>
                <p className='pay'>Pay With</p>
                <img src={cards} alt='cards logo' className='card'/>
            </div>
            </div>
            <div className='content-three'>
                <img src={domino} alt='dark domino logo' className='domino'/>
                <p>&copy; 2023</p>
                <p>Terms of Service</p>
            </div>
        </div>
    );
};

export default Footer;