import React from "react";
import styles from "./About.module.css";

const About = () => {
   return (
      <div className={styles.about}>
         <h2>Watch analyzer - Project</h2>
         <div className={styles.projectInfo}>
            <p>
               This is a simple watch analyzer website which is created using react ,
               fake reviews json data, react-router and rechart (A library for
               drawing charts). In this project you can find reviews for watch and
               inside the dashboard you will find the Analytics of watch. this are
               the basics staffs you can do in this project
            </p>
         </div>
         <div className={styles.authorInfo}>
            <h3>
               Developed by: 
               <a
                  href="https://github.com/TouhidZaman"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Muhammad Touhiduzzaman
               </a>
            </h3>
         </div>
      </div>
   );
};

export default About;
