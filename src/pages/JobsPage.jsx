import JobListings from "../components/JobListings";
import '../assets/css/jobs_page.css'
export default function JobsPage() {
    return (
        <div className="jobs_page">
            <JobListings isHome={false} />
        </div>
    )
}
