import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={171}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={48990}
            rating={4}
            image="https://m.media-amazon.com/images/I/31G2+9IDKgL._SX300_SY300_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="OnePlus Band: Steven Harrington Edition: Smart Everywear : 1.1(2.8 cm) AMOLED Display, Continuous Blood Oxygen Saturation Monitoring (Sp02), 5ATM + IP68 Water , Dust Resistant"
            price={3299}
            rating={3}
            image="https://m.media-amazon.com/images/I/61Pi2-7QJjS._SL1500_.jpg"
          />

          <Product
            id="23445930"
            title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year"
            price={2999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61+QNG8IiPL._SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"
            price={71900}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Odyssey 27-inch (68.4 cm) 1000R, 144 Hz, 1ms, FreeSync Premium, WQHD Curved Gaming Monitor (LC27G55TQWWXXL, Black)"
            price={26239}
            rating={4}
            image="https://m.media-amazon.com/images/I/81cSdJuBbFL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
