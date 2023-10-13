import React, { useState } from "react";
import unsplash from "./Unplash";
const UnplashGallry = () => {
  const [result, setResult] = useState([]); 
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    unsplash
      .get(`search/photos?page=1&per_page=20&query=${search}`)
      .then(function (response) {
        setResult(response.data.results);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>
        <input
          type="text"
          placeholder="Search Images"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </p>
      <div className="result">
        {result.length == 0 ? (
          <span>No Result Found</span>
        ) : (
          result.map((item, index) => {
            return (
              <div key={index} style={{ float: "left", marginLeft: "10px" }}>
                <a href={item.links.download} target="new">
                  <img src={item.links.download} width="200" height="200" />
                </a>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UnplashGallry;
