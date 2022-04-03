import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink/CustomLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navContainer}>
            <h1>
               <Link to="/">Watch Analyzer</Link>
            </h1>
            <ul className={styles.navCustomLinks}>
               <li>
                  <CustomLink to="/" activeStyle={styles.activeStyle}>
                     Home
                  </CustomLink>
               </li>
               <li>
                  <CustomLink to="/reviews" activeStyle={styles.activeStyle}>
                     Reviews
                  </CustomLink>
               </li>
               <li>
                  <CustomLink to="/dashboard" activeStyle={styles.activeStyle}>
                     Dashboard
                  </CustomLink>
               </li>
               <li>
                  <CustomLink to="/blogs" activeStyle={styles.activeStyle}>
                     Blogs
                  </CustomLink>
               </li>
               <li>
                  <CustomLink to="/about" activeStyle={styles.activeStyle}>
                     About
                  </CustomLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
