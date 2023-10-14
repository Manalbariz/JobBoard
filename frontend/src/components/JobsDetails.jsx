import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const JobsDetails = ({ job }) => {
  const limite = 70;
  const descriptionLimitee = job.Description.slice(0, limite);

  // reccup de l id
  // const [clickedId, setClickedId] = useState(null); // on créer un state

  const handleButtonClick = (event) => {
    const elementId = event.target.getAttribute('id'); // on reccupère l'id au click
    // setClickedId(elementId);// on le stock dans le state



    
    console.log(job._id);
  };
  return (
    <div className="job-details" id={job._id} >
      {/* <h4>{job.Title}</h4>
            <p><strong>Déscription du post :</strong> {job.Description}</p> */}
      <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>{job.Contract}</h6>
            <h2>{job.Title}</h2>
          </div>
          <div className="course-info">
            <h6>{job.Localisation}</h6>
            <h2>{descriptionLimitee}...</h2>

            <Link to={`/jobs/${job._id}`}>
              <button className="btn" onClick={handleButtonClick}>Voir plus</button>
            </Link>
            <p>id = {job._id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
