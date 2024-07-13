import { FaLocationDot } from "react-icons/fa6";
import '../assets/css/job_card.css'


export default function JobCard() {
    return (
        <div className="job_card">
            <div className="top">
                <div className='badges'>
                    <span>Full Time</span>
                </div>
                <h3 className="job_title">Senior React Developer</h3>
            </div>
            <div className="middle">
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sunt nihil fugit? Reiciendis, ducimus in! Repellendus minima, architecto sunt doloremque nam obcaecati quo numquam itaque, laboriosam quae recusandae, consequuntur natus.</p>
                <div className="salary">$70K - $70K / Year</div>
            </div>
            <div className="bottom">
                <div className="location"><FaLocationDot className='icon' />
                    <span>Boston</span>
                </div>
                <a className='btn_dark' href="#">Read More</a>
            </div>
        </div>
    )
}
