import '../assets/css/job_page.css'
import { FaLocationDot } from "react-icons/fa6";
import { TbCoins } from "react-icons/tb";

import { useParams, useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react"
// import Spinner from '../components/Spinner';

function JobPage() {
    const { id } = useParams()
    const job = useLoaderData()
    // const [job, setJob] = useState(null)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`http://localhost:8000/jobs/${id}`)
    //             const data = await res.json()
    //             setJob(data)
    //         } catch (err) {
    //             console.log('Error fetching data', err);
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchJob()
    // }, [])

    return (
        // <div className="container">
        //     {loading ? <Spinner /> : (
        //         <>
        //             <h2>{job.title}</h2>
        //         </>
        //     )}
        // </div>
        <div className="job_page container">
            <div className="job_info">
                <div className="top">
                    <div className='badges'>
                        <span>{job.type}</span>
                    </div>
                    <h3 className="job_title">{job.title}</h3>
                    <div className="wrapper location"><FaLocationDot className='icon' />
                        <span>{job.location}</span>
                    </div>

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
                    <h3>Compant name solurion</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas illum. Minima odit repudiandae, labore reiciendis laudantium sapiente officia suscipit, error, nihil quis culpa sint ab alias voluptatibus? Temporibus, ex.
                    </p>
                </div>
                <div className="bottom">
                    <div className="actions">
                        <a href="" className='btn_dark'>Edit Job</a>
                        <a href="" className='btn_dark'>Delete Job</a>
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