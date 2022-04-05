import React from "react";
import styles from "./Blogs.module.css";
import Questions from "./Questions/Questions";

const Blogs = () => {
   return (
      <div className={styles.blogs}>
         <Questions />
      </div>
   );
};

export default Blogs;
