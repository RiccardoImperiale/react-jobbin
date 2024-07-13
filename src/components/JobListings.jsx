import '../assets/css/job_listings.css'
import JobCard from './JobCard';
import jobs from '../jobs.json'

export default function JobListings({ isHome = true }) {
    const jobList = isHome ? jobs.slice(0, 3) : jobs;
    return (
        <section className="job_listings">
            <div className="container">
                <h2 className="title">{isHome ? 'Recent Jobs' : 'Browse Jobs'} </h2>
                <div className="jobs">
                    {jobList.map((job) => <JobCard key={job.id} job={job} />)}
                </div>
            </div>
        </section>
    )
}
