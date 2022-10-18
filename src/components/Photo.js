import React, { useState, useEffect } from "react";

const Photo = () => {
  const client_id = "TWVw4u_tUf93mgkpo12n7r5CJJv4H-cGfnQsboaYXdg";
  const endPoint = `https://api.unsplash.com/photos/random?client_id=${client_id}`;

  const [imgurl, setImgurl] = useState("");

  useEffect(() => {
    fetch(endPoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setImgurl(jsonData.urls.regular);
      });
  }, []);

  const getUrl = () => {
    fetch(endPoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setImgurl(jsonData.urls.thumb);
      });
  };

  return (
    <div className="container my-3">
      <div className="row">
        <img
          src={imgurl}
          alt=""
          //   width={50}
          //   height={250}
          style={{ borderRadius: 50 }}
        />
      </div>
      <div className="row">
        <button className="btn btn-primary my-3" onClick={getUrl}>
          Change Image
        </button>
      </div>
    </div>
  );
};

export default Photo;
