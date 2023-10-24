import React from "react";
import styles from "./Home.module.css";
import data from "../../db/data";

const Home = () => {
  return (
    <div className={styles.mainhome}>
      <div className={styles.recomended}>Recomended</div>
      <div className={styles.products}>
        {data.map((e) => (
          <div className={styles.card} key={e.title}>
            <img src={e.img} />
            <h1>{e.title}</h1>
            <span>
              {e.star}
              <h4>{e.reviews}</h4>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
