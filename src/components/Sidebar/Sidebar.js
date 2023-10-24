import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.main}>
      <div>category</div>
      <div>price</div>
      <div>colors</div>
    </div>
  );
};

export default Sidebar;
