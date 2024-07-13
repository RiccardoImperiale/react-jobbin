import '../assets/css/job_listings.css'
import JobCard from './JobCard';

export default function JobListings() {
    return (
        <section className="job_listings">
            <div className="container">
                <h2 className="title">Browse Jobs</h2>
                <div className="jobs">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </section>
    )
}
