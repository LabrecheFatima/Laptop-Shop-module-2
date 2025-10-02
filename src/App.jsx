import Navigation from "./components/Nav/Navigation";
import './App.css';
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Carts from "./components/Carts/Carts";
import { CartProvider } from "./components/contexts/CartContext";
import CartIcon from "./components/cartIcon/CartIcon";

function App() {
  return (
    <CartProvider>
        <Navigation brand= "Laptop Store"/>
        
        <Hero title= 'Take a Look'
              subtitle= 'Speed of lightness'/>
        
        <div className="cart-icon-wrapper">
          <CartIcon/>
        </div>
        <section className="products-section">
          <div className="products-container">
            <Carts
              image_laptop='src/assets/hp.jpg'
              name='HP Pavilion 15'
              camera='720p HD webcam'
              price={1299}
              price_monthly= {299}
            />
            <Carts
                image_laptop='src/assets/hp_.jpg'
                name='HP Envy x360'
                price={1199}
                price_monthly= {150}
              />
              <Carts
                image_laptop='src/assets/macbook_pro_16.jpg'
                name='MacBook Pro 16"'
                price={2499}
                price_monthly= {200}
              />
              <Carts
                image_laptop='src/assets/macbook_air_15.jpg'
                name='MacBook Air 15'
                price={1599}
                price_monthly= {300}
              />
              <Carts
                image_laptop='src/assets/hp_16.jpg'
                name='HP Spectre x360 16'
                price={1699}
                price_monthly= {450}
            />     
          </div>
        </section>

        
        <Footer 
          company= 'Laptop Team'
          description= 'premium laptops and tech solutions'
          email= 'info@laptopteam.com'
          phone= '+1 (555) 123-4567'
          copyright= '© 2024 Laptop Team. All rights reserved.'/>

    </CartProvider>
      );
}

export default App
