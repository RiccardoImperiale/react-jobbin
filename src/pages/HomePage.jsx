import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ShowAllJobsBtn from "../components/ShowAllJobsBtn"

export default function HomePage() {
    return (
        <main>
            <Hero />
            <HomeCards />
            <JobListings />
            <ShowAllJobsBtn />
        </main>
    )
}
