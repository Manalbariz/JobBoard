const JobsDetails = ({ job }) => {
    return (
        <div className="job-details">
            <h4>{job.Title}</h4>
            <p><strong>Déscription du post :</strong> {job.Description}</p>

        </div>
    )
}

export default JobsDetails