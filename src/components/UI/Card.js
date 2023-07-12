import React from "react";

const Card = (props) => {
  console.log(props.data);
  const link = props.data.link;
  const image = props.data.ogMetadata["og:image"];
  const title = props.data.ogMetadata["og:title"];
  const description = props.data.ogMetadata["og:description"];
  return (
    <div className={props.className}>
      <ul>
        <li style={{ textAlign: "left", width: "850px" }}>
          <img src={image} alt="website logo" width={200} />
          <p>{link}</p>
          <p>{title}</p>
          <p>{description}</p>
        </li>
      </ul>

      <p>https://oia.vercel.app/{props.code}</p>

      <button id={props.id} onClick={props.deleteClickHandlder}>
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
};

export default Card;
