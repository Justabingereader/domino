import { useState } from "react";
import SearchBar from './components/searchBar';
import ImageShow from './components/imageShow';
import Footer from "./components/footer";
import domino from './dom-images/dom-logo.png';
import './App.css';
import cart from './dom-images/cart.png';
import pic1 from './dom-images/pic1.png';
import pic2 from './dom-images/pic2.png';
import pic3 from './dom-images/pic3.png';
import pic4 from './dom-images/pic4.png';
import pic5 from './dom-images/pic5.png';
import pic6 from './dom-images/pic6.png';
import pic7 from './dom-images/pic7.png';
import pic8 from './dom-images/pic8.png';
import pic9 from './dom-images/pic9.png';
import pic10 from './dom-images/pic10.png';
import pic11 from './dom-images/pic11.png';
import pic12 from './dom-images/pic12.png';
import pic13 from './dom-images/pic13.png';
import pic14 from './dom-images/pic14.png';
import pic15 from './dom-images/pic15.png';
import pic16 from './dom-images/pic16.png';
import pic17 from './dom-images/pic17.png';
import pic18 from './dom-images/pic18.png';
function App(){
    const imageObjects = [
        {
            url: pic1,
            name: 'Barbeque Pepperoni',
            price: '₦2700'
        },
        {
            url: pic2,
            name: 'Double Cheese',
            price: '₦2,400'
        },
        {
            url: pic3,
            name: 'Mixed Cheese & Beef',
            price: '₦2,610'
        },
        {
            url: pic4,
            name: 'Supreme Chicken',
            price: '₦2,700'
        },
        {
            url: pic5,
            name: 'Chicken Suya',
            price: '₦2,500'
        },
        {
            url: pic6,
            name: 'Pineapple Delight',
            price: '₦2,500'
        },
        {
            url: pic7,
            name: 'Shawarma Roll',
            price: '₦1,700'
        },
        {
            url: pic8,
            name: 'Buffalo Wings',
            price: '₦1,500'
        },
        {
            url: pic9,
            name: 'Barbeque Wings',
            price: '₦1,700'
        },
        {
            url: pic10,
            name: 'Coca-cola',
            price: '₦300'
        },
        {
            url: pic11,
            name: 'Coca-cola Zero',
            price: '₦300'
        },
        {
            url: pic12,
            name: 'Fanta',
            price: '₦300'
        },
        {
            url: pic13,
            name: 'Sprite',
            price: '₦300'
        },
        {
            url: pic14,
            name: 'Pepsi',
            price: '₦300'
        },
        {
            url: pic15,
            name: 'Mirinda',
            price: '₦300'
        },
        {
            url: pic16,
            name: 'Mountain Dew',
            price: '₦300'
        },
        {
            url: pic17,
            name: 'Eva Water',
            price: '₦300'
        },
        {
            url: pic18,
            name: 'Aquafina Water',
            price: '₦300'
        }
    ]
    const [searchQuery, setSearchQuery] = useState('');
     return (
        <div>
            <nav>
                <ul>
                    <li><img src={domino} alt="domino's logo" className="dom-logo"/></li>
                    <li className="order">Order</li>
                    <li className="deals">Deals</li>
                    <li className="location">Location</li>
                    <img src={cart} alt="cart logo" id="cart"/>
                    <li className="login">Login</li>
                </ul>
            </nav>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ImageShow searchQuery={searchQuery} images={imageObjects}/>
            <Footer />
        </div>
     );
};

export default App;