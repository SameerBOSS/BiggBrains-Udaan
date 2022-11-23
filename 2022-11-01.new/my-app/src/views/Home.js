import React from "react";
import image from "../image/cropped-finalLogo.png";
import imag from "../image/principal-285x300.jpeg";

const Home = () => {
  return ( 
   <>


   <div className="">
   <img src={image} alt = "Heritage"/>
   </div>


    <div className="hello_division">
     <h1>Events</h1>
     <li>
        <ol>1.yoga day</ol>
        <ol>2.indipendence day</ol>
        <ol>3.republic day</ol>
        <ol>4.earth day</ol>
        <ol>5.annual day</ol>
      </li>
    </div>


    <div className="fdsa_division">
    <img src={imag} alt = "Heritage"/>
    </div>


  <div className="second_division">
     <h1>Notice</h1>
     <li>
        <ol>1.P.T.M</ol>
        <ol>2.IQ Test </ol>
        <ol>3.Essay Writing Compitation</ol>
        <ol>4.dance Compitation</ol>
      </li>
   </div>
   
   </>
  )
};
export default Home;