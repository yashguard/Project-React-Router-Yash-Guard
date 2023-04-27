import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner/>
      <section className="home-section">
        <div className="overlay">
          <div className="container">
            <h1>Welcome to our website</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore a
              eveniet deleniti obcaecati perspiciatis voluptatem nesciunt
              dolores. Voluptate non unde quas ipsam error illum fuga ea
              corrupti? Necessitatibus natus aliquid odio fuga nobis hic, facere
              porro quidem consectetur maxime exercitationem nulla voluptatibus
              atque?
            </p>
            <Link to="/Products">View Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
