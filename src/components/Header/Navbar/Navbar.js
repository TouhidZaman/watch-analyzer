import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navContainer}>
            <h1>Watch Analyzer</h1>
            <ul className={styles.navLinks}>
               <li>
                  <Link to="/home">Home</Link>
               </li>
               <li>
                  <Link to="/reviews">Reviews</Link>
               </li>
               <li>
                  <Link to="/dashboard">Dashboard</Link>
               </li>
               <li>
                  <Link to="/blogs">Blogs</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
