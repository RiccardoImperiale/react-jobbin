import { FaLocationDot } from "react-icons/fa6";
import '../assets/css/job_card.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
    const [showMore, setShowMore] = useState(false)
    let description = job.description
    if (!showMore) {
        description = description.substring(0, 100) + '...'
    }
    return (
        <div className="job_card">
            <div className="top">
                <div className='badges'>
                    <span>{job.type}</span>
                </div>
                <h3 className="job_title">{job.title}</h3>
                {job.description && <>
                    <p className="description">{description}</p>
                    <small onClick={() => setShowMore(!showMore)} className="show_more">
                        {showMore ? 'Show Less' : 'Show More'}
                    </small>
                </>}
            </div>

            <div className="bottom_card">
                <div className="salary">{job.salary} <span>/ Year</span></div>
                <div className="wrapper">
                    <div className="location">
                        {job.location && <>
                            <FaLocationDot className='icon' />
                            <span>{job.location}</span>
                        </>}
                    </div>
                    <Link className='btn_dark' to={`/jobs/${job.id}`}>Read More</Link>
                </div>
            </div>
        </div>
    )
}
