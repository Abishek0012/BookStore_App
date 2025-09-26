import React from 'react'
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Contacts() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Contacts