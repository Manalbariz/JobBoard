import React, { useEffect, useState } from "react";
import axios from "axios";
import AdsDetails from "../components/AdsDetails";

const Ads = () => {
  const id = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);

  const [ads, setAds] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/jobs/'+id)
      .then((response) => {
        setAds(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // Make sure to include `id` as a dependency



  return (
    <div className="Ads">
      {ads ? <AdsDetails key={ads._id} ads={ads} /> : <p>Loading...</p>}
    </div>
  );
};

export default Ads;
