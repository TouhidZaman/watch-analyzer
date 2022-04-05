import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink/CustomLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
   const redirects = [
      { id: 1, path: "/", name: "Home" },
      { id: 2, path: "/all-reviews", name: "Reviews" },
      { id: 3, path: "/dashboard", name: "Dashboard" },
      { id: 4, path: "/blogs", name: "Blogs" },
      { id: 5, path: "/about", name: "About" },
   ];
   return (
      <nav className={styles.navbar}>
         <div className={styles.navContainer}>
            <h1>
               <Link to="/">Watch Analyzer</Link>
            </h1>
            <ul className={styles.navCustomLinks}>
               {redirects.map((redirect) => (
                  <li key={redirect.id}>
                     <CustomLink to={redirect.path} activeStyle={styles.activeStyle}>
                        {redirect.name}
                     </CustomLink>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;