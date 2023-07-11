import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Data.module.css";
import Form from "./Form";

const Data = () => {
  const { user } = useAuth0();

  const [data, setData] = useState(null); // Initialize state to null

  const [deleteCode, setDeleteCode] = useState("");
  const [isDelete, setIsDelete] = useState("");

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/fetchUserLinks";
    // const url = "http://localhost:3000/api/fetchUserLinks";
    const bodyContent = {
      data: user.email,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: { "Content-Type": "application/json" },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json); // Update the state with fetched data
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/deleteUserLinks";
    // const url = "http://localhost:3000/api/deleteUserLinks";
    const bodyContent = {
      email: user.email,
      code: deleteCode,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: { "Content-Type": "application/json" },
    };

    if (isDelete) {
      const deleteData = async () => {
        try {
          const response = await fetch(url, options);
          const json = await response.json();
          console.log(json); // Update the state with fetched data
        } catch (error) {
          console.log("error", error);
        }
      };

      deleteData();
      setIsDelete(false);
    }
  }, [deleteCode, user.email, isDelete]);

  const deleteClickHandlder = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    setDeleteCode(event.target.id);
    setIsDelete(true);
  };

  console.log(data);

  return (
    <div>
      {data !== null && data !== false && data.length !== 0 ? (
        data.map((d) => {
          // console.log(d.code);
          return (
            <div key={Object.keys(d).toString()} className={styles.test}>
              <p>https://oia.vercel.app/{Object.keys(d).toString()}</p>
              <button
                id={Object.keys(d).toString()}
                onClick={deleteClickHandlder}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h2>Add some Data</h2>
      )}
      <Form />
    </div>
  );
};

export default Data;
