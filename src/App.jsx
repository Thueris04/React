import "./App.css";
import AboutUs from "./components/aboutUs";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import ProductCard from "./components/productCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="products-cards-container">
        <ProductCard
          title="COOL MUSIC"
          subtitle="PRACTICE ROOM."
          price="99.99"
          image="https://rchive.ca/cdn/shop/files/IMG_0545_375x500_crop_center.jpg?v=1699727832"
        />
        <ProductCard
          title="AMAZING SPACE"
          subtitle="SIMPLE AND MINIMALIST"
          price="199.99"
          image="https://rchive.ca/cdn/shop/files/rchive_space-58_3d04433d-6a38-4690-a564-3d6bf9ff4059_375x500_crop_center.jpg?v=1699728018"
        />
        <ProductCard
          title="POP UP EVENTS"
          subtitle="FASHION SHOW"
          price="299.99"
          image="https://rchive.ca/cdn/shop/files/rchive_space-26_375x500_crop_center.jpg?v=1699727743"
        />
      </div>
      <AboutUs />
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
