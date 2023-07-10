import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "./UI/Card";

const Data = () => {
  const { user } = useAuth0();

  const [data, setData] = useState(null); // Initialize state to null

  useEffect(() => {
    const url = "http://localhost:3000/api/fetchUserLinks";
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

  //   console.log(data);

  return (
    <div>
      <p>Hello</p>
      <Card data={data} />
    </div>
  );
};

export default Data;
