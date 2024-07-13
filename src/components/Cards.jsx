import '../assets/css/cards.css'
import Card from './Card';
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { FaPaperPlane, FaSearch } from "react-icons/fa";


export default function Cards() {
    return (
        <section className='cards container'>
            <Card title="For Developers" subtitle="Browse our jobs and start your career today" btnText="Browse Jobs" btnIcon={<FaPaperPlane />} icon={<AiOutlineUser className='icon' />} />
            <Card title="For Employers" subtitle="List your job to find the perfect developer for the role" btnText="Post Job" btnIcon={<FaSearch />} icon={<AiOutlineTeam className='icon' />} />

        </section>
    )
}
