import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "./UI/Card";
import Form from "./Form";

const Data = () => {
  const { user } = useAuth0();

  const [data, setData] = useState(null); // Initialize state to null

  const [newData, setNewData] = useState("");

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/fetchUserLinks";
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
  }, [user, newData]);

  //   console.log(data);

  return (
    <div>
      <Card data={data} />
      <Form setNewData={setNewData} />
    </div>
  );
};

export default Data;
