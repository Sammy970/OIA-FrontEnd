import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Form = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState("");
  const [apiData, setApiData] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Add a form submitted flag

  useEffect(() => {
    // Only fetch data when the form is submitted
    if (isFormSubmitted) {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const json = await response.json();
          setApiData(json); // Update the state with fetched data
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
      setIsFormSubmitted(false); // Reset the form submitted flag
    }
  }, [apiUrl, isFormSubmitted]);

  const handleUserData = (event) => {
    setUserData(event.target.value);
  };

  const handleSubmitData = (event) => {
    event.preventDefault();
    const url = `https://oia.vercel.app/generate?link=${userData}&email=${user.email}`;
    // const url = `http://localhost:3003/generate?link=${userData}&email=${user.email}`;
    setApiUrl(url);
    setIsFormSubmitted(true); // Set the form submitted flag to true
  };

  return (
    <div>
      <form onSubmit={handleSubmitData}>
        <label htmlFor="userLink">Link to shorten:</label>
        <br />
        <input
          type="text"
          id="userLink"
          value={userData}
          onChange={handleUserData}
        />
        <button type="submit">Submit</button>
      </form>

      {apiData !== null && <p>{apiData.shortenedLink}</p>}
    </div>
  );
};

export default Form;
