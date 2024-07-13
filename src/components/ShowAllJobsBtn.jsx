import '../assets/css/show_all_jobs.css'
import { MdFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function ShowAllJobsBtn() {
    return (
        <div className="show_all_jobs">
            <Link to="/jobs" className="btn_dark btn_all_jobs"><MdFileDownload className='icon' />
                See All Job Positions <MdFileDownload className='icon' />
            </Link>
        </div>
    )
}
