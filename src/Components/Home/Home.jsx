import React, { useEffect } from 'react';
import './Home.css';
import Product from '../Product/Product';
import ScrollReveal from 'scrollreveal';

function Home() {

  useEffect(() => {
    ScrollReveal().reveal('.home__image',{
      duration: 2000,
      origin: 'left',
      distance: '150%',
    })

    ScrollReveal().reveal('.home__message',{
      duration: 2000,
      origin: 'right',
      distance: '150%',
    })

    return () => {
      ScrollReveal().clean('.home__image');
      ScrollReveal().clean('.home__message');
    }
  }, []) 

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__imagesContainer">
          <img 
            className="home__image"
            src="https://firebasestorage.googleapis.com/v0/b/clone-e814f.appspot.com/o/caja-gaming.png?alt=media&token=e4fa4a90-9397-4adc-a3d8-10b0a8205a2f" 
            alt="PcCase" 
          />

          <img 
            className="home__message"
            src="https://firebasestorage.googleapis.com/v0/b/clone-e814f.appspot.com/o/message.png?alt=media&token=7254b202-54ee-43b1-963e-2b9ba0fc5983"
            alt="message" 
          />
        </div>

        <div className="home__row__title">
          <h2>CPU</h2>
        </div>
        <div className="home__row">
          <Product 
            id="12321341"
            title= 'AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler'
            price={209.99}
            rating={5} 
            image='https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id="49538094"
            title="Intel Core i5-10600K Desktop Processor 6 Cores up to 4.8 GHz Unlocked  LGA1200 (Intel 400 Series Chipset) 125W"
            price={214.90}
            rating={4}
            image="https://m.media-amazon.com/images/I/61xAzEoCuhL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row__title">
          <h2>GPU</h2>
        </div>
        <div className="home__row">
          <Product 
            id="4903850"
            title= "ASRock Phantom Gaming D Radeon RX 570 DirectX 12 RX570 4G 4GB 256-Bit GDDR5 PCI Express 3.0 x16 HDCP Ready Video Card"
            price={469.90}
            rating={3} 
            image='https://m.media-amazon.com/images/I/61sfbQ1u5oL._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id="23445930"
            title= 'ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card (DUAL-RTX2060-O6G-EVO)'
            price={98.99}
            rating={5} 
            image='https://m.media-amazon.com/images/I/81murmTdjAL._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id="3254354345"
            title= 'ASUS TUF Gaming NVIDIA GeForce GTX 1650 OC Edition Graphics Card (PCIe 3.0, 4GB GDDR6 Memory, HDMI, DisplayPort, DVI-D, 1x 6-pin Power Connector, IP5X Dust Resistance, Space-Grade Lubricant)'
            price={497.00}
            rating={4} 
            image='https://m.media-amazon.com/images/I/81YOpThfvuL._AC_UY327_FMwebp_QL65_.jpg'
          />
        </div>

        <div className="home__row__title">
          <h2>RAM</h2>
        </div>
        <div className="home__row">
          <Product 
            id="90829332"
            title= "Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3200MHz C16 LED Desktop Memory - Black (CMW16GX4M2C3200C16)"
            price={109.99}
            rating={5} 
            image='https://m.media-amazon.com/images/I/71Kkm5nIRKL._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id="90828932"
            title= "G.SKILL F4-3600C16Q-64GTZNC 64GB 4x16GB DDR4 3600MHz Memory Module"
            price={469.99}
            rating={4} 
            image='https://m.media-amazon.com/images/I/6179qk4OJ3L._AC_UY327_FMwebp_QL65_.jpg'
          />    
        </div>

        <div className="home__row__title">
          <h2>MOTHERBOARD</h2>
        </div>
        <div className="home__row">
          <Product 
            id="90829381"
            title= "ASUS Prime Z390-A Motherboard LGA1151 (Intel 8th And 9th Gen) ATX DDR4 DP HDMI M.2 USB 3.1 Gen2 Gigabit LAN"
            price={166.06}
            rating={4} 
            image='https://m.media-amazon.com/images/I/71OmavzkW8L._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id="343534128"
            title= "GIGABYTE B365M DS3H (LGA1151/Intel/Micro ATX/USB 3.1 Gen 1 (USB3.0) Type A/DDR4/Motherboard)"
            price={69.99}
            rating={5} 
            image='https://m.media-amazon.com/images/I/81kcEq5tMNL._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id="145345555"
            title= "GIGABYTE B450 AORUS PRO Wi-Fi (AMD Ryzen AM4/ATX/M.2 Thermal Guard with Onboard Wi-Fi/HDMI/DVI/USB 3.1 Gen 2/DDR4/Motherboard)"
            price={119.99}
            rating={3} 
            image='https://m.media-amazon.com/images/I/71OmavzkW8L._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id="4534826655"
            title= "ASUS ROG Strix B550-F Gaming AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)"
            price={178.00}
            rating={4} 
            image='https://m.media-amazon.com/images/I/818fDro1x9L._AC_UY327_FMwebp_QL65_.jpg'
          />    
        </div>
      </div>
    </div>
  );
}

export default Home;