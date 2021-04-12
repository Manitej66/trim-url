import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
  const location = useLocation();
  useEffect(() => {
    (async () => {
      await axios
        .post(`${process.env.REACT_APP_2}`, {
          url: location.pathname.slice(1),
        })
        .then((res) => {
          window.location = res.data.longUrl;
        })
        .catch((e) => {
          console.log(e);
        });
    })();
  }, []);
  return <div></div>;
};

export default Redirect;
