import { useEffect, useState } from 'react';
import '../assets/css/job_listings.css'
import JobCard from './JobCard';
import Spinner from './Spinner';

export default function JobListings({ isHome = true }) {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
            console.log(apiUrl);
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setJobs(data)
            } catch (err) {
                console.log('Error fetching data', err);
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])

    return (
        <section className="job_listings">
            <div className="container">
                <h2 className="title">{isHome ? 'Recent Jobs' : 'Browse Jobs'} </h2>
                <div className="jobs">
                    {loading ? (
                        <Spinner loading={loading} />
                    ) : (
                        <>
                            {jobs.map((job) => <JobCard key={job.id} job={job} />)}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
