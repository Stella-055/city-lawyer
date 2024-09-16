import React from 'react'
import { Element } from 'react-scroll'
import { useState,useEffect } from 'react';
import img1 from './f.jpeg';
import img2 from './t.jpeg';
import img3 from './w.jpeg'
import img4 from './ss.jpeg';
import img5 from './n.jpeg';
function Home() {
  const backgrounds = [
    `url(${img1})`,
    `url(${img2})`,
    `url(${img3})`,
    `url(${img4})`,
     `url(${img5})`
  ];
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    // Change background every 5 seconds
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  });
  return (<Element name="Home">
    <div className='homediv'style={{ backgroundImage: backgrounds[currentBackground]} }>
    <h1>"Dedicated to Your Justice. Trusted for Results"</h1>
    <p >As an experienced Lawyer, </p>
       <p className='homedivp'> I am committed to providing individuals and businesses with personalized legal counsel rooted in integrity and professionalism.
        <br/> My goal is to offer effective legal solutions tailored to your unique needs, ensuring that justice is served and your rights are protected.</p>
        <hr/>
        </div>  
       
        </Element>
  )
}

export default Home