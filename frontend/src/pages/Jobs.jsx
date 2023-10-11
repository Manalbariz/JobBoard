import { useEffect, useState } from "react";
import axios from "axios";

// Importez la composante JobsDetails

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

  // Filtrez les emplois insérés il y a moins de 2 heures
  const jobsFiltered = jobs && jobs.filter((job) => {
    const twoHoursAgo = new Date();
    twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

    const jobDate = new Date(job.insertionTime); // Assurez-vous que votre objet job a un champ "insertionTime"
    return jobDate >= twoHoursAgo;
  });

  return (
    <div className="Jobs">
      <h1>Il y a 2 heures :</h1>
      {jobsFiltered &&
        jobsFiltered.map((job) => (
          <JobsDetails key={job._id} job={job} />
        ))}
    </div>
  );
};

export default Jobs;
