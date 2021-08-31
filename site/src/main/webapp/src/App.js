import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const locationUrl = "/api/location";
    fetch(locationUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h2>Output:</h2>
        <table border={2} cellPadding={5}>
          <thead>
            <tr>
              <td>Key</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            {
              data &&
              data.map((element) => {
                return <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.content}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <div>Raw Response Output
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;


// const fetchData = async () => {
//   try {
//     const response = await fetch(locationUrl);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// fetchData();
