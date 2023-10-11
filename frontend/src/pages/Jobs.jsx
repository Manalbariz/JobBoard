import { useEffect, useState } from "react";
import axios from "axios";

//import components
import JobsDetails from "../components/JobsDetails";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div className="Jobs">
      <h1>All Jobs</h1>
      {jobs &&
        jobs.map((job) => (
          <JobsDetails key={job._id} job={job}/>
        ))}
    </div>
  );
};

export default Jobs;
