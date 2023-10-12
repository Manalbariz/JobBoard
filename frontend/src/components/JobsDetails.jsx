const JobsDetails = ({ job }) => {
  const limite = 70;
  const descriptionLimitee = job.Description.slice(0, limite);

  return (
      <div className="job-details">
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
            <button className="btn">Voir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
