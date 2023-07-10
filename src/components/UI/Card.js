import React from "react";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  // console.log(data);
  return (
    <div className={styles.card}>
      {data !== null && data !== false ? (
        data.map((d) => {
          return <p key={d.code}>{d.code}</p>;
        })
      ) : (
        <h2>Add some Data</h2>
      )}
    </div>
  );
};

export default Card;
