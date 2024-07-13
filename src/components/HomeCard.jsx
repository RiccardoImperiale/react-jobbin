import '../assets/css/home_card.css'
import { Link } from 'react-router-dom'

export default function HomeCard({ title, subtitle, btnIcon, btnText, icon, linkTo }) {
    return (
        <div className="home_card">
            <div className="top">
                {icon}
                <h3>{title}</h3>
                <div>{subtitle}</div>
            </div>
            <div className="bottom">
                <Link className='btn_dark' to={linkTo}>{btnText} {btnIcon}</Link>
            </div>
        </div>
    )
}
