import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ML_aprouved from "../assets/ml_aprouved.png";

const AdsDetails = ({ ads }) => {


  // reccup de l id
  // const [clickedId, setClickedId] = useState(null); // on créer un state

  //   const handleButtonClick = (event) => {
  //     const elementId = event.target.getAttribute('id'); // on reccupère l'id au click
  // setClickedId(elementId);// on le stock dans le state
  //     console.log(ad._id);
  //   };
  return (
    <div classNameName="job-details"  >
      {/* <h4>{job.Title}</h4>
            <p><strong>Déscription du post :</strong> {job.Description}</p> */}

      {/* <canvas className="orb-canvas"></canvas> */}

      <div className="overlay" style={{paddingBottom: "100px", paddingTop: "100px"}}>
        <div className="overlay__inner">
          <h1 className="overlay__title">
            {ads.Title}
            {/* <span className="text-gradient">generative</span>  */}
          </h1>
          <p className="overlay__description">
          {ads.Description} <br />
            {/* <strong><br/>Alors, postuler :) ?</strong> */}
          <strong>Salaire : </strong>{ads.Salary} <br />
          <strong>Type de contrat : </strong>{ads.Contract} <br />
          <strong>Localisation : </strong>{ads.Localisation}
          {/* {ads.Bosster &&  <img src={ML_aprouved} alt="ad aprouved" className='mlAprouved' />}; */}
          </p>
            <button className="overlay__btn">
            <span>Postuler</span>
              <span className="overlay__btn-emoji">:)</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default AdsDetails;