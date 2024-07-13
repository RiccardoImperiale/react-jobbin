import '../assets/css/home_card.css'

export default function HomeCard({ title, subtitle, btnIcon, btnText, icon }) {
    return (
        <div className="home_card">
            <div className="top">
                {icon}
                <h3>{title}</h3>
                <div>{subtitle}</div>
            </div>
            <div className="bottom">
                <a className='btn_dark' href="#">{btnText} {btnIcon}</a>
            </div>
        </div>
    )
}
