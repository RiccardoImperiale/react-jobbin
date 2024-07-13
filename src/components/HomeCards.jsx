import '../assets/css/home_cards.css'
import HomeCard from './HomeCard';
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { FaPaperPlane, FaSearch } from "react-icons/fa";


export default function HomeCards() {
    return (
        <section className='home_cards container'>
            <HomeCard title="For Developers" subtitle="Browse our jobs and start your career today" btnText="Browse Jobs" btnIcon={<FaSearch />} icon={<AiOutlineUser className='icon' />} />
            <HomeCard title="For Employers" subtitle="List your job to find the perfect developer for the role" btnText="Post Job" btnIcon={<FaPaperPlane />} icon={<AiOutlineTeam className='icon' />} />
        </section>
    )
}
