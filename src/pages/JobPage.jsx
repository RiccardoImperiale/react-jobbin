import '../assets/css/job_page.css'
import { FaLocationDot } from "react-icons/fa6";
import { TbCoins } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

import { Link, useNavigate } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";


function JobPage({ deleteJob }) {
    const navigate = useNavigate()
    const job = useLoaderData()
    const onDeleteClick = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this job?')

        if (!confirm) return
        deleteJob(id)
        navigate('/jobs')
    }
    return (
        <div className="job_page container">
            <div className="job_info">
                <div className="top">
                    <div className='badges'>
                        <span>{job.type}</span>
                        <span className='go_back'>
                            <Link to='/jobs'><IoIosArrowBack /></Link>
                        </span>
                    </div>
                    <h3 className="job_title">{job.title}</h3>
                    {job.location && <>
                        <div className="wrapper location"><FaLocationDot className='icon' />
                            <span>{job.location}</span>
                        </div>
                    </>}
                    <p className="description">{job.description}</p>
                </div>

                <div className="bottom">
                    <div className="wrapper salary_title"><TbCoins className='icon' />
                        <span>Salary</span>
                    </div>
                    <div className="salary">{job.salary} <span>/ Year</span></div>
                </div>
            </div>
            <div className="company_info">
                <div className="top">
                    <h4>Company Info</h4>
                    <h3>{job.company.name}</h3>
                    <p>{job.company.description}</p>
                    <div className="contact">
                        <div><MdOutlineAlternateEmail className='icon' /> {job.company.contactEmail}</div>
                        {job.company.contactPhone && <div><LuPhoneCall className='icon' /> {job.company.contactPhone}</div>}
                    </div>
                </div>
                <div className="bottom">
                    <div className="actions">
                        <Link to={`/jobs/edit/${job.id}`} className='btn_dark'>Edit Job</Link>
                        <div onClick={() => onDeleteClick(job.id)} className='btn_dark'>Delete Job</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:8000/jobs/${params.id}`)
    const data = await res.json()
    return data;
}

export { JobPage as default, jobLoader }