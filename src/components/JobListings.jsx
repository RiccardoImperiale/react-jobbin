import '../assets/css/job_listings.css'
import JobCard from './JobCard';
import jobs from '../jobs.json'
import { MdFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function JobListings() {
    const recentJobs = jobs.slice(0, 3)
    return (
        <section className="job_listings">
            <div className="container">
                <h2 className="title">Browse Jobs</h2>
                <div className="jobs">
                    {recentJobs.map((job) => <JobCard key={job.id} job={job} />)}
                </div>

                <div className="bottom">
                    <Link to="/jobs" className="btn_dark btn_all_jobs"><MdFileDownload className='icon' />
                        See All Job Positions <MdFileDownload className='icon' />
                    </Link>
                </div>

            </div>
        </section>
    )
}
